import "./HomePage.css";
import SongList from "../SongList";
import { NavLink } from "react-router-dom";
import Playlists from "../Playlists";
import PlaylistDetail from "../PlaylistDetail";

const HomePage = () => {
    return (
        <>
            <div className="activity-container">
                <div className="main-container">
                    <div className="inner-main">
                        <h2>Recently Added Songs</h2>
                        <div className="song-container">
                            <SongList className="song" />
                        </div>
                        <NavLink className="see-more" to="/songs">
                            <button>See More...</button>
                        </NavLink>
                    </div>
                    <div className="inner-main">
                        <h2>Recently Added Playlists</h2>

                        <Playlists className="song" />

                        <NavLink className="see-more" to="/playlists">
                            <button>See More...</button>
                        </NavLink>
                    </div>
                </div>
                <div className="side-container">
                    <div className="inner-side">
                        <h2> Coming Soon! </h2>
                        <h2> Likes </h2>
                        <i className="fa-regular fa-heart icon"></i>
                    </div>
                    <div className="inner-side">
                        <h2> Coming Soon! </h2>
                        <h2> Listening History </h2>
                        <i className="fa-brands fa-soundcloud icon"></i>
                    </div>
                </div>
            </div>
            ;
        </>
    );
};

export default HomePage;
