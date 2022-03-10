import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import SongFormModal from "../SongFormModal";

function Navigation({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    }
    const placeholder = "Songs, playlists, and genres...";

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
                <li className="home-container">
                    <NavLink className="home-link" to="/home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <form className="search-bar">
                        <label htmlFor="search">Search</label>
                        <input
                            name="search"
                            className="search-input"
                            placeholder={placeholder}
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
                ) : null}
                <li className="drop-li">{isLoaded && sessionLinks}</li>
            </ul>
        </nav>
    );
}

export default Navigation;
