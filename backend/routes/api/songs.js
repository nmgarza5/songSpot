const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { restoreUser, requireAuth } = require("../../utils/auth");
const { Song, User } = require("../../db/models");

const router = express.Router();

const validateSong = [
    check("genre")
        .exists({ checkFalsy: true })
        .withMessage("Must enter a genre"),
    check("title")
        .exists({ checkFalsy: true })
        .withMessage("The song must have a name."),
    check("title")
        .isLength({ max: 120 })
        .withMessage("Song title can't be longer than 120 characters."),
    check("imageUrl")
        .exists({ checkFalsy: true })
        .isURL()
        .withMessage("Please enter a valid URL for the song image."),
    check("audioUrl")
        .exists({ checkFalsy: true })
        .isURL()
        .withMessage("Please enter a valid URL for the song audio."),
    handleValidationErrors,
];

//use handleValidation errors
const songNotFoundError = (id) => {
    const err = Error("Tweet not found");
    err.errors = [`Song with id of ${id} could not be found.`];
    err.title = "Tweet not found.";
    err.status = 404;
    return err;
};

// get all songs and associated user in order from most recently created
router.get(
    "/",
    asyncHandler(async (req, res) => {
        const songs = await Song.findAll({
            include: [{ model: User, as: "user", attributes: ["username"] }],
        });
        if (songs) res.json({ songs });
    })
);

// get a specific song
router.get(
    "/:id",
    asyncHandler(async (req, res, next) => {
        const songId = req.params.id;
        const song = await Song.findByPk(songId);
        if (song) {
            const retSong = await Song.findByPk(song.id, {
                include: [
                    { model: User, as: "user", attributes: ["username"] },
                ],
            });
            res.json({ retSong });
        } else {
            next(songNotFoundError(req.params.id));
        }
    })
);

router.post(
    "/",
    restoreUser,
    requireAuth,
    validateSong,
    asyncHandler(async (req, res) => {
        const { title, genre, imageUrl, audioUrl } = req.body;
        const song = await Song.create({
            userId: req.user.id,
            title,
            genre,
            imageUrl,
            audioUrl,
        });
        const retSong = await Song.findByPk(song.id, {
            include: [{ model: User, as: "user", attributes: ["username"] }],
        });
        if (retSong) res.json({ retSong });
    })
);

router.put(
    "/:id",
    restoreUser,
    requireAuth,
    validateSong,
    asyncHandler(async (req, res) => {
        const songId = req.params.id;
        const { title, genre, imageUrl, audioUrl } = req.body;
        const song = await Song.findByPk(songId);
        if (song) {
            await song.update({
                title,
                genre,
                imageUrl,
                audioUrl,
            });
            const retSong = await Song.findByPk(song.id, {
                include: [
                    { model: User, as: "user", attributes: ["username"] },
                ],
            });
            return res.json({ retSong });
        } else {
            next(songNotFoundError(req.params.id));
        }
    })
);

router.delete(
    "/:id",
    restoreUser,
    requireAuth,
    asyncHandler(async (req, res) => {
        const songId = req.params.id;
        const song = await Song.findByPk(songId);
        if (song) {
            await song.destroy();
            res.json({ response: "Success" });
        }
    })
);

module.exports = router;
