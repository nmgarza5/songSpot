import { useSelector } from "react-redux";
import { useHistory, useParams} from "react-router-dom";
import defaultImage from "../../images/default-playlist.jpg"
import LikeButton from "../LikeButton";


import styles from "./LikeBigCard.module.css"

const LikeBigCard = ({content}) => {
    // console.log("like", content)
    const sessionUser = useSelector((state) => state.session.user);
    const currentUserId = sessionUser?.id;
    const { userId } = useParams();
    let owner;
    if (currentUserId === +userId) owner = true;

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
                        <div className={styles.icons}>
                        {owner === true
                            ? <LikeButton id={content.id} type={"song"} isLike={isLike} like={like} />
                            : <i className="fa-regular fa-heart"></i>
                        }
                            {content.SongLikes.length}
                        </div>
                        <div>
                            {content.title}
                        </div>
                    </div>
                </>
                :
                <>
                    <img src={firstImg} alt={content.name} className={styles.image} onError={addDefaultImage} onClick={() => {goToPlaylist(content.id)}}></img>
                    <div className={styles.info}>
                        <div onClick={() => {goToPlaylist(content.id)}}>
                            {content.name}
                        </div>
                        <div className={styles.icons}>
                        {owner === true
                            ? <LikeButton id={content.id} type={"playlist"} isLike={isLike} like={like} />
                            : <i className="fa-regular fa-heart"></i>
                        }
                            {content.PlaylistLikes.length}
                            <i className="fa-solid fa-music"></i>
                            {content?.songs?.length}
                        </div>
                        <div onClick={() => {goToUserPage(content.userId)}}>
                            {content.user.username}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default LikeBigCard;
