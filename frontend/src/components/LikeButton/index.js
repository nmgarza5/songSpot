import { useDispatch} from "react-redux";
import { useState, useEffect } from "react";
import styles from "./LikeButton.module.css";
import { fetchSong, addSongLike, removeSongLike } from "../../store/songReducer";
import { addPlaylistLike, fetchPlaylist, removePlaylistLike } from "../../store/playlistReducer";

const LikeButton = ({id, type, isLike, like}) => {
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
		setLikeToggle(!likeToggle);
        if (type === "song") {
            if (!likeToggle) {
                showBoxTimer()
                await dispatch(addSongLike(id));
                await dispatch(fetchSong(id))
            } else {
                showBoxTimer()
                await dispatch(removeSongLike(like));
                await dispatch(fetchSong(id))
            }
        }
        if (type === "playlist") {
            if (!likeToggle) {
                showBoxTimer()
                await dispatch(addPlaylistLike(id));
                await dispatch(fetchPlaylist(id))
            } else {
                showBoxTimer()
                await dispatch(removePlaylistLike(like));
                await dispatch(fetchPlaylist(id))
            }
        }
	};

    return (
        <div
            className={styles.like_container}
            onClick={handleLike}
        >
            {likeToggle ? (
                <div
                className={styles.like}
                onMouseEnter={() => setMessage(true)}
                onMouseLeave={() => setMessage(false)}
                >
                    <i className="fa-solid fa-heart fa-2x"></i>
                    {message && (
                        <p className={styles.showBox}>
                            Remove Like
                        </p>
                    )}
                    {showBox && (
                        <p className={styles.showBox}>
                            Liked!
                        </p>
                    )}
                </div>
            ) : (
                <div
                    className={styles.no_like}
                    onMouseEnter={() => setMessage(true)}
                    onMouseLeave={() => setMessage(false)}
                >
                    <i className="fa-regular fa-heart fa-2x"></i>
                    {message && (
                        <p className={styles.showBox}>
                            Like this!
                        </p>
                    )}
                    {showBox && (
                        <p className={styles.showBox}>
                        Removed Liked!
                    </p>
                    )}
                </div>
            )}
        </div>
    )
}

export default LikeButton;
