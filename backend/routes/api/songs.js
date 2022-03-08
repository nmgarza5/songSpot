const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Song } = require("../../db/models");

const router = express.Router();

router.get(
    "/",
    requireAuth,
    asyncHandler(async (req, res) => {
        const songs = await db.Song.findAll();
    })
);
