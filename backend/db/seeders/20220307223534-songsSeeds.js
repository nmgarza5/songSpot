"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert(
            "Songs",
            [
                {
                    userId: 1,
                    genre: "Rock",
                    title: "Don't You Think",
                    imageUrl:
                        "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                    audioUrl:
                        "https://pixabay.com/music/beats-dont-you-think-lose-16073/",
                },
                {
                    userId: 1,
                    genre: "EDM",
                    title: "Sensei",
                    imageUrl:
                        "https://images.unsplash.com/photo-1581974944026-5d6ed762f617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWRtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    audioUrl: "https://pixabay.com/music/beats-sensei-21145/",
                },
                {
                    userId: 1,
                    genre: "EDM",
                    title: "The Future Bass",
                    imageUrl:
                        "https://images.unsplash.com/photo-1601248981942-89b99a5b7427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzcyUyMGZpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    audioUrl:
                        "https://pixabay.com/music/future-bass-the-future-bass-15017/",
                },
                {
                    userId: 2,
                    genre: "R&B",
                    title: "Drip",
                    imageUrl:
                        "https://images.unsplash.com/photo-1621618963067-137bd4c9d04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJpcCUyMHJhcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    audioUrl: "https://pixabay.com/music/beats-drip-21639/",
                },
                {
                    userId: 2,
                    genre: "EDM",
                    title: "Hunt",
                    imageUrl:
                        "https://images.unsplash.com/photo-1561053266-cf7875158227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aHVudCUyMHRyaXBweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    audioUrl:
                        "https://pixabay.com/music/beats-hunt-120bpm-cm-loop-21273/",
                },
                {
                    userId: 2,
                    genre: "EDM",
                    title: "Yesterday",
                    imageUrl:
                        "https://images.unsplash.com/photo-1607523751915-5291fab91551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eWVzdGVyZGF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    audioUrl:
                        "https://pixabay.com/music/beats-yesterday-extended-version-14197/",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkDelete("Songs", null, {});
    },
};
