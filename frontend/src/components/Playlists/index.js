import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylists } from "../../store/playlistReducer";
import PlaylistDetail from "../PlaylistDetail";
import "./Playlists.css";

const Playlists = () => {
    const dispatch = useDispatch();
    const playlistObject = useSelector((state) => state.playlistState);
    const playlists = Object.values(playlistObject);
    useEffect(() => {
        dispatch(fetchPlaylists());
    }, [dispatch]);

    return (
        <div className="playlists">
            {playlists.map((playlist) => (
                <PlaylistDetail key={playlist.id} playlist={playlist} />
            ))}
        </div>
    );
};

export default Playlists;
