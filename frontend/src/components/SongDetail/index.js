import { NavLink } from "react-router-dom";
import "./SongDetail.css";

const SongDetail = ({ id, title, genre, imageUrl, audioUrl, user }) => {
    return (
        <div className="song-details">
            <NavLink to={`/songs/${id}`} className="title">
                <img src={imageUrl} className="image"></img>
            </NavLink>
            <NavLink to={`/songs/${id}`} className="title">
                {title} - {user.username}
            </NavLink>
        </div>
    );
};

export default SongDetail;
