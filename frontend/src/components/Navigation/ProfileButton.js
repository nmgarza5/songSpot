import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

function ProfileButton({ user }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = async (e) => {
        e.preventDefault();
        await dispatch(sessionActions.logout());
        history.push("/"); //neither methods working
        // return <Redirect to="/" />;
    };

    return (
        <>
            <div className="username-dropdown" onClick={openMenu}>
                {user.username}
                <i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li className="dropdown-item">
                        <i className="fa-regular fa-heart"></i>
                        <NavLink className="inner-drop" to="/">
                            Likes
                        </NavLink>
                    </li>
                    <li className="dropdown-item">
                        <i className="fa-solid fa-guitar"></i>
                        <NavLink className="inner-drop" to="/songs">
                            Songs
                        </NavLink>
                    </li>
                    <li className="dropdown-item">
                        <i className="fa-solid fa-music"></i>
                        <NavLink className="inner-drop" to="/playlists">
                            Playlists
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
