import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./PlaylistDropdown.css";
import { addSongThunk } from "../../store/playlistReducer";

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
                className="username-dropdown"
                onClick={() => setShowMenu(!showMenu)}
            >
                Add to Playlist
                <i className="fa-regular fa-square-plus"></i>
            </div>
            {showMenu && (
                <ul className="profile-dropdown">
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
