import { useSelector } from "react-redux";
import { useHistory} from "react-router-dom";
import defaultImage from "../../images/default-playlist.jpg"
import LikeButton from "../LikeButton";


import styles from "./LikeCard.module.css"

const LikeCard = ({content}) => {
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();
    let type;
    let firstImg;
    let like;
    let isLike;

    if (content.name) {
        type = "playlist"
        firstImg = content?.songs[0]?.imageUrl;
        like = content.PlaylistLikes.find(like => like?.userId === sessionUser?.id);
        isLike = true;
    }

    if (content.title) {
        type = "song"
        like = content.SongLikes.find(like => like?.userId === sessionUser?.id);
        isLike = true;
    }



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
                    <img src={content.imageUrl} alt={content.title} className={styles.image} onError={addDefaultImage} onClick={() => {goToSong(content.id)}}></img>
                    <div className={styles.info}>
                        <div onClick={() => {goToUserPage(content.userId)}}>
                            {content.user.username}
                        </div>
                        <div>
                            {content.title}
                        </div>
                        <div className={styles.icons}>
                            <LikeButton id={content.id} type={"song"} isLike={isLike} like={like} />
                            {content.SongLikes.length}
                        </div>
                    </div>
                </>
                :
                <>
                    <img src={firstImg} alt={content.name} className={styles.image} onError={addDefaultImage} onClick={() => {goToPlaylist(content.id)}}></img>
                    <div className={styles.info}>
                        <div onClick={() => {goToUserPage(content.userId)}}>
                            {content.user.username}
                        </div>
                        <div onClick={() => {goToPlaylist(content.id)}}>
                            {content.name}
                        </div>
                        <div className={styles.icons}>
                            <LikeButton id={content.id} type={"playlist"} isLike={isLike} like={like} />
                            {content.PlaylistLikes.length}
                            <i className="fa-solid fa-music"></i>
                            {content?.songs?.length}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default LikeCard;
