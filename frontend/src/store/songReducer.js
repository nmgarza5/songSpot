import { csrfFetch } from "./csrf";

const LOAD_SONGS = "songs/loadSongs";
const ADD_SONG = "song/addSong";
const UPDATE_SONG = "song/updateSong";
const DELETE_SONG = "song/deleteSong";

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
        console.log("fetchSongs Thunk - song", song);
        dispatch(addSong(song));
        return song;
    }
};
export const fetchSongs = () => async (dispatch) => {
    const res = await fetch(`/api/songs`);
    if (res.ok) {
        const data = await res.json();
        console.log("fetchSongs Thunk - data.songs", data.songs);
        dispatch(loadSongs(data.songs));
        return data.songs;
    }
};

export const addSongForm = (songData) => async (dispatch) => {
    // console.log("songData ", songData);
    const res = await csrfFetch("/api/songs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(songData),
    });
    const newSong = await res.json();
    console.log("newSong ", newSong);
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
    console.log("updatedsong", updatedSong);
    dispatch(updateSong(updatedSong));
    return updatedSong;
};

export const deleteSongThunk = (id) => async (dispatch) => {
    console.log(id);
    const res = await csrfFetch(`/api/songs/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
        dispatch(deleteSong(id));
        return;
    }
};

const initialState = {};

const songReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_SONGS:
            action.songs.forEach((song) => (newState[song.id] = song));
            console.log("LOAD_SONGS ", newState);
            return newState;
        case ADD_SONG:
            newState[action.song.retSong.id] = action.song.retSong;
            console.log("ADD_SONG ", newState);
            return newState;
        case UPDATE_SONG:
            newState[action.song.retSong.id] = action.song.retSong;
            console.log("UPDATE_SONG ", newState);
            return newState;
        case DELETE_SONG:
            console.log("newState ", newState);
            console.log("ACTION ", action);
            delete newState[action.songId];
            return newState;
        default:
            return state;
    }
};
export default songReducer;
