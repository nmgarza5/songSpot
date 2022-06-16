import { csrfFetch } from "./csrf";

const LOAD_SONG = "songs/loadSong";
const LOAD_SONGS = "songs/loadSongs";
const ADD_SONG = "song/addSong";
const UPDATE_SONG = "song/updateSong";
const DELETE_SONG = "song/deleteSong";


const loadSong = (song) => {
    return {
        type: LOAD_SONG,
        song,
    };
};

const loadSongs = (songs) => {
    return {
        type: LOAD_SONGS,
        songs,
    };
};

const addSong = (song) => {
    return {
        type: ADD_SONG,
        song,
    };
};

const updateSong = (song) => {
    return {
        type: UPDATE_SONG,
        song,
    };
};

const deleteSong = (songId) => {
    return {
        type: DELETE_SONG,
        songId,
    };
};

export const fetchSong = (id) => async (dispatch) => {
    const res = await fetch(`/api/songs/${id}`);
    if (res.ok) {
        const song = await res.json();
        dispatch(loadSong(song));
        return song;
    }
};
export const fetchSongs = () => async (dispatch) => {
    const res = await fetch(`/api/songs`);
    if (res.ok) {
        const data = await res.json();
        dispatch(loadSongs(data.songs));
        return data.songs;
    }
};

export const addSongForm = (songData) => async (dispatch) => {
    const res = await csrfFetch("/api/songs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(songData),
    });
    const newSong = await res.json();
    dispatch(addSong(newSong));
    return newSong;
};
export const updateSongForm = (songData) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${songData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(songData),
    });
    const updatedSong = await res.json();
    dispatch(updateSong(updatedSong));
    return updatedSong;
};

export const deleteSongThunk = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
        dispatch(deleteSong(id));
        return;
    }
};

export const addSongLike = (id) => async (dispatch) => {
	const res = await csrfFetch("/api/likes/song", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({"songId": id }),
	});
	const newLike = await res.json();
	// dispatch(addedSongLike(newLike));
	return newLike;
};

export const removeSongLike = (data) => async (dispatch) => {
	const res = await csrfFetch("/api/likes/song", {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	const like = await res.json();
    // console.log(like)
	// dispatch(removedSongLike(like));
	return like;
};


const initialState = {};

const songReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_SONG:
            newState[action.song.retSong.id] = action.song.retSong;
            return newState;
        case LOAD_SONGS:
            action.songs.forEach((song) => (newState[song.id] = song));
            return newState;
        case ADD_SONG:
            newState[action.song.retSong.id] = action.song.retSong;
            return newState;
        case UPDATE_SONG:
            newState[action.song.retSong.id] = action.song.retSong;
            return newState;
        case DELETE_SONG:
            delete newState[action.songId];
            return newState;
        default:
            return state;
    }
};
export default songReducer;
