import React from "react";

const Player = ({ songAudio }) => {
    return <audio controls className="audioPlayer" controls src={songAudio} />;
};

export default Player;
