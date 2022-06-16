const express = require("express");
const asyncHandler = require("express-async-handler");
const { restoreUser, requireAuth } = require("../../utils/auth");
const { PlaylistLike, SongLike } = require("../../db/models");

const router = express.Router();


// get all songs and associated user
router.get(
    "/song",
    asyncHandler(async (req, res) => {
        const songLikes = await SongLike.findAll();
        if (songLikes) res.json({ songLikes });
    })
);

router.post(
    "/song",
    restoreUser,
    requireAuth,
    asyncHandler(async (req, res) => {
        const { songId } = req.body;
        const songLike = await SongLike.create({
            userId: req.user.id,
            songId
        });
        const retLike = await SongLike.findByPk(songLike.id);
        if (retLike) res.json({ retLike });
    })
);

router.delete(
    "/song",
    restoreUser,
    requireAuth,
    asyncHandler(async (req, res) => {
        const { id } = req.body;
        const songLike = await SongLike.findByPk(id);
        if (songLike) {
            await songLike.destroy();
            res.json({ response: "Success" });
        }
    })
);
router.post(
    "/playlist",
    restoreUser,
    requireAuth,
    asyncHandler(async (req, res) => {
        const { playlistId } = req.body;
        console.log("\n\n PLAYLISTID", playlistId, "\n")
        const playlistLike = await PlaylistLike.create({
            userId: req.user.id,
            playlistId
        });
        const retLike = await PlaylistLike.findByPk(playlistLike.id);
        if (retLike) res.json({ retLike });
    })
);

router.delete(
    "/playlist",
    restoreUser,
    requireAuth,
    asyncHandler(async (req, res) => {
        const { id } = req.body;
        console.log("\n\n id", id, "\n")
        const playlistLike = await PlaylistLike.findByPk(id);
        if (playlistLike) {
            await playlistLike.destroy();
            res.json({ response: "Success" });
        }
    })
);

module.exports = router;
