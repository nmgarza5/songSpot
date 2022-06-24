import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import SongFormModal from "../SongFormModal";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";

function Navigation({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    }

    return (
        <nav className="navbar">
            <NavLink exact to="/" className="navbar-logo">
                <div id="bars">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                SongSpot
            </NavLink>
            <ul className="nav-items">
                {!sessionUser &&
                <>
                    <li className="home-container">
                        <NavLink className="home-link" to="/discover">
                            Discover
                        </NavLink>
                    </li>
                    <li className="home-container">
                        <NavLink className="home-link" to="/songs">
                            Songs
                        </NavLink>
                    </li>
                    <li className="home-container">
                        <NavLink className="home-link" to="/playlists">
                            Playlists
                        </NavLink>
                    </li>
                </>
                }
                <li>
                    <form className="search-bar">
                        <input
                            name="search"
                            className="search-input"
                            placeholder="Coming Soon..."
                        ></input>
                        <button type="submit" className="search-btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </li>
                {sessionUser ? (
                    <li className="upload">
                        <SongFormModal />
                    </li>
                ) :
                <div className="btn-container">
                    <LoginFormModal />
                    <SignUpFormModal />
                </div>}
                <li className="drop-li">{isLoaded && sessionLinks}</li>
            </ul>
        </nav>
    );
}

export default Navigation;
