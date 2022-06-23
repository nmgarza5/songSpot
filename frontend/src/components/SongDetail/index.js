import { NavLink, useHistory} from "react-router-dom";

import "./SongDetail.css";

const SongDetail = ({ id, title, genre, imageUrl, audioUrl, user, userId }) => {
    const history = useHistory();

    const goToSong = (id) => {
        history.push(`/songs/${id}`)
    }

    const goToUserPage= (userId) => {
        history.push(`/${userId}`)
    }

    return (
        <div className="song-details">
            <img src={imageUrl} alt={title} className="image" onClick={() => {goToSong(id)}}></img>
            {title.length < 20
                ?
                <div onClick={() => {goToSong(id)}} className="title">
                    {title}
                </div>
                :
                <div onClick={() => {goToSong(id)}} className="title">
                    {title.slice(0,20)}...
                </div>
            }
            <div onClick={() => {goToUserPage(userId)}} className="username">
                {user.username}
            </div>
        </div>
    );
};

export default SongDetail;
