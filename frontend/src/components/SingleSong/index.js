import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SongEditModal from "../SongEditModal";
import PlaylistDropdown from "../PlaylistDropdown";
import Player from "../Player";
import "./SingleSong.css";
import { deleteSongThunk, fetchSong } from "../../store/songReducer";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const SingleSong = ({ songs }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const song = songs.find((song) => song.id === +id);
    const songAudio = song.audioUrl;
    const playlistObject = useSelector((state) => state.playlistState);
    const playlists = Object.values(playlistObject);
    const sessionUser = useSelector((state) => state.session.user);
    const currentUser = sessionUser?.username;
    const songOwner = song?.user?.username;

    useEffect(() => {
        dispatch(fetchSong(id));
    }, [dispatch, id]);

    const handleDelete = async (e) => {
        await dispatch(deleteSongThunk(id));
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
                    <p>Artist - {songOwner}</p>
                    <p>Genre - {song?.genre}</p>
                    <Player songAudio={songAudio} />
                    {songOwner === currentUser ? (
                        <>
                            <button>
                                <SongEditModal id={id} />
                            </button>
                            <button onClick={handleDelete}>Delete Song</button>
                        </>
                    ) : null}
                    {sessionUser ? (
                        <button>
                            <PlaylistDropdown
                                currentUser={currentUser}
                                songId={id}
                                playlists={playlists}
                            />
                        </button>
                    ) : null}
                </div>
            </div>
            <div>
                <h3>Songs related to {song?.title}</h3>
                <div className="other-songs">
                    <p>Song1</p>
                    <p>Song1</p>
                    <p>Song1</p>
                    <p>Song1</p>
                </div>
            </div>
        </div>
    );
};

export default SingleSong;
