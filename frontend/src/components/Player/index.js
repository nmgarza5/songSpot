import React, { useState, useEffect, useRef } from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";
import "./Player.css";

const Player = ({ songs }) => {
    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playerSongs] = useState(songs);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(
        currentSongIndex + 1 || 0
    );

    const currentSong = playerSongs?.[currentSongIndex] || playerSongs;
    const nextSongTitle =
        playerSongs?.[nextSongIndex]?.title || playerSongs?.title;
    const nextSongArtist =
        playerSongs?.[nextSongIndex]?.user?.username ||
        playerSongs?.[0]?.user?.username ||
        playerSongs?.user?.username;

    //increment the song index
    useEffect(() => {
        currentSongIndex + 1 > playerSongs?.length
            ? setNextSongIndex(0)
            : setNextSongIndex(currentSongIndex + 1);
    }, [currentSongIndex, playerSongs.length]);

    //if isPlaying is set to true, then play the song. else pause the song
    useEffect(() => {
        isPlaying ? audioElement.current.play() : audioElement.current.pause();
    }, [isPlaying]);

    // create temp var to check song position
    //move forward in songs array if forwards is true. if at the end of the array, move to 0 index
    //move backward in songs array if forwards is false. if at the beginning of the array, move to last index
    const skipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;
                if (temp > playerSongs.length - 1) temp = 0;
                return temp;
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;
                if (temp < 0) temp = playerSongs.length - 1;
                return temp;
            });
        }
    };

    return (
        <div className="audio-player">
            <audio
                ref={audioElement}
                src={currentSong.audioUrl}
                preload="auto"
            />
            <PlayerDetails currentSong={currentSong} />
            <PlayerControls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
            />
            <p>
                <strong>Next up:</strong>
                {nextSongTitle} by {nextSongArtist}
            </p>
        </div>
    );
};
export default Player;
