'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('SongLikes', [
     { userId: 1, songId: 1},
     { userId: 1, songId: 3},
     { userId: 1, songId: 5},
     { userId: 1, songId: 4},
     { userId: 1, songId: 2},
     { userId: 2, songId: 2},
     { userId: 3, songId: 2},
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('SongLikes', null, {});
  }
};
