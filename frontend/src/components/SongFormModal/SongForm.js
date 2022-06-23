import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSongForm } from "../../store/songReducer";
import { useHistory } from "react-router-dom";

function SongForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [audioUrl, setAudioUrl] = useState("");
    const [errors, setErrors] = useState([]);

    const userId = sessionUser.id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const songData = { userId, title, genre, imageUrl, audioUrl };
        setErrors([]);
        let newSong = await dispatch(addSongForm(songData)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
        if (newSong) {
            console.log("NEWsONG", newSong)
            history.push(`/songs/${newSong?.retSong?.id}`);
            props.onClose();
        }
    };
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </div>
                <div className="input-container">
                    <label>Title</label>
                    <input
                        className="label"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label>Genre</label>
                    <select
                        className="label"
                        type="text"
                        onChange={(e) => setGenre(e.target.value)}
                        defaultValue={"Default"}
                        required
                    >
                        <option value="Default" disabled>
                            Select Genre...
                        </option>
                        <option value="Rock">Rock</option>
                        <option value="EDM">EDM</option>
                        <option value="Pop">Pop</option>
                        <option value="Hip-Hop">Hip-hop</option>
                        <option value="R&B">R&B</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Classical">Classical</option>
                    </select>
                </div>
                <div className="input-container">
                    <label>Image URL</label>
                    <input
                        className="label"
                        type="text"
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label>Audio URL</label>
                    <input
                        className="label"
                        type="text"
                        onChange={(e) => setAudioUrl(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default SongForm;
