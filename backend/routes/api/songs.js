const express = require("express");
const asyncHandler = require("express-async-handler");
const { restoreUser } = require("../../utils/auth");
const { Song, User } = require("../../db/models");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const songs = await Song.findAll();
        res.json(songs);
    })
);
router.post(
    "/",
    restoreUser,
    asyncHandler(async (req, res) => {
        const userId = req.user.id;
        const genreId = req.body.genre;
        const title = req.body.title;
        const imageUrl = req.body.imageUrl;
        const audioUrl = req.body.audioUrl;

        await Song.create({
            userId,
            genreId,
            title,
            imageUrl,
            audioUrl,
        });
        res.redirect("/");
    })
);

router.put(
    "/:id",
    restoreUser,
    asyncHandler(async (req, res) => {
        const userId = req.user.id;
        const genreId = req.body.genre;
        const title = req.body.title;
        const imageUrl = req.body.imageUrl;
        const audioUrl = req.body.audioUrl;
        const songId = req.params.id;

        const song = await Song.findByPk(songId);
        song.genreId = genreId;
        song.title = title;
        song.imageUrl = imageUrl;
        song.audioUrl = audioUrl;
        await review.save();
        res.json({ song });
    })
);

module.exports = router;
