import { useParams } from "react-router-dom";
import _ from 'lodash'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PlaylistEditModal from "../PlaylistEditModal";
import PlaylistDropdown from "../PlaylistDropdown";
import Player from "../Player";
import "./SinglePlaylist.css";
import { useHistory } from "react-router-dom";
// import { useEffect } from "react";
import {
    fetchPlaylist,
    deletePlaylistThunk,
    deleteSongThunk,
} from "../../store/playlistReducer";
import LikeButton from "../LikeButton";

import defaultImage from "../../images/default-playlist.jpg"


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

    // useEffect(() => {
    //     dispatch(fetchPlaylist(id));
    // }, [dispatch, id]);

    const handleDelete = async (e) => {
        history.push(`/playlists`);
        await dispatch(deletePlaylistThunk(id));
    };
    const deleteSong = async (songId) => {
        const playlistData = { songId, id };
        await dispatch(deleteSongThunk(playlistData));
        await dispatch(fetchPlaylist(id))
    };

    const goToSong = (id) => {
        history.push(`/songs/${id}`)
    }

    const goToUserPage= (userId) => {
        history.push(`/${userId}`)
    }

    const addDefaultImage = (e) => {
        e.target.src = defaultImage
    }


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
            <div className="playlist-content">
                {songs?.map((song) => (
                    <div key={song.JoinSP.songId} className="playlist-songs">
                        <img className="playlist-image" src={song.imageUrl} alt="" onError={addDefaultImage} onClick={() => {goToSong(song.id)}}></img>
                        <div className='info'>
                            <div onClick={() => {goToUserPage(like.userId)}}>
                                {song.user.username}
                            </div>
                            <div onClick={() => {goToSong(song.id)}}>
                                {song.title}
                            </div>
                            <div className='icons'>
                                <i className="fa-solid fa-heart"></i>
                                {song.SongLikes.length}
                            </div>
                        </div>
                        {sessionUser ?
                            <div className="song-btns">
                                <LikeButton id={song.id} type={"song"} isLike={!_.isUndefined(song.SongLikes.find(like => like?.userId === sessionUser?.id))} like={song.SongLikes.find(like => like?.userId === sessionUser?.id)} isPlaylist={true} playlistId={+id}/>
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
                            : null }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SinglePlaylist;
