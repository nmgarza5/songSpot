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

    return (
        <>
            <div
                className="username-dropdown"
                onClick={() => setShowMenu(!showMenu)}
            >
                {user.username}
                <i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li className="dropdown-item">
                        <i className="fa-solid fa-headphones"></i>
                        <NavLink className="inner-drop" to="/discover">
                            Home
                        </NavLink>
                    </li>
                    <li className="dropdown-item">
                        <i className="fa-solid fa-music"></i>

                        <NavLink className="inner-drop" to="/songs">
                            Songs
                        </NavLink>
                    </li>
                    <li className="dropdown-item">
                        <i className="fa-solid fa-compact-disc"></i>
                        <NavLink className="inner-drop" to="/playlists">
                            Playlists
                        </NavLink>
                    </li>
                    <li className="dropdown-item">
                        <i className="fa-brands fa-soundcloud"></i>
                        <NavLink className="inner-drop" to={`/${user.id}`}>
                            My Music
                        </NavLink>
                    </li>
                    <li className="signout dropdown-item">
                        <i
                            onClick={logout}
                            className="fa-solid fa-arrow-right-from-bracket"
                        />
                        <div className="inner-drop" onClick={logout}>
                            Sign Out
                        </div>
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;
