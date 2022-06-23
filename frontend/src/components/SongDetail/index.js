import { NavLink, useHistory} from "react-router-dom";

import "./SongDetail.css";

const SongDetail = ({ id, title, genre, imageUrl, audioUrl, user, userId }) => {
    const history = useHistory();
    return (
        <div className="song-details">
            <NavLink to={`/songs/${id}`} id={id}>
                <img src={imageUrl} alt={title} className="image"></img>
            </NavLink>
            <NavLink to={`/songs/${id}`} className="title">
                {title}
            </NavLink>
            <NavLink to={`/${userId}`} className="username">
                {user.username}
            </NavLink>
        </div>
    );
};

export default SongDetail;
