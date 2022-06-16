'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaylistLike = sequelize.define('PlaylistLike', {
    userId: DataTypes.INTEGER,
    playlistId: DataTypes.INTEGER
  }, {});
  PlaylistLike.associate = function(models) {
    // associations can be defined here
    PlaylistLike.belongsTo(models.Playlist, { foreignKey: 'playlistId' });
    PlaylistLike.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return PlaylistLike;
};
