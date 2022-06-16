'use strict';
module.exports = (sequelize, DataTypes) => {
  const SongLike = sequelize.define('SongLike', {
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  SongLike.associate = function(models) {
    // associations can be defined here
  };
  return SongLike;
};