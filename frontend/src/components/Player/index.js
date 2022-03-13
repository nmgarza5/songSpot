import React from "react";
import ReactPlayer from "react-player";
import AudioPlayer from "react-h5-audio-player";

const Player = ({ songAudio }) => {
    return <audio className="audioPlayer" controls src={songAudio} />;
};

export default Player;
