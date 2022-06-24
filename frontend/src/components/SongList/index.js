import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongDetail from "../SongDetail";
import { fetchSongs } from "../../store/songReducer";
import "./SongList.css";

const SongList = () => {
    const dispatch = useDispatch();

    const songsObject = useSelector((state) => state?.songState);

    const songs = Object.values(songsObject);

    useEffect(() => {
        dispatch(fetchSongs());
    }, [dispatch]);

    return (
        <div className="song-container">
            {songs.map(
                (song) => (
                    <SongDetail
                        key={song?.id}
                        song={song}
                    />
                )
            )}
        </div>
    );
};

export default SongList;
