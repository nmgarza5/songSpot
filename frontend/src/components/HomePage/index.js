import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LikeCard from "../LikeCard";
import SongDetail from "../SongDetail"
import PlaylistDetail from "../PlaylistDetail";
import "./HomePage.css";
import { useEffect } from "react";

const HomePage = ({songs, playlists}) => {
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session?.user);

    let userLikes = [];


    songs.forEach((song) => {
        let songLike = song.SongLikes.find((like) => like.userId === sessionUser?.id)
        if (songLike) userLikes.push(song)
    })

    playlists.forEach((playlist) => {
        let playlistLike = playlist.PlaylistLikes.find((like) => like.userId === sessionUser?.id)
        if (playlistLike) userLikes.push(playlist)
    })

    let recent_songs = songs.sort((a,b) => (new Date(b.createdAt) - new Date(a.createdAt))).slice(0, 8);
    let recent_playlists = playlists.sort((a,b) => (new Date(b.createdAt) - new Date(a.createdAt))).slice(0, 8);
    let recentLikes = userLikes.sort((a,b) => (new Date(b.createdAt) - new Date(a.createdAt))).slice(0, 5);



    const goToUserPage= (userId) => {
        history.push(`/${userId}`)
    }

    const goToSongs= () => {
        history.push(`/songs`)
    }

    const goToPlaylists= () => {
        history.push(`/playlists`)
    }

    return (
        <>
            <div className="activity-container">
                <div className="main-container">
                    <div className="inner-main">
                        <h2>Recently Added Songs</h2>
                        <div className="item-container">
                            {recent_songs.map(
                                (song) => (
                                    <SongDetail
                                        key={song.id}
                                        song={song}
                                    />
                                )
                            )}
                        </div>
                        <div className="see-more" onClick={goToSongs}>
                                <button>See More</button>
                        </div>
                    </div>
                    <div className="inner-main">
                        <h2>Recently Added Playlists</h2>
                        <div className="item-container">
                            {recent_playlists.map((playlist) => (
                                <PlaylistDetail key={playlist.id} playlist={playlist} />
                            ))}
                        </div>
                        <div className="see-more" onClick={goToPlaylists}>
                                <button>See More</button>
                        </div>
                    </div>
                </div>
                <div className="side-container">
                    {sessionUser ?
                    <div className="inner-side">
                        <h2>
                            <i className="fa-solid fa-heart"></i>
                            {userLikes.length} likes
                        </h2>
                        {recentLikes.map((like, idx) => (
                            <LikeCard key={idx} content={like} />
                        ))}
                        <div className="see-more" onClick={()=>goToUserPage(sessionUser?.id)}>
                                <button>See More</button>
                        </div>
                    </div>
                    :
                    <div className="inner-side">
                        <h2>
                            <i className="fa-solid fa-heart"></i>
                            {userLikes.length} likes
                        </h2>
                        <h3>Sign in to see your most recently liked songs and playlists.</h3>
                    </div>
                    }
                    {/* <div className="inner-side">
                        <h2> Coming Soon! </h2>
                        <h2> Listening History </h2>
                        <i className="fa-brands fa-soundcloud icon"></i>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default HomePage;
