import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongDetail from "../SongDetail";
// 5. Replace import of action creator with thunk creator
import { fetchSongs } from "../../store/songReducer";

const SongList = () => {
    const dispatch = useDispatch();

    const songsObject = useSelector((state) => state.songState);
    const songs = Object.values(songsObject);
    useEffect(() => {
        dispatch(fetchSongs());
    }, [dispatch]);

    return (
        <div className="song-container">
            {songs.map(({ id, title, genre, imageUrl, audioUrl, user }) => (
                <SongDetail
                    key={id}
                    id={id}
                    title={title}
                    genre={genre}
                    imageUrl={imageUrl}
                    audioUrl={audioUrl}
                    user={user}
                />
            ))}
        </div>
    );
};

export default SongList;
