import { useDispatch} from "react-redux";
import { useState, useEffect } from "react";
import styles from "./LikeButton.module.css";
import { fetchSong, addSongLike, removeSongLike } from "../../store/songReducer";
import { addPlaylistLike, fetchPlaylist, removePlaylistLike } from "../../store/playlistReducer";
import { restoreUser } from "../../store/session";

const LikeButton = ({id, type, isLike, like, isPlaylist, playlistId}) => {
    const dispatch = useDispatch();

	const [likeToggle, setLikeToggle] = useState(null);

    useEffect(()=> {
        setLikeToggle(isLike)
    }, [isLike])

    const [showBox, setShowBox] = useState(false);
    const [message, setMessage] = useState(false);

    const showBoxTimer = () => {
        setShowBox(true)
        setTimeout(() => {setShowBox(false)}, 1500)
    }

    const handleLike = async () => {

        if (type === "song") {
            if (!likeToggle) {
                // showBoxTimer()
                await dispatch(addSongLike(id));
                await dispatch(fetchSong(id))
                if (isPlaylist) await dispatch(fetchPlaylist(playlistId));
                // setLikeToggle(true);
                // await dispatch(restoreUser)
            } else {
                // showBoxTimer()
                await dispatch(removeSongLike(like));
                await dispatch(fetchSong(id))
                if (isPlaylist) await dispatch(fetchPlaylist(playlistId));
                // setLikeToggle(false);
                // await dispatch(restoreUser)
            }
        }
        if (type === "playlist") {
            if (!likeToggle) {
                showBoxTimer()
                await dispatch(addPlaylistLike(id));
                await dispatch(fetchPlaylist(id))
                setLikeToggle(true);
                // await dispatch(restoreUser)
            } else {
                showBoxTimer()
                await dispatch(removePlaylistLike(like));
                await dispatch(fetchPlaylist(id))
                setLikeToggle(false);
                // await dispatch(restoreUser)
            }
        }
	};

    return (
        <div
            className={styles.like_container}
            onClick={handleLike}
        >
            {isLike ? (
                <div
                className={styles.like}
                onMouseEnter={() => setMessage(true)}
                onMouseLeave={() => setMessage(false)}
                >
                    <i className="fa-solid fa-heart"></i>
                    {/* {message && (
                        <p className={styles.showBox}>
                            Remove Like
                        </p>
                    )}
                    {showBox && (
                        <p className={styles.showBox}>
                            Liked!
                        </p>
                    )} */}
                </div>
            ) : (
                <div
                    className={styles.no_like}
                    onMouseEnter={() => setMessage(true)}
                    onMouseLeave={() => setMessage(false)}
                >
                    <i className="fa-regular fa-heart"></i>
                    {/* {message && (
                        <p className={styles.showBox}>
                            Like this!
                        </p>
                    )}
                    {showBox && (
                        <p className={styles.showBox}>
                        Removed Liked!
                    </p>
                    )} */}
                </div>
            )}
        </div>
    )
}

export default LikeButton;
