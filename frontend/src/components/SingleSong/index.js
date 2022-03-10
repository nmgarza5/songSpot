import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SongEditModal from "../SongEditModal";
import "./SingleSong.css";
import { deleteSongThunk } from "../../store/songReducer";
import { useHistory } from "react-router-dom";

const SingleSong = ({ songs }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const song = songs.find((song) => song.id === +id);
    const sessionUser = useSelector((state) => state.session.user);
    const currentUser = sessionUser.username;
    const songOwner = song.user.username;
    // console.log("song ", song);
    // console.log("song.user ", song.user);
    // console.log("song.user.username ", song.user.username);

    const handleDelete = (e) => {
        dispatch(deleteSongThunk(id));
        history.push(`/songs`);
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
                    <p>{songOwner}</p>
                    <p>{song.genre}</p>
                    {songOwner === currentUser ? (
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
