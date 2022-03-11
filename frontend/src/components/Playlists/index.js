import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylists } from "../../store/playlistReducer";
import PlaylistDetail from "../PlaylistDetail";
import "./Playlists.css";

const Playlists = () => {
    const dispatch = useDispatch();
    const playlistObject = useSelector((state) => state.playlistState);
    const playlists = Object.values(playlistObject);
    console.log(playlists);
    useEffect(() => {
        dispatch(fetchPlaylists());
    }, [dispatch]);

    return (
        <div className="playlist-container">
            <h1>Playlists</h1>
            <div className="playlists">
                {playlists.map(({ id, name, songs, user, userId }) => (
                    <PlaylistDetail
                        key={id}
                        id={id}
                        name={name}
                        songs={songs}
                        user={user}
                        userId={userId}
                    />
                ))}
            </div>
        </div>
    );
};

export default Playlists;
