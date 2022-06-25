import { useHistory} from "react-router-dom";
import defaultImage from "../../images/default-playlist.jpg"

import "./SongDetail.css";

const SongDetail = ({ song }) => {
    const history = useHistory();
    const goToSong = (id) => {
        history.push(`/songs/${id}`)
    }

    const goToUserPage= (userId) => {
        history.push(`/${userId}`)
    }

    const addDefaultImage = (e) => {
        e.target.src = defaultImage
    }



    return (
        <div className="song-details">
            <img src={song.imageUrl} alt={song.title} className="image" onError={addDefaultImage} onClick={() => {goToSong(song.id)}}></img>
            {song.title.length < 20
                ?
                <div onClick={() => {goToSong(song.id)}} className="title">
                    {song.title}
                </div>
                :
                <div onClick={() => {goToSong(song.id)}} className="title">
                    {song.title.slice(0,20)}...
                </div>
            }
            <div className="likes">
                <i className="fa-solid fa-heart"></i>
                {song.SongLikes.length}
            </div>
            <div onClick={() => {goToUserPage(song.userId)}} className="username">
                {song.user.username}
            </div>
        </div>
    );
};

export default SongDetail;
