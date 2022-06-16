'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('PlaylistLikes', [
        { userId: 1, playlistId: 1},
        { userId: 1, playlistId: 3},
        { userId: 1, playlistId: 4},
        { userId: 1, playlistId: 2},
     ], {});
     },

     down: (queryInterface, Sequelize) => {
       /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         */
      return queryInterface.bulkDelete('PlaylistLikes', null, {});
     }
   };
