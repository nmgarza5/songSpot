"use strict";
module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define(
        "Song",
        {
            userId: DataTypes.INTEGER,
            genreId: DataTypes.INTEGER,
            title: DataTypes.STRING,
            imageUrl: DataTypes.TEXT,
            audioUrl: DataTypes.TEXT,
        },
        {}
    );
    Song.associate = function (models) {
        // associations can be defined here

        Song.belongsTo(models.Genre, {foreignKey: 'genreId'});
        Song.belongsTo(models.User, {foreignKey: 'userId'})
    };
    return Song;
};
