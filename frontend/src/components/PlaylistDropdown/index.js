import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./PlaylistDropdown.css";
import { addSongThunk } from "../../store/playlistReducer";
import PlaylistNewModal from "../PlaylistNewModal";

function PlaylistDropdown({ playlists, currentUser, songId }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const userPlaylists = playlists.filter(
        (playlist) => currentUser === playlist.user.username
    );

    const addSong = async (playlistId) => {
        const addSongData = { songId, playlistId };
        await dispatch(addSongThunk(addSongData));
        alert("Song added to your Playlist :)");
    };

    return (
        <>
            <div
                className="dropdown"
                onClick={() => setShowMenu(!showMenu)}
            >
                Add to Playlist
            </div>
            {showMenu && (
                <ul className="playlist-dropdown">
                    <li className="dropdown-item" >
                        <PlaylistNewModal songId={songId}/>
                    </li>
                    {userPlaylists.map((playlist) => {
                        return (
                            <li
                                key={playlist.id}
                                className="dropdown-item"
                                onClick={() => {
                                    addSong(playlist.id);
                                }}
                            >
                                {playlist.name}
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
}

export default PlaylistDropdown;
