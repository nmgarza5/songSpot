import "./SongsPage.css";
import SongList from "../SongList";

const SongsPage = () => {
    return (
        <div className="songs-container">
            <h1 className="header">Songs</h1>
            <SongList />
        </div>
    );
};

export default SongsPage;
