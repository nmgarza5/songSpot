import { useParams } from "react-router-dom";
import { useDispatch, useSelector, useState } from "react-redux";
import "./SingleSong.css";

const SingleSong = ({ songs }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const singleSong = songs.find((song) => song.id === +id);
    const sessionUser = useSelector((state) => state.session.user);
    const currentUser = sessionUser.username;
    const songUser = singleSong.user.username;
    // const [title, setTitle] = useState("");
    // const [genre, setGenre] = useState("");
    // const [imageUrl, setImageUrl] = useState("");
    // const [audioUrl, setAudioUrl] = useState("");
    // const [errors, setErrors] = useState([]);
    return (
        <div className="singleSong">
            <h1>{singleSong?.title}</h1>
            <div className="song-content">
                <img
                    src={singleSong?.imageUrl}
                    alt={singleSong?.title}
                    className="song-image"
                />
                <div className="song-details">
                    <p>{singleSong.user.username}</p>
                    <p>{singleSong.genre}</p>
                    {songUser === currentUser ? (
                        <button>Edit Song</button>
                    ) : null}
                </div>
            </div>
            <div className="other-songs">
                <h3>Songs related to {singleSong.title}</h3>
                <p>Song1</p>
                <p>Song1</p>
                <p>Song1</p>
                <p>Song1</p>
            </div>
        </div>
    );
};

export default SingleSong;
