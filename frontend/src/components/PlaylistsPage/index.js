import "./PlaylistsPage.css";
import Playlists from "../Playlists";
import PlaylistNewModal from "../PlaylistNewModal";
import { useSelector } from "react-redux";

const PlaylistsPage = () => {
    const sessionUser = useSelector((state) => state.session.user);
    return (
        <div className="playlists-container">
            <h1 className="h1">Playlists</h1>
            {sessionUser &&
            <button>
                <PlaylistNewModal />
            </button>
}
            <Playlists />
        </div>
    );
};

export default PlaylistsPage;
