import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import "./PlaylistDropdown.css";
import PlaylistNewModal from "../PlaylistNewModal";
import { addSongThunk } from "../../store/playlistReducer";

function PlaylistDropdown({ playlists, currentUser, songId }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [playlistId, setPlaylistId] = useState("");
    const [addSongData, setAddSongData] = useState("");
    const userPlaylists = playlists.filter(
        (playlist) => currentUser === playlist.user.username
    );
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        setAddSongData({ songId, playlistId });
    }, [setAddSongData]);

    const addSong = async (e) => {
        await dispatch(addSongThunk(addSongData));
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);
    return (
        <>
            <div className="username-dropdown" onClick={openMenu}>
                <i className="fa-regular fa-square-plus"></i>
            </div>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li className="dropdown-item">
                        <PlaylistNewModal />
                    </li>
                    {userPlaylists.map((playlist) => {
                        return (
                            <li
                                key={playlist.id}
                                className="dropdown-item"
                                onClick={() => {
                                    setPlaylistId(playlist.id);
                                    addSong();
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
