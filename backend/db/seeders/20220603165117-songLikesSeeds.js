"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        options.tableName = "SongLikes";
        return queryInterface.bulkInsert(
            options,
            [
                { userId: 1, songId: 1 },
                { userId: 1, songId: 3 },
                { userId: 1, songId: 5 },
                { userId: 1, songId: 4 },
                { userId: 1, songId: 2 },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        options.tableName = "SongLikes";
        return queryInterface.bulkDelete(options, null, {});
    },
};
