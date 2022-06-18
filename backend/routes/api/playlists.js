const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { restoreUser, requireAuth } = require("../../utils/auth");
const { Playlist, User, Song, JoinSP, PlaylistLike, SongLike } = require("../../db/models");

const router = express.Router();

const validatePlaylist = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Must enter a name")
        .isLength({ max: 30 })
        .withMessage("Playlist name can't be longer than 30 characters."),
    handleValidationErrors,
];

//use handleValidation errors
const playlistNotFoundError = (id) => {
    const err = Error("Playlist not found");
    err.errors = [`Song with id of ${id} could not be found.`];
    err.title = "Song not found.";
    err.status = 404;
    return err;
};

// get all playlists and associated user in order from most recently created
router.get(
    "/",
    asyncHandler(async (req, res) => {
        const playlists = await Playlist.findAll({
            include: [
                { model: User, as: "user", attributes: ["username"] },
                { model: PlaylistLike },
                {
                    model: Song,
                    as: "songs",
                    attributes: ["id", "title", "genre", "imageUrl", "audioUrl"],
                    include: [
                        { model: SongLike },
                        { model: User, as: "user", attributes: ["username"] },
                    ],
                },
            ],
        });
        if (playlists) res.json({ playlists });
    })
);
// get a specific playlist
router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const playlistId = req.params.id;
        const playlist = await Playlist.findByPk(playlistId);
        if (playlist) {
            const retPlaylist = await Playlist.findByPk(playlist.id, {
                include: [
                    { model: User, as: "user", attributes: ["username"] },
                    { model: PlaylistLike },
                    {
                        model: Song,
                        as: "songs",
                        attributes: ["id", "title", "genre", "imageUrl", "audioUrl"],
                        include: [
                            { model: SongLike },
                            {
                                model: User,
                                as: "user",
                                attributes: ["username"],
                            },
                        ],
                    },
                ],
            });
            res.json({ retPlaylist });
        } else {
            next(playlistNotFoundError(req.params.id));
        }
    })
);

router.post(
    "/",
    restoreUser,
    requireAuth,
    validatePlaylist,
    asyncHandler(async (req, res) => {
        const { name } = req.body;
        const playlist = await Playlist.create({
            userId: req.user.id,
            name,
        });
        const retPlaylist = await Playlist.findByPk(playlist.id, {
            include: [
                { model: User, as: "user", attributes: ["username"] },
                {
                    model: Song,
                    as: "songs",
                    attributes: ["id", "title", "genre", "imageUrl", "audioUrl"],
                    include: [
                        {
                            model: User,
                            as: "user",
                            attributes: ["username"],
                        },
                    ],
                },
            ],
        });
        if (retPlaylist) res.json({ retPlaylist });
    })
);

router.put(
    "/addSong",
    restoreUser,
    requireAuth,
    asyncHandler(async (req, res) => {
        const { songId, playlistId } = req.body;
        const newEntry = await JoinSP.create({
            songId,
            playlistId,
        });
        if (newEntry) {
            const retPlaylist = await Playlist.findByPk(playlistId, {
                include: [
                    { model: User, as: "user", attributes: ["username"] },
                    {
                        model: Song,
                        as: "songs",
                        attributes: ["id", "title", "genre", "imageUrl", "audioUrl"],
                        include: [
                            {
                                model: User,
                                as: "user",
                                attributes: ["username"],
                            },
                        ],
                    },
                ],
            });
            if (retPlaylist) res.json({ retPlaylist });
        }
    })
);
router.put(
    "/deleteSong",
    restoreUser,
    requireAuth,
    asyncHandler(async (req, res) => {
        const { songId, id } = req.body;
        const entry = await JoinSP.findOne({
            where: {
                songId: songId,
                playlistId: id,
            },
        });
        if (entry) {
            await entry.destroy();
            const retPlaylist = await Playlist.findByPk(id, {
                include: [
                    { model: User, as: "user", attributes: ["username"] },
                    {
                        model: Song,
                        as: "songs",
                        attributes: ["id", "title", "genre", "imageUrl", "audioUrl"],
                        include: [
                            {
                                model: User,
                                as: "user",
                                attributes: ["username"],
                            },
                        ],
                    },
                ],
            });
            if (retPlaylist) res.json({ retPlaylist });
        }
    })
);

router.put(
    "/:id",
    restoreUser,
    requireAuth,
    validatePlaylist,
    asyncHandler(async (req, res) => {
        const { name, id } = req.body;
        const playlist = await Playlist.findByPk(id);

        if (playlist) {
            await playlist.update({ name });
            const retPlaylist = await Playlist.findByPk(playlist.id, {
                include: [
                    { model: User, as: "user", attributes: ["username"] },
                    {
                        model: Song,
                        as: "songs",
                        attributes: ["id", "title", "genre", "imageUrl", "audioUrl"],
                        include: [
                            {
                                model: User,
                                as: "user",
                                attributes: ["username"],
                            },
                        ],
                    },
                ],
            });
            return res.json({ retPlaylist });
        }
    })
);

router.delete(
    "/:id",
    restoreUser,
    requireAuth,
    asyncHandler(async (req, res) => {
        const playlistId = req.params.id;
        await JoinSP.destroy({
            where: {
                playlistId,
            },
        });
        const playlist = await Playlist.findByPk(playlistId);
        if (playlist) {
            await playlist.destroy();
            res.json({ response: "Success" });
        }
    })
);
module.exports = router;
