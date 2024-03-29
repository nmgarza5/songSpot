import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPlaylistForm } from "../../store/playlistReducer";
import { addSongThunk } from "../../store/playlistReducer"

function PlaylistNewForm(props) {
    const songId = props.songId
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const showMenu = props.showMenu
    const userId = sessionUser.id;

    const handleSubmit = async (e) => {
        showMenu(false)
        e.preventDefault();
        const playlistData = { userId, name };
        setErrors([]);
        let newPlaylist = await dispatch(addPlaylistForm(playlistData)).catch(
            async (res) => {
                const data = await res.json();
                if (data.errors) setErrors(data.errors);
            }
            );

            // POSTING A NEW PLAYLIST WITHOUT A SONG DOES NOT WORK || CURRENT SPOT

            if (newPlaylist) {
            const playlistId = newPlaylist.retPlaylist.id
            if (songId) {
                const addSongData = {songId, playlistId};
                await dispatch(addSongThunk(addSongData));
                alert(`Song added to ${newPlaylist.retPlaylist.name} :)`);
            }
            history.push(`/playlists/${playlistId}`);
            props.onClose();
        }
    };
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
                <div className="input-container">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PlaylistNewForm;
