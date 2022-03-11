import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPlaylistForm } from "../../store/playlistReducer";

function PlaylistNewForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const userId = sessionUser.id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const playlistData = { userId, name };
        setErrors([]);
        let newPlaylist = await dispatch(addPlaylistForm(playlistData)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
        // console.log("newPlayList ", newPlaylist);
        if (newPlaylist) {
            // history.push(`/songs`);
            history.push(`/playlists/${newPlaylist?.retPlaylist?.id}`);
        }
        props.onClose();
    };
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PlaylistNewForm;
