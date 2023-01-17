"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            "Songs",
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                userId: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    references: {
                        model: "Users",
                    },
                },
                genre: {
                    allowNull: false,
                    type: Sequelize.STRING,
                },
                title: {
                    allowNull: false,
                    type: Sequelize.STRING(30),
                },
                imageUrl: {
                    allowNull: false,
                    type: Sequelize.TEXT,
                },
                audioUrl: {
                    allowNull: false,
                    type: Sequelize.TEXT,
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
        return queryInterface.dropTable("Songs", options);
    },
};
