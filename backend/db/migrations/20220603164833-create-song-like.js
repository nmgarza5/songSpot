"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            "SongLikes",
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                userId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: "Users",
                    },
                },
                songId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
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
        return queryInterface.dropTable("SongLikes", options);
    },
};
