
const ADD_SONG_LIKE = "session/ADD_SONG__LIKE";
const REMOVE_SONG_LIKE = "session/REMOVE_SONG_LIKE";

const addedSongLike = (newLike) => ({
	type: ADD_SONG_LIKE,
	payload: newLike,
});

const removedSongLike = (removedLike) => ({
	type: REMOVE_SONG_LIKE,
	payload: removedLike,
});


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


const initialState = { song_likes: null, playlist_likes: null };

const likesReducer = (state = initialState, action) => {
	let newState = { ...state };
    switch (action.type) {
        case ADD_SONG_LIKE:
            newState.song_likes[action.payload.id] =
                action.payload;
            return newState;
        case REMOVE_SONG_LIKE:
            delete newState.song_likes[action.payload.id];
            return newState;
        default:
            return state;
    }
};

export default likesReducer;
