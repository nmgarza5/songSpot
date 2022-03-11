import { csrfFetch } from "./csrf";

const LOAD_PLAYLISTS = "playlists/loadPlaylists";
const ADD_PLAYLIST = "playlists/addPlaylists";
const UPDATE_PLAYLIST = "playlists/updatePlaylists";
const DELETE_PLAYLIST = "playlists/deletePlaylists";

const loadPlaylists = (playlists) => {
    return {
        type: LOAD_PLAYLISTS,
        playlists,
    };
};

const addPlaylist = (playlist) => {
    return {
        type: ADD_PLAYLIST,
        playlist,
    };
};

const updatePlaylist = (playlist) => {
    return {
        type: UPDATE_PLAYLIST,
        playlist,
    };
};

const deletePlaylist = (playlistId) => {
    return {
        type: DELETE_PLAYLIST,
        playlistId,
    };
};

//fetch single playlist
export const fetchPlaylist = (id) => async (dispatch) => {
    const res = await fetch(`/api/playlists/${id}`);
    console.log(res);
    if (res.ok) {
        const playlist = await res.json();
        dispatch(addPlaylist(playlist));
        return playlist;
    }
};

//fetch all playlists
export const fetchPlaylists = () => async (dispatch) => {
    const res = await fetch(`/api/playlists`);
    if (res.ok) {
        const data = await res.json();
        dispatch(loadPlaylists(data.playlists));
        return data.playlists;
    }
};

//add a playlist
export const addPlaylistForm = (playlistData) => async (dispatch) => {
    // console.log("songData ", songData);
    const res = await csrfFetch("/api/playlists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playlistData),
    });
    const newPlaylist = await res.json();
    dispatch(addPlaylist(newPlaylist));
    return newPlaylist;
};

//update a playlist
export const updatePlaylistForm = (playlistData) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/${playlistData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playlistData),
    });
    const updatedPlaylist = await res.json();
    dispatch(updatePlaylist(updatedPlaylist));
    return updatedPlaylist;
};

//delete a playlist
export const deletePlaylistThunk = (id) => async (dispatch) => {
    console.log(id);
    const res = await csrfFetch(`/api/playlists/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
        dispatch(deletePlaylist(id));
        return;
    }
};

const initialState = {};

const playlistReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_PLAYLISTS:
            action.playlists.forEach(
                (playlist) => (newState[playlist.id] = playlist)
            );
            return newState;
        case ADD_PLAYLIST:
            console.log("ACTION ", action);
            newState[action.playlist.retPlaylist.id] =
                action.playlist.retPlaylist;
            console.log("NEWSTATE ", newState);
            return newState;
        case UPDATE_PLAYLIST:
            newState[action.playlist.retPlaylist.id] =
                action.playlist.retPlaylist;
            return newState;
        case DELETE_PLAYLIST:
            delete newState[action.playlistId];
            return newState;
        default:
            return state;
    }
};
export default playlistReducer;
