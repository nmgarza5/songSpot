import { useParams } from "react-router-dom";
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

const SinglePlaylist = ({ playlists }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const playlist = playlists.find((playlist) => playlist.id === +id);
    const sessionUser = useSelector((state) => state.session.user);
    const currentUser = sessionUser?.username;
    const playlistOwner = playlist?.user?.username;
    const songs = playlist?.songs;

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
        history.push(`/playlists/${id}`);
    };

    return (
        <div className="singlePlaylist">
            <h1 className="">{playlist?.name}</h1>
            <h3>Created By - {playlistOwner}</h3>
            {currentUser === playlistOwner ? (
                <div>
                    <button>
                        <PlaylistEditModal id={id} />
                    </button>
                    <button onClick={handleDelete}>Delete Playlist</button>
                </div>
            ) : null}
            <Player songs={songs} />
            {songs?.map(({ title, user, audioUrl, imageUrl, JoinSP }) => (
                <div key={JoinSP.songId} className="playlist-songs">
                    <img className="playlist-image" src={imageUrl} alt=""></img>
                    <NavLink
                        to={`/songs/${JoinSP.songId}`}
                        className="song-info"
                    >
                        <h3>{title}</h3>
                        <h4>Created By - {user?.username}</h4>
                    </NavLink>
                    <div className="song-btns">
                        <button>
                            <PlaylistDropdown
                                playlists={playlists}
                                currentUser={currentUser}
                                songId={JoinSP.songId}
                            />
                        </button>
                        {currentUser === playlistOwner ? (
                            <button
                                onClick={() => {
                                    deleteSong(JoinSP.songId);
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
