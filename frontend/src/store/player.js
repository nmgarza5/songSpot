const PLAY_SONG = 'PAUSE_SONG';
const PAUSE_SONG = 'PAUSE_SONG';
const PREVIOUS_SONG = 'SET_CURRENT_MODAL';
const NEXT_SONG = 'SET_MODAL_MOUNT';

const SET_PLAYLIST = 'SET_PLAYLIST'


export const playedSong = (song) => ({
    type: PLAY_SONG,
    payload: song
})
export const pausedSong = (song) => ({
    type: PAUSE_SONG,
    payload: song
})
export const playedPreviousSong = (song) => ({
    type: PREVIOUS_SONG,
    payload: song
})
export const playedNextSong = (song) => ({
    type: NEXT_SONG,
    payload: song
})


const initialState = {
    currentSong: null,
    nextSong: null,
    previousSong: null
}

// ----left off here. below is incomplete

export default function modals (state = initialState, action) {
    switch(action.type) {
        case SHOW_MODAL: {
            return {
                ...state,
                display: true
            }
        }
        case HIDE_MODAL: {
            return {
                ...state,
                display: false
            }
        }
        case SET_CURRENT_MODAL: {
            return {
                ...state,
                currentModal: action.payload
            }
        }
        case SET_MODAL_MOUNT: {
            return {
                ...state,
                modalMount: action.payload
            }
        }
        default:
            return state
    }
}
