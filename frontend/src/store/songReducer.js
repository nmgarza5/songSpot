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

const deleteSong = (song) => {
    return {
        type: DELETE_SONG,
        song,
    };
};

export const fetchSong = (id) => async (dispatch) => {
    const res = await fetch(`/api/songs/${id}`);
    if (res.ok) {
        const song = await res.json();
        dispatch(addSong(song));
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
    console.log("songData ", songData);
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

const initialState = {
    songList: {},
};

const songReducer = (state = initialState, action) => {
    let newState = { ...state };
    let newList = {};
    switch (action.type) {
        case LOAD_SONGS:
            action.songs.forEach((song) => (newList[song.id] = song));
            newState.songList = newList;
            console.log(newState);
            return newState;
        case ADD_SONG:
            newList = { ...state.list };
            newList[action.song.id] = action.song;
            newState.songList = newList;
            return newState;
        default:
            return state;
    }
};
export default songReducer;
