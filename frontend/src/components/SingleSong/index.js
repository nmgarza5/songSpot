import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SongEditModal from "../SongEditModal";
import PlaylistDropdown from "../PlaylistDropdown";
import Player from "../Player";
import "./SingleSong.css";
import { deleteSongThunk, fetchSong } from "../../store/songReducer";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import LikeButton from "../LikeButton";
import defaultImage from "../../images/default-playlist.jpg"


const SingleSong = ({ songs }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const song = songs.find((song) => song.id === +id);
    // const songAudio = song.audioUrl;
    const playlistObject = useSelector((state) => state.playlistState);
    const playlists = Object.values(playlistObject);
    const sessionUser = useSelector((state) => state.session.user);
    const currentUser = sessionUser?.username;
    const songOwner = song?.user?.username;

    let like;
    if (sessionUser && song.SongLikes) like = song.SongLikes.find(like => like?.userId === sessionUser?.id);
    let isLike;
    if (like) isLike = true;

    useEffect(() => {
        dispatch(fetchSong(id));
    }, [dispatch, id]);

    const handleDelete = async (e) => {
        history.push(`/songs`);
        await dispatch(deleteSongThunk(id));
    };

    const addDefaultImage = (e) => {
        e.target.src = defaultImage
    }


    return (
        <div className="singleSong">
            <div className="song-content">
                <img
                    src={song?.imageUrl}
                    alt={song?.title}
                    className="song-image"
                    onError={addDefaultImage}
                />
                <div className="song-info">
                    <h1>{song?.title}</h1>
                    <p>Artist - {songOwner}</p>
                    <p>Genre - {song?.genre}</p>
                    <div className='icons single-song-icons'>
                        {sessionUser
                        ? <LikeButton id={+id} type={"song"} isLike={isLike} like={like} />
                        : <i className="fa-regular fa-heart"></i>
                        }
                        {song.SongLikes.length}
                    </div>
                    <Player songs={song} />
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
        </div>
    );
};

export default SingleSong;
