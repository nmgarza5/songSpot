'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaylistLike = sequelize.define('PlaylistLike', {
    userId: DataTypes.INTEGER,
    playlistId: DataTypes.INTEGER
  }, {});
  PlaylistLike.associate = function(models) {
    // associations can be defined here
  };
  return PlaylistLike;
};