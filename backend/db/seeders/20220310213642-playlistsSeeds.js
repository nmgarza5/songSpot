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
                    name: "Lofi Coding Jams",
                    userId: 2,
                },
                {
                    name: "SPRINT",
                    userId: 1,
                },
                {
                    name: "SOLO DOLO REACT",
                    userId: 2,
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
