import "./HomePage.css";
import SongList from "../SongList";
import { NavLink } from "react-router-dom";
import Playlists from "../Playlists";
import { useSelector } from "react-redux";
import LikeCard from "../LikeCard";

const HomePage = ({songs, playlists}) => {

    const sessionUser = useSelector((state) => state.session.user);

    let userLikes = [];

    songs.forEach((song) => {
        let songLike = song.SongLikes.find((like) => like.userId === sessionUser.id)
        if (songLike) userLikes.push(song)
    })

    playlists.forEach((playlist) => {
        let playlistLike = playlist.PlaylistLikes.find((like) => like.userId === sessionUser.id)
        if (playlistLike) userLikes.push(playlist)
    })

    let recentLikes = userLikes.sort((a,b) => (new Date(b.createdAt) - new Date(a.createdAt))).slice(0, 5);



    return (
        <>
            <div className="activity-container">
                <div className="main-container">
                    <div className="inner-main">
                        <h2>Recently Added Songs</h2>
                        <SongList />
                        <NavLink className="see-more" to="/songs">
                            <button>See More</button>
                        </NavLink>
                    </div>
                    <div className="inner-main">
                        <h2>Recently Added Playlists</h2>
                        <Playlists className="song" />
                        <NavLink className="see-more" to="/playlists">
                            <button>See More</button>
                        </NavLink>
                    </div>
                </div>
                <div className="side-container">
                    <div className="inner-side">
                        <h2> Recent Likes </h2>
                        {recentLikes.map((like) => (
                            <LikeCard like={like} />
                        ))}
                    </div>
                    {/* <div className="inner-side">
                        <h2> Coming Soon! </h2>
                        <h2> Listening History </h2>
                        <i className="fa-brands fa-soundcloud icon"></i>
                    </div> */}
                </div>
            </div>
            ;
        </>
    );
};

export default HomePage;
