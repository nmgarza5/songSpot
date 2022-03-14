"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert(
            "Playlists",
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
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkDelete("Playlists", null, {});
    },
};
