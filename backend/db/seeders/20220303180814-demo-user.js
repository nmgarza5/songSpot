"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Users",
            [
                {
                    email: "demo@user.io",
                    username: "Demo-lition",
                    hashedPassword: bcrypt.hashSync("password"),
                },
                {
                    email: "user1@user.io",
                    username: "JD_BeatMaster",
                    hashedPassword: bcrypt.hashSync("password2"),
                },
                {
                    email: "user2@user.io",
                    username: "React-Noob",
                    hashedPassword: bcrypt.hashSync("password3"),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(
            "Users",
            {
                username: {
                    [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"],
                },
            },
            {}
        );
    },
};
