const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const songsRouter = require("./songs.js");
const playlistsRouter = require("./playlists.js");
const likesRouter = require("./likes.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/songs", songsRouter);

router.use("/playlists", playlistsRouter);

router.use("/likes", likesRouter);

module.exports = router;
