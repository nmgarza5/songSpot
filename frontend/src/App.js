import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import SongList from "./components/SongList";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
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
                    <Route path="/home">
                        <HomePage />
                    </Route>
                    <Route path="/songs">
                        <SongList />
                    </Route>
                </Switch>
            )}
            <footer className="footer">
                Node.js - Express - Sequelize - React - Redux
            </footer>
        </div>
    );
}

export default App;
