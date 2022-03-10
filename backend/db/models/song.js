"use strict";
module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define(
        "Song",
        {
            userId: DataTypes.INTEGER,
            genre: DataTypes.STRING,
            title: DataTypes.STRING,
            imageUrl: DataTypes.TEXT,
            audioUrl: DataTypes.TEXT,
        },
        {}
    );
    Song.associate = function (models) {
        // associations can be defined here
        Song.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId",
        });
        Song.belongsToMany(models.Playlist, {
            through: "JoinSP",
            foreignKey: "songId",
            otherKey: "playlistId",
        });
    };
    return Song;
};
