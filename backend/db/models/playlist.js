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
        Playlist.belongsTo(models.User, { as: "user", foreignKey: "userId" });
        Playlist.belongsToMany(models.Song, {
            as: "songs",
            through: "JoinSP",
            foreignKey: "playlistId",
            otherKey: "songId",
        });
    };
    return Playlist;
};
