import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylists } from "../../store/playlistReducer";
import PlaylistDetail from "../PlaylistDetail";
import PlaylistNewModal from "../PlaylistNewModal";
import "./Playlists.css";

const Playlists = () => {
    const dispatch = useDispatch();
    const playlistObject = useSelector((state) => state.playlistState);
    const playlists = Object.values(playlistObject);
    useEffect(() => {
        dispatch(fetchPlaylists());
    }, [dispatch]);

    return (
        <div className="playlist-container">
            <h1>Playlists</h1>
            <button>
                <PlaylistNewModal />
            </button>
            <div className="playlists">
                {playlists.map((playlist) => (
                    <PlaylistDetail
                        key={playlist.id}
                        playlist={playlist}
                        // id={id}
                        // name={name}
                        // songs={songs}
                        // user={user}
                        // userId={userId}
                    />
                ))}
            </div>
        </div>
    );
};

export default Playlists;
