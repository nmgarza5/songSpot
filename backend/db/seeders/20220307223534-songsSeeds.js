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
                    genre: "EDM",
                    title: "The Boom Bap Vibe",
                    imageUrl:
                        "https://cdn.pixabay.com/user/2022/01/23/16-39-02-892_250x250.jpg",
                    audioUrl:
                        "https://cdn.pixabay.com/download/audio/2022/03/07/audio_4cf1ed1b62.mp3?filename=the-boom-bap-vibe-22164.mp3",
                },
                {
                    userId: 1,
                    genre: "EDM",
                    title: "Better Days",
                    imageUrl:
                        "https://images.unsplash.com/photo-1506326678933-3c87f03b2777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZpYmV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    audioUrl:
                        "https://cdn.pixabay.com/download/audio/2022/03/07/audio_cad577028a.mp3?filename=better-days-22163.mp3",
                },
                {
                    userId: 1,
                    genre: "EDM",
                    title: "The Future Bass",
                    imageUrl:
                        "https://images.unsplash.com/photo-1623413362179-43052d1f953c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFzcyUyMGZpc2h8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    audioUrl:
                        "https://cdn.pixabay.com/download/audio/2022/01/18/audio_dcb90a7b04.mp3?filename=the-future-bass-15017.mp3",
                },
                {
                    userId: 2,
                    genre: "R&B",
                    title: "Drip",
                    imageUrl:
                        "https://images.unsplash.com/photo-1621618963067-137bd4c9d04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJpcCUyMHJhcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    audioUrl:
                        "https://cdn.pixabay.com/download/audio/2022/02/25/audio_5c2a3e5478.mp3?filename=drip-21639.mp3",
                },
                {
                    userId: 2,
                    genre: "EDM",
                    title: "Reggaeton house",
                    imageUrl:
                        "https://images.unsplash.com/photo-1530352705471-552f5be6256a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjBtdXNpY3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
                    audioUrl:
                        "https://cdn.pixabay.com/download/audio/2022/03/02/audio_2389f65037.mp3?filename=reggaeton-house-21895.mp3",
                },
                {
                    userId: 2,
                    genre: "Hip-Hop",
                    title: "Light Work",
                    imageUrl:
                        "https://images.unsplash.com/photo-1587145820137-a9dbc8c5ed99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxpZ3RoJTIwd29ya3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
                    audioUrl:
                        "https://cdn.pixabay.com/download/audio/2022/03/01/audio_5393983a88.mp3?filename=chill-hip-hop-21825.mp3",
                },
                {
                    userId: 3,
                    genre: "Rock",
                    title: "Right On Target",
                    imageUrl:
                        "https://images.pexels.com/photos/4689159/pexels-photo-4689159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    audioUrl:
                        "https://cdn.pixabay.com/download/audio/2022/01/26/audio_30550585f5.mp3?filename=right-on-target-15699.mp3",
                },
                {
                    userId: 3,
                    genre: "Rock",
                    title: "Transformer",
                    imageUrl:
                        "https://cdn.pixabay.com/photo/2017/05/26/22/57/woman-2347205__340.jpg",
                    audioUrl:
                        "https://cdn.pixabay.com/download/audio/2022/01/20/audio_15c35e3db9.mp3?filename=transformer-15196.mp3",
                },
                {
                    userId: 3,
                    genre: "Rock",
                    title: "Battle of Titans",
                    imageUrl:
                        "https://cdn.pixabay.com/photo/2019/06/08/00/08/the-giants-4259331__340.png",
                    audioUrl:
                        "https://cdn.pixabay.com/download/audio/2022/02/28/audio_1098e6aca8.mp3?filename=battle-of-titans-21773.mp3",
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
