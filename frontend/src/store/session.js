import { csrfFetch } from "./csrf";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";
const ADD_SONG_LIKE = "session/ADD_SONG__LIKE";
const REMOVE_SONG_LIKE = "session/REMOVE_SONG_LIKE";

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};

const addedSongLike = (newLike) => ({
	type: ADD_SONG_LIKE,
	payload: newLike,
});

const removedSongLike = (removedLike) => ({
	type: REMOVE_SONG_LIKE,
	payload: removedLike,
});

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const restoreUser = () => async (dispatch) => {
    const response = await csrfFetch("/api/session");
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch("/api/session", {
        method: "DELETE",
    });
    dispatch(removeUser());
    return response;
};


export const addSongLike = (id) => async (dispatch) => {
	const res = await fetch("/api/likes/song", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(id),
	});
	const newLike = await res.json();
	dispatch(addedSongLike(newLike));
	return newLike;
};

export const removeSongLike = (id) => async (dispatch) => {
	const res = await fetch("/api/likes/song", {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(id),
	});
	const like = await res.json();
	dispatch(removedSongLike(like));
	return like;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        case ADD_SONG_LIKE:
            newState.user.beer_likes[action.payload.beer_id] =
                action.payload;
            return newState;
        case REMOVE_SONG_LIKE:
            delete newState.user.beer_likes[action.payload.beer_id];
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
