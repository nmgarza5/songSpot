const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { restoreUser, requireAuth } = require("../../utils/auth");
const { Playlist, User, Song } = require("../../db/models");

const router = express.Router();

const validatePlaylist = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Must enter a name")
        .isLength({ max: 30 })
        .withMessage("Playlist name can't be longer than 30 characters."),
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
                {
                    model: Song,
                    as: "songs",
                    attributes: ["title", "genre", "imageUrl", "audioUrl"],
                    include: [
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
                    {
                        model: Song,
                        as: "songs",
                        attributes: ["title", "genre", "imageUrl", "audioUrl"],
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
            res.json({ retPlaylist });
        } else {
            next(playlistNotFoundError(req.params.id));
        }
    })
);

module.exports = router;
