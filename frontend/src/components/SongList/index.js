import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongDetail from "../SongDetail";
import { fetchSongs } from "../../store/songReducer";
import "./SongList.css";

const SongList = () => {
    const dispatch = useDispatch();

    const songsObject = useSelector((state) => state.songState);

    const songs = Object.values(songsObject);
    let recent_songs = songs.sort((a,b) => (new Date(b.createdAt) - new Date(a.createdAt))).slice(0, 8);

    console.log(" recent", recent_songs)


    useEffect(() => {
        dispatch(fetchSongs());
    }, [dispatch]);

    return (
        <div className="song-container">
            {recent_songs.map(
                ({ id, title, genre, imageUrl, audioUrl, user, userId }) => (
                    <SongDetail
                        key={id}
                        id={id}
                        title={title}
                        genre={genre}
                        imageUrl={imageUrl}
                        audioUrl={audioUrl}
                        user={user}
                        userId={userId}
                    />
                )
            )}
        </div>
    );
};

export default SongList;
