import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import SingleSong from "../SingleArticle";
import SongDetail from "../ArticleDetail";
// 5. Replace import of action creator with thunk creator
import { fetchSongs } from "../../store/songReducer";

const SongList = () => {
    const dispatch = useDispatch();

    const songsObject = useSelector((state) => state.songState.list);
    const songs = Object.values(songsObject);
    useEffect(() => {
        dispatch(fetchSongs());
    }, [dispatch]);

    return (
        <div>
            <h1>Song List</h1>
            <ol>
                {songs.map(({ id, title }) => (
                    <SongDetail key={id} id={id} title={title} />
                ))}
            </ol>

            <Switch>
                <Route path="/songs/:id">
                    <SingleSong songs={songs} />
                </Route>
            </Switch>
        </div>
    );
};

export default SongList;
