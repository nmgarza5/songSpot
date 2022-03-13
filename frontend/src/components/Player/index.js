import React from "react";

const Player = ({ songAudio }) => {
    return <audio className="audioPlayer" controls src={songAudio} />;
};

export default Player;
