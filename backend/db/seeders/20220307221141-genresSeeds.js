"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert(
            "Genres",
            [
                {
                    name: "Rock",
                },
                {
                    name: "Jazz",
                },
                {
                    name: "EDM",
                },
                {
                    name: "Country",
                },
                {
                    name: "Hip-Hop",
                },
                {
                    name: "R&B",
                },
                {
                    name: "Pop",
                },
                {
                    name: "Indie",
                },
                {
                    name: "Classical",
                },
                {
                    name: "Latin",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkDelete("Genres", null, {});
    },
};
