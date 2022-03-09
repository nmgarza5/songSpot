import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongEditModal from "../SongEditModal";
import "./SingleSong.css";
import { deleteSongThunk } from "../../store/songReducer";

const SingleSong = ({ songs }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const song = songs.find((song) => song.id === +id);
    const sessionUser = useSelector((state) => state.session.user);
    const currentUser = sessionUser.username;
    const songUser = song.user.username;
    const [errors, setErrors] = useState([]);

    const handleDelete = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(deleteSongThunk(id)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
    };

    return (
        <div className="singleSong">
            <div className="song-content">
                <img
                    src={song?.imageUrl}
                    alt={song?.title}
                    className="song-image"
                />
                <div className="song-details">
                    <h1>{song?.title}</h1>
                    <p>{song.user.username}</p>
                    <p>{song.genre}</p>
                    {songUser === currentUser ? (
                        <>
                            <button>
                                <SongEditModal id={id} />
                            </button>
                            <button onClick={handleDelete}>Delete Song</button>
                        </>
                    ) : null}
                </div>
            </div>
            <div className="other-songs">
                <h3>Songs related to {song.title}</h3>
                <p>Song1</p>
                <p>Song1</p>
                <p>Song1</p>
                <p>Song1</p>
            </div>
        </div>
    );
};

export default SingleSong;
