import { useSelector } from "react-redux";
import { useHistory} from "react-router-dom";
import defaultImage from "../../images/default-playlist.jpg"
import LikeButton from "../LikeButton"

import "./SongDetail.css";

const SongDetail = ({ song }) => {
    const history = useHistory();

    const sessionUser = useSelector((state) => state.session.user);
    const goToSong = (id) => {
        history.push(`/songs/${id}`)
    }

    let like;
    if (sessionUser && song.SongLikes) like = song.SongLikes.find(like => like?.userId === sessionUser?.id);
    let isLike;
    if (like) isLike = true;

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
                {sessionUser
                    ? <LikeButton id={song.id} type={"song"} isLike={isLike} like={like} />
                    : <i className="fa-regular fa-heart"></i>
                    }
                {song.SongLikes.length}
            </div>
            <div onClick={() => {goToUserPage(song.userId)}} className="username">
                {song.user.username}
            </div>
        </div>
    );
};

export default SongDetail;
