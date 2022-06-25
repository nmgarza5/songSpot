import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SongDetail from "../SongDetail";
import PlaylistDetail from "../PlaylistDetail";
import LikeBigCard from "../LikeBigCard";
import "./ProfilePage.css";

const ProfilePage = ({ songs, playlists }) => {
    const sessionUser = useSelector((state) => state.session.user);
    const currentUserId = sessionUser?.id;

    const [selected, setSelected] = useState('songs');
    const { userId } = useParams();

    const displaySongs = songs.filter((song) => song.userId === +userId);
    const displayPlaylists = playlists.filter(
        (playlist) => playlist.userId === +userId
    );

    let userLikes = [];

    songs.forEach((song) => {
        let songLike = song.SongLikes.find((like) => like.userId === +userId)
        if (songLike) userLikes.push(song)
    })

    playlists.forEach((playlist) => {
        let playlistLike = playlist.PlaylistLikes.find((like) => like.userId === +userId)
        if (playlistLike) userLikes.push(playlist)
    })

    let likes = userLikes.sort((a,b) => (new Date(b.createdAt) - new Date(a.createdAt)));

    return (
        <div className="userpage-container">
            {currentUserId === +userId ? (
                <h1>My Music</h1>
            ) : (
                <h1>{displaySongs[0].user.username}'s Music</h1>
            )}
            <div className="music-wrapper">
                <section className="select">
                    {selected === 'songs'
                    ? <span className="songs_selected">Songs</span>
                    : <span className="songs_not_selected" onClick={()=>setSelected("songs")}>Songs</span>
                    }
                    {selected === 'playlists'
                    ? <span className="playlists_selected">Playlists</span>
                    : <span className="playlists_not_selected" onClick={()=>setSelected("playlists")}>Playlists</span>
                    }
                    {selected === 'likes'
                    ? <span className="likes_selected">Likes</span>
                    : <span className="likes_not_selected" onClick={()=>setSelected("likes")}>Likes</span>
                    }
                </section>
                {selected === 'songs' &&
                    <section className="content">
                        {displaySongs.map(
                            (song) => (
                                <SongDetail
                                    key={song.id}
                                    song={song}
                                    />
                            )
                            )}
                    </section>
                }
                {selected === 'playlists' &&
                    <section className="content">
                        {displayPlaylists.map((playlist) => (
                            <PlaylistDetail key={playlist.id} playlist={playlist} />
                        ))}
                    </section>
                }
                {selected === 'likes' &&
                    <section className="content">
                        {likes.map((like, idx) => (
                            <LikeBigCard key={idx} like={like} />
                            ))}
                    </section>
                }
            </div>
        </div>
    );
};

export default ProfilePage;
