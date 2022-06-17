import { useParams } from "react-router-dom";
import _ from 'lodash'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PlaylistEditModal from "../PlaylistEditModal";
import PlaylistDropdown from "../PlaylistDropdown";
import Player from "../Player";
import "./SinglePlaylist.css";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import {
    fetchPlaylist,
    deletePlaylistThunk,
    deleteSongThunk,
} from "../../store/playlistReducer";
import LikeButton from "../LikeButton";

const SinglePlaylist = ({ playlists }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const playlist = playlists.find((playlist) => playlist.id === +id);
    const sessionUser = useSelector((state) => state.session.user);
    const currentUser = sessionUser?.username;
    const playlistOwner = playlist?.user?.username;
    const songs = playlist?.songs;

    let like;
    like = playlist.PlaylistLikes.find(like => like?.userId === sessionUser?.id);
    let isLike;
    if (like) isLike = true;

    useEffect(() => {
        dispatch(fetchPlaylist(id));
    }, [dispatch, id]);

    const handleDelete = async (e) => {
        await dispatch(deletePlaylistThunk(id));
        history.push(`/playlists`);
    };
    const deleteSong = async (songId) => {
        const playlistData = { songId, id };
        await dispatch(deleteSongThunk(playlistData));
        await dispatch(fetchPlaylist(id))
    };

    return (
        <div className="singlePlaylist">
            <h1 className="">{playlist?.name}</h1>
            <h3>Created By - {playlistOwner}</h3>
            {sessionUser ?
                        <LikeButton id={+id} type={"playlist"} isLike={isLike} like={like} />
                    : null }
            {currentUser === playlistOwner ? (
                <div>
                    <button>
                        <PlaylistEditModal id={id} />
                    </button>
                    <button onClick={handleDelete}>Delete Playlist</button>
                </div>
            ) : null}
            <Player songs={songs} />
            {songs?.map((song) => (
                <div key={song.JoinSP.songId} className="playlist-songs">
                    <img className="playlist-image" src={song.imageUrl} alt=""></img>
                    <NavLink
                        to={`/songs/${song.JoinSP.songId}`}
                        className="song-info"
                    >
                        <h3>{song.title}</h3>
                        <h4>Created By - {song.user?.username}</h4>
                    </NavLink>
                    <div className="song-btns">
                        {console.log("song", song)}
                        {sessionUser ?
                        <LikeButton id={song.id} type={"song"} isLike={song.SongLikes.find(like => like?.userId === sessionUser?.id)} like={like} />
                        : null }
                        <button>
                            <PlaylistDropdown
                                playlists={playlists}
                                currentUser={currentUser}
                                songId={song.JoinSP.songId}
                            />
                        </button>
                        {currentUser === playlistOwner ? (
                            <button
                                onClick={() => {
                                    deleteSong(song.JoinSP.songId);
                                }}
                            >
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SinglePlaylist;
