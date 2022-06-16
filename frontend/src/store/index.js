import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import playlistReducer from "./playlistReducer";
import sessionReducer from "./session";
import songReducer from "./songReducer";
import likesReducer from "./likes";

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
    },
});

const persistConfig = {
    key: "counter",
    storage,
};

const rootReducer = combineReducers({
    counter: counterSlice,
    session: sessionReducer,
    songState: songReducer,
    playlistState: playlistReducer,
    likesState: likesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(persistedReducer, preloadedState, enhancer);
};

export default configureStore;
