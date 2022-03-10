const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { restoreUser, requireAuth } = require("../../utils/auth");
const { Song, User } = require("../../db/models");

const router = express.Router();

const validatePlaylist = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Must enter a name")
        .isLength({ max: 30 })
        .withMessage("Playlist name can't be longer than 30 characters."),
];

module.exports = router;
