import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./SplashPage.css";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";

const SplashPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential] = useState("demoUser");
    const [password] = useState("123456");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/activity" />;

    const demoLogin = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };
    return (
        <>
            <div className="carosel">
                <img
                    className="image-container"
                    src="/images/record-shatter.jpg"
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
