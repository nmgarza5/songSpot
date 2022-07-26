import { csrfFetch } from "./csrf";

const RECEIVED_USERS = "session/receivedUsers"
const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const receivedUsers = (users) => {
    return {
        type: RECEIVED_USERS,
        payload: users,
    };
};

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

export const receiveUsers = () => async (dispatch) => {
    const res = await csrfFetch("/api/users")
    // console.log("res", res)
    if (res.ok) {
        const users = await res.json();
        dispatch(receivedUsers(users));
        return users;
    }
}

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

const initialState = { user: null, users: null };

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
        case RECEIVED_USERS:
            newState = { ...state }
            newState.users = action.payload;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
