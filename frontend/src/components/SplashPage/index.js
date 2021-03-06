import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./SplashPage.css";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import record from "../../images/record-shatter.jpg"

const SplashPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential] = useState("Demo-lition");
    const [password] = useState("password");

    if (sessionUser) return <Redirect to="/discover" />;

    const demoLogin = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({ credential, password }))
    };
    return (
        <>
            <div className="carosel">
                <img
                    className="image-container"
                    src={record}
                    alt="record-shatter"
                ></img>
            </div>
            <div className="text-container">
                <h1>Welcome to SongSpot!</h1>
                <h3>
                    A place to upload, save, and share all of your favorite
                    songs and playlists.
                </h3>
                <div className="btn-container">
                    <LoginFormModal />
                    <SignUpFormModal />
                </div>
                <button className="demo-btn" onClick={demoLogin}>
                    Demo
                </button>
            </div>
        </>
    );
};
export default SplashPage;
