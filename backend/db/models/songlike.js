'use strict';
module.exports = (sequelize, DataTypes) => {
  const SongLike = sequelize.define('SongLike', {
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  SongLike.associate = function(models) {
    // associations can be defined here
    SongLike.belongsTo(models.Song, { foreignKey: 'songId' });
    SongLike.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return SongLike;
};
