import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SongDetail from "../SongDetail";
import PlaylistDetail from "../PlaylistDetail";
import "./ProfilePage.css";

const ProfilePage = ({ songs, playlists }) => {
    const sessionUser = useSelector((state) => state.session.user);
    const currentUserId = sessionUser?.id;

    const { userId } = useParams();

    const displaySongs = songs.filter((song) => song.userId === +userId);
    const displayPlaylists = playlists.filter(
        (playlist) => playlist.userId === +userId
    );
    return (
        <div className="userpage-container">
            {currentUserId === userId ? (
                <h1>My Music</h1>
            ) : (
                <h1>{displaySongs[0].user.username}'s Music</h1>
            )}
            <div className="music-wrapper">
                <section className="user-songs">
                    <h1>Songs</h1>
                    {displaySongs.map(
                        (song) => (
                            <SongDetail
                                key={song.id}
                                song={song}
                            />
                        )
                    )}
                </section>
                <section className="user-playlists">
                    <h1>Playlists</h1>
                    {displayPlaylists.map((playlist) => (
                        <PlaylistDetail key={playlist.id} playlist={playlist} />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default ProfilePage;
