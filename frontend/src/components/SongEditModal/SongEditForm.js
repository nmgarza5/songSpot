import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateSongForm } from "../../store/songReducer";

function SongEditForm({ id }) {
    const dispatch = useDispatch();
    const history = useHistory();
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
            history.push(`/songs`);
            // history.push(`/songs/${updatedSong.retSong.id}`); // NOT WORKING - MODAL STILL SHOWS
        }
    };

    // const genreOptions = [
    //     "Rock",
    //     "EDM",
    //     "Pop",
    //     "Hip-Hop",
    //     "R&B",
    //     "Country",
    //     "Jazz",
    //     "Classical",
    // ];

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label>
                Title
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Genre
                <select
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                >
                    <option value="Rock">Rock</option>
                    <option value="EDM">EDM</option>
                    <option value="Pop">Pop</option>
                    <option value="Hip-Hop">Hip-hop</option>
                    <option value="R&B">R&B</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Classical">Classical</option>
                    {/* {genreOptions.forEach((genre) => {
                        <option value={genre}>{genre}</option>;
                    })} */}
                </select>
            </label>
            <label>
                Image URL
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                />
            </label>
            <label>
                Audio URL
                <input
                    type="text"
                    value={audioUrl}
                    onChange={(e) => setAudioUrl(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Update</button>
        </form>
    );
}

export default SongEditForm;
