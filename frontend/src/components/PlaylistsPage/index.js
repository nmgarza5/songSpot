import "./PlaylistsPage.css";
import Playlists from "../Playlists";
import PlaylistNewModal from "../PlaylistNewModal";

const PlaylistsPage = () => {
    return (
        <div className="playlists-container">
            <h1 className="h1">Playlists</h1>
            <button>
                <PlaylistNewModal />
            </button>
            <Playlists />
        </div>
    );
};

export default PlaylistsPage;
