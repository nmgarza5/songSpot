import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateSongForm } from "../../store/songReducer";

function SongEditForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const id = props.id;
    const currentSong = useSelector((state) => state.songState[id]);
    const [title, setTitle] = useState(currentSong.title);
    const [genre, setGenre] = useState(currentSong.genre);
    const [imageUrl, setImageUrl] = useState(currentSong.imageUrl);
    const [audioUrl, setAudioUrl] = useState(currentSong.audioUrl);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const songData = { id, title, genre, imageUrl, audioUrl };
        setErrors([]);
        let updatedSong = await dispatch(updateSongForm(songData)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
        if (updatedSong) {
            history.push(`/songs/${updatedSong?.retSong?.id}`);
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
                        value={title}
                        className="label"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label>Genre</label>
                    <select
                        value={genre}
                        className="select-label"
                        type="text"
                        onChange={(e) => setGenre(e.target.value)}
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
                    <p className="small-text">
                        Following formats accepted: .jpg, .jpeg, .png, or .gif.
                    </p>
                    <input
                        value={imageUrl}
                        className="label"
                        type="text"
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label>Audio URL</label>
                    <p className="small-text">
                    Following formats accepted: .mp3.
                    </p>
                    <input
                        value={audioUrl}
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

export default SongEditForm;
