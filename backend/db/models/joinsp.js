'use strict';
module.exports = (sequelize, DataTypes) => {
  const JoinSP = sequelize.define('JoinSP', {
    playlistId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  JoinSP.associate = function(models) {
    // associations can be defined here
  };
  return JoinSP;
};