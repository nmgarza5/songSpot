import { useHistory } from "react-router-dom";
import "./PlaylistDetail.css";

import defaultImage from "../../images/default-playlist.jpg"
import LikeButton from "../LikeButton";

const PlaylistDetail = ({ playlist }) => {
    let firstImg = playlist?.songs[0]?.imageUrl;
    if (!firstImg) firstImg = "/images/default-playlist.jpg";

const history = useHistory();
const goToPlaylist = (id) => {
    history.push(`/playlists/${id}`)
}

const goToUserPage= (userId) => {
    history.push(`/${userId}`)
}

const addDefaultImage = (e) => {
    e.target.src = defaultImage
}

return (
    <div className="playlist-details">
        <img src={firstImg} alt={playlist.name} className="image" onClick={() => {goToPlaylist(playlist.id)}} onError={addDefaultImage}></img>
        {playlist.name.length < 20
            ?
            <div onClick={() => {goToPlaylist(playlist.id)}} className="title">
                {playlist.name}
            </div>
            :
            <div onClick={() => {goToPlaylist(playlist.id)}} className="title">
                {playlist.name.slice(0,20)}...
            </div>
        }
        {/* <div className="likes">
        </div> */}
        <div className="likes">
            <LikeButton />
            {playlist.PlaylistLikes.length}
            <i className="fa-solid fa-music"></i>
            {playlist?.songs?.length}
        </div>
        <div onClick={() => {goToUserPage(playlist.userId)}} className="username">
            {playlist.user.username}
        </div>
    </div>
);
};

export default PlaylistDetail;
