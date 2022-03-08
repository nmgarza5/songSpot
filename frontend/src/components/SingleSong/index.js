import { useParams } from "react-router-dom";

import "./SingleSong.css";

const SingleSong = ({ songs }) => {
    const { id } = useParams();

    const singleSong = songs.find((song) => song.id === +id);

    return (
        <div className="singleSong">
            <h1>{singleSong?.title}</h1>
            <img src={singleSong?.imageUrl} alt={singleSong?.title} />
            <p>{singleSong?.body}</p>
        </div>
    );
};

export default SingleSong;
