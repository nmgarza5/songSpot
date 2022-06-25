import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import SongsPage from "./components/SongsPage";
import SingleSong from "./components/SingleSong";
import PlaylistsPage from "./components/PlaylistsPage";
import SinglePlaylist from "./components/SinglePlaylist";
import { Footer } from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import Player from "./components/Player";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const songsObject = useSelector((state) => state.songState);
    const songs = Object.values(songsObject);
    const playlistObject = useSelector((state) => state.playlistState);
    const playlists = Object.values(playlistObject);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <div className="page-container">
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
                <Switch>
                    <Route exact path="/">
                        <SplashPage />
                    </Route>
                    <Route path="/discover">
                        <HomePage songs={songs} playlists={playlists} />
                    </Route>
                    <Route path="/songs/:id">
                        <SingleSong songs={songs} />
                    </Route>
                    <Route path="/songs">
                        <SongsPage />
                    </Route>
                    <Route path="/playlists/:id">
                        <SinglePlaylist playlists={playlists} />
                    </Route>
                    <Route path="/playlists">
                        <PlaylistsPage />
                    </Route>
                    <Route path="/:userId">
                        <ProfilePage songs={songs} playlists={playlists} />
                    </Route>
                </Switch>
            )}
            <Footer />
        </div>
    );
}

export default App;
