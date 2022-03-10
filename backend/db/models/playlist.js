"use strict";
module.exports = (sequelize, DataTypes) => {
    const Playlist = sequelize.define(
        "Playlist",
        {
            name: DataTypes.STRING,
            userId: DataTypes.INTEGER,
        },
        {}
    );
    Playlist.associate = function (models) {
        // associations can be defined here
        Playlist.belongsTo(models.User, { foreignKey: "userId" });
        Playlist.belongsToMany(models.Song, {
            through: "JoinSP",
            foreignKey: "playlistId",
            otherKey: "songId",
        });
    };
    return Playlist;
};
