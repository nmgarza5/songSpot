import React from "react";
import {
    FaPlayCircle,
    FaFastForward,
    FaFastBackward,
    FaPauseCircle,
} from "react-icons/fa";

function PlayerControls({ isPlaying, setIsPlaying, skipSong }) {
    return (
        <div className="player-controls">
            <button className="skip-btn" onClick={() => skipSong(false)}>
                <FaFastBackward />
            </button>
            <button
                className="play-btn"
                onClick={() => setIsPlaying(!isPlaying)}
            >
                {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
            </button>
            <button className="skip-btn" onClick={() => skipSong(true)}>
                <FaFastForward />
            </button>
        </div>
    );
}

export default PlayerControls;
