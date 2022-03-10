import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylists } from "../../store/playlistReducer";

const Playlists = () => {
    const dispatch = useDispatch();
    const playlistObject = useSelector((state) => state.playlistState);
    console.log(playlistObject);
    const playlists = Object.values(playlistObject);
    console.log(playlists);
    useEffect(() => {
        dispatchEvent(fetchPlaylists());
    }, [dispatch]);

    return (
        <div className="playlist-container">
            {/* {playlists.map(({ id, name, genre, imageUrl, audioUrl, user }) => (
                <PlaylistSongs
                    key={id}
                    id={id}
                    title={title}
                    genre={genre}
                    imageUrl={imageUrl}
                    audioUrl={audioUrl}
                    user={user}
                />
            ))} */}
        </div>
    );
};

export default Playlists;
