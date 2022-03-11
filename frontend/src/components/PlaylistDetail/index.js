import { NavLink } from "react-router-dom";
import "./PlaylistDetail.css";

const PlaylistDetail = ({ id, name, songs, user, userId }) => {
    const firstImg = songs[0].imageUrl;
    return (
        <div className="playlist-details">
            <img className="playlist-img" src={firstImg} alt={""}></img>
            <NavLink to={`./playlist/${id}`} className="navLink">
                <h2 className="navLink">Name - {name}</h2>
                <h3 className="navLink">Owner - {user.username}</h3>
                <h3 className="navLink">Numer of Songs - {songs.length}</h3>
            </NavLink>
        </div>
    );
};

export default PlaylistDetail;
