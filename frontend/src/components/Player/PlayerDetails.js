import React from "react";

function PlayerDetails({ currentSong }) {
    return (
        <div className="player-details">
            <h2 className="details-title">{currentSong.title}</h2>
            -
            <h4 className="details-artist">{currentSong.user.username}</h4>
        </div>
    );
}

export default PlayerDetails;
