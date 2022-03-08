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
export const fetchSongs = (id) => async (dispatch) => {
    const res = await fetch(`/api/songs/${id}`);
    if (res.ok) {
        const songs = await res.json();
        dispatch(loadSongs(songs));
        return songs;
    }
};

const initialState = {
    list: {},
};

const songReducer = (state = initialState, action) => {
    let newState;
    let newList;
    switch (action.type) {
        case LOAD_SONGS:
            newState = { ...state };
            newList = {};
            action.songs.forEach((song) => (newList[song.id] = song));
            newState.list = newList;
            return newState;
        case ADD_SONG:
            newState = { ...state };
            // console.log("new state: ", newState)
            newList = { ...state.list };
            // console.log("new entries: ", newEntries)
            newList[action.newSong.id] = action.newSong;
            // console.log("new entries with added article: ", newEntries)
            newState.entries = newEntries;
            // console.log("new state with all entries: ", newState)
            return newState;
        default:
            return state;
    }
};
