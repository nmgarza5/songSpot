import { NavLink } from "react-router-dom";
import "./PlaylistDetail.css";

const PlaylistDetail = ({ playlist }) => {
    let firstImg = playlist?.songs[0]?.imageUrl;
    if (!firstImg) firstImg = "/images/default-playlist.jpg";
    return (
        <div className="playlist-details">
            <img className="playlist-img" src={firstImg} alt={""}></img>
            <NavLink to={`./playlists/${playlist?.id}`} className="navLink">
                <h2 className="navLink">Name - {playlist?.name}</h2>
                <h3 className="navLink">
                    Created By - {playlist?.user?.username}
                </h3>
                <h3 className="navLink">
                    Number of Songs - {playlist?.songs?.length}
                </h3>
            </NavLink>
        </div>
    );
};

export default PlaylistDetail;
