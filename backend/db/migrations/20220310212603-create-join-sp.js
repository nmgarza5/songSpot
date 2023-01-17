"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            "JoinSPs",
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                playlistId: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    references: {
                        model: "Playlists",
                    },
                },
                songId: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    references: {
                        model: "Songs",
                    },
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn("now"),
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn("now"),
                },
            },
            options
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("JoinSPs", options);
    },
};
