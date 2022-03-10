import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSongForm } from "../../store/songReducer";

function SongForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [audioUrl, setAudioUrl] = useState("");
    const [errors, setErrors] = useState([]);

    const userId = sessionUser.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        const songData = { userId, title, genre, imageUrl, audioUrl };
        setErrors([]);
        // <Redirect to="/home"></Redirect>;
        return dispatch(addSongForm(songData)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
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
            {/* <input type='hidden' name='_csrf' value=csrfToken /> */}
            <label>
                Title
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                Genre
                <select
                    type="text"
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
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                />
            </label>
            <label>
                Audio URL
                <input
                    type="text"
                    onChange={(e) => setAudioUrl(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Upload</button>
        </form>
    );
}

export default SongForm;