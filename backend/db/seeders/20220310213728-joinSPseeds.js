"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        options.tableName = "JoinSPs";
        return queryInterface.bulkInsert(
            options,
            [
                {
                    playlistId: 1,
                    songId: 1,
                },
                {
                    playlistId: 1,
                    songId: 2,
                },
                {
                    playlistId: 1,
                    songId: 3,
                },
                {
                    playlistId: 1,
                    songId: 4,
                },
                {
                    playlistId: 1,
                    songId: 5,
                },
                {
                    playlistId: 1,
                    songId: 6,
                },
                {
                    playlistId: 2,
                    songId: 7,
                },
                {
                    playlistId: 2,
                    songId: 8,
                },
                {
                    playlistId: 2,
                    songId: 9,
                },
                {
                    playlistId: 3,
                    songId: 4,
                },
                {
                    playlistId: 3,
                    songId: 2,
                },
                {
                    playlistId: 3,
                    songId: 3,
                },
                {
                    playlistId: 3,
                    songId: 5,
                },
                {
                    playlistId: 3,
                    songId: 6,
                },
                {
                    playlistId: 4,
                    songId: 5,
                },
                {
                    playlistId: 4,
                    songId: 4,
                },
                {
                    playlistId: 4,
                    songId: 7,
                },
                {
                    playlistId: 4,
                    songId: 8,
                },
                {
                    playlistId: 4,
                    songId: 5,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        options.tableName = "JoinSPs";
        return queryInterface.bulkDelete(options, null, {});
    },
};
