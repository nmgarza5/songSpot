"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        options.tableName = "Playlists";
        return queryInterface.bulkInsert(
            options,
            [
                {
                    name: "App Academy Bangers",
                    userId: 1,
                },
                {
                    name: "Rock On",
                    userId: 3,
                },
                {
                    name: "Lofi Coding Jams",
                    userId: 2,
                },
                {
                    name: "Yay Area",
                    userId: 1,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        options.tableName = "Playlists";
        return queryInterface.bulkDelete(options, null, {});
    },
};
