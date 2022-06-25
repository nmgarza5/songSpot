import { useHistory} from "react-router-dom";
import defaultImage from "../../images/default-playlist.jpg"


import styles from "./LikeCard.module.css"

const LikeCard = ({like}) => {
    const history = useHistory();
    let type;
    let firstImg;

    if (like.name) {
        type = "playlist"
        firstImg = like?.songs[0]?.imageUrl;
    }

    if (like.title) type = "song"

    const goToSong = (id) => {
        history.push(`/songs/${id}`)
    }

    const goToPlaylist = (id) => {
        history.push(`/playlists/${id}`)
    }

    const goToUserPage= (userId) => {
        history.push(`/${userId}`)
    }

    const addDefaultImage = (e) => {
        e.target.src = defaultImage
    }

    if (!firstImg) firstImg = "/images/default-playlist.jpg";

    return (
        <div className={styles.like_container}>
            { type === "song"
                ?
                <>
                    <img src={like.imageUrl} alt={like.title} className={styles.image} onError={addDefaultImage} onClick={() => {goToSong(like.id)}}></img>
                    <div className={styles.info}>
                        <div onClick={() => {goToUserPage(like.userId)}}>
                            {like.user.username}
                        </div>
                        <div>
                            {like.title}
                        </div>
                        <div className={styles.icons}>
                            <i className="fa-solid fa-heart"></i>
                            {like.SongLikes.length}
                        </div>
                    </div>
                </>
                :
                <>
                    <img src={firstImg} alt={like.name} className={styles.image} onError={addDefaultImage} onClick={() => {goToPlaylist(like.id)}}></img>
                    <div className={styles.info}>
                        <div onClick={() => {goToUserPage(like.userId)}}>
                            {like.user.username}
                        </div>
                        <div onClick={() => {goToPlaylist(like.id)}}>
                            {like.name}
                        </div>
                        <div className={styles.icons}>
                            <i className="fa-solid fa-heart"></i>
                            {like.PlaylistLikes.length}
                            <i className="fa-solid fa-music"></i>
                            {like?.songs?.length}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default LikeCard;
