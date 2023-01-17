"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        options.tableName = "PlaylistsLikes";
        return queryInterface.bulkInsert(
            options,
            [
                { userId: 1, playlistId: 1 },
                { userId: 1, playlistId: 3 },
                { userId: 1, playlistId: 4 },
                { userId: 1, playlistId: 2 },
                { userId: 2, playlistId: 1 },
                { userId: 2, playlistId: 3 },
                { userId: 2, playlistId: 4 },
                { userId: 2, playlistId: 2 },
                { userId: 3, playlistId: 1 },
                { userId: 3, playlistId: 3 },
                { userId: 3, playlistId: 4 },
                { userId: 3, playlistId: 2 },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        options.tableName = "Playlists";
        return queryInterface.bulkDelete(options, null, {});
    },
};
