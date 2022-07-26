import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

function ProfileButton({ user }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const logout = async (e) => {
        e.preventDefault();
        await history.push("/");
        await dispatch(sessionActions.logout());
    };

    const goToDiscover = () => {
        history.push("/discover")
    }
    const goToSongs = () => {
        history.push("/songs")
    }
    const goToPlaylists = () => {
        history.push("/playlists")
    }
    const goToProfile = () => {
        history.push(`/${user.id}`)
    }

    return (
        <>
            <div
                className="username-dropdown"
                onClick={() => setShowMenu(!showMenu)}
                onMouseLeave={() => setTimeout(() => setShowMenu(false), 4000)}
            >
                {user.username}
                <i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li className="dropdown-item" onClick={goToDiscover}>
                        <i className="fa-solid fa-headphones"></i>
                            Home
                    </li>
                    <li className="dropdown-item" onClick={goToSongs}>
                        <i className="fa-solid fa-music"></i>
                            Songs
                    </li>
                    <li className="dropdown-item" onClick={goToPlaylists}>
                        <i className="fa-solid fa-compact-disc"></i>
                            Playlists
                    </li>
                    <li className="dropdown-item" onClick={goToProfile}>
                        <i className="fa-brands fa-soundcloud"></i>
                            My Music
                    </li>
                    <li className="signout dropdown-item" onClick={logout}>
                        <i className="fa-solid fa-arrow-right-from-bracket" />
                            Sign Out
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;
