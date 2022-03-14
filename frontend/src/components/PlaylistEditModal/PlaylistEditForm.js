import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePlaylistForm } from "../../store/playlistReducer";

function PlaylistEditForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const id = props.id;
    const currentPlaylist = useSelector((state) => state.playlistState[id]);
    const [name, setName] = useState(currentPlaylist.name);
    const [errors, setErrors] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const playlistData = { name, id };
        setErrors([]);
        let updatedPlaylist = await dispatch(
            updatePlaylistForm(playlistData)
        ).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
        if (updatedPlaylist) {
            history.push(`/playlists/${updatedPlaylist?.retPlaylist?.id}`);
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

export default PlaylistEditForm;
