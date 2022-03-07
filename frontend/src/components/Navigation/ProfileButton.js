import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

function ProfileButton({ user }) {
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

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <div className="username" onClick={openMenu}>
                {user.username}
            </div>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>
                        <i class="fa-solid fa-circle-heart"></i>
                        <NavLink to="/">Likes</NavLink>
                    </li>
                    <li>
                        <i class="fa-solid fa-waveform-lines"></i>
                        <NavLink to="/">Songs</NavLink>
                    </li>
                    <li>
                        <i class="fa-solid fa-list-music"></i>
                        <NavLink to="/">Playlists</NavLink>
                    </li>
                    <li className="signout">
                        <i
                            onClick={logout}
                            class="fa-solid fa-arrow-right-from-bracket"
                        />
                        <div onClick={logout}>Sign Out</div>
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;
