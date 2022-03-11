import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import SongEditModal from "../SongEditModal";
import "./SinglePlaylist.css";
// import { deleteSongThunk, fetchSong } from "../../store/songReducer";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import {
    fetchPlaylist,
    deletePlaylistThunk,
} from "../../store/playlistReducer";

const SinglePlaylist = ({ playlists }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const playlist = playlists.find((playlist) => playlist.id === +id);
    const sessionUser = useSelector((state) => state.session.user);
    const currentUser = sessionUser?.username;
    const playlistOwner = playlist?.user?.username;
    // console.log("sessionUser.username", sessionUser?.username);
    // console.log("song.user.username ", song?.user?.username);
    console.log("playlist - singlePlaylist ", playlist);
    const songs = playlist?.songs;
    console.log("songs - singlePlaylist ", songs);

    useEffect(() => {
        dispatch(fetchPlaylist(id));
    }, [dispatch]);

    const handleDelete = async (e) => {
        await dispatch(deletePlaylistThunk(id));
        history.push(`/songs`);
    };

    return (
        <div className="singlePlaylist">
            <div className="playlist-content">
                <h1>{playlist?.name}</h1>
                {songs.map((song) => {
                    <div className="song-details">
                        <img src={song?.imageUrl}></img>
                        <p>{song?.title}</p>
                        <p>{song?.user?.username}</p>
                    </div>;
                })}
            </div>
            {/* <div>
                <h3>Songs related to {song?.title}</h3>
                <div className="other-songs">
                    <p>Song1</p>
                    <p>Song1</p>
                    <p>Song1</p>
                    <p>Song1</p>
                </div>
            </div> */}
        </div>
    );
};

export default SinglePlaylist;
