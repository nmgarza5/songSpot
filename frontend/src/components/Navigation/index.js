import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import SignUpFormModal from "../SignUpFormModal";

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
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                SongSpot
            </NavLink>
            <ul className="nav-items">
                <li>
                    <form className="search-bar">
                        <label for="search">Search</label>
                        <input
                            name="search"
                            className="search-input"
                            placeholder={placeholder}
                        ></input>
                        <button type="submit" className="search-btn">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </li>
                <li>{isLoaded && sessionLinks}</li>
            </ul>
        </nav>
    );
}

export default Navigation;
