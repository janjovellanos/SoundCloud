import { csrfFetch } from "./csrf";

export const LOAD_SONGS = 'songs/loadSongs';

const load = (list) => {
    return {
        type: LOAD_SONGS,
        list
    }
}

export const getAllSongs = () => async dispatch => {
    const res = await csrfFetch('/songs');
    if (res.ok) {
        const list = await res.json();
        dispatch(load(list.Songs));
    }
}


const songsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SONGS:
            newState = { ...state };
            action.list.forEach(song => {
                newState[song.id] = song;
            });
            return newState
        default:
            return state;
    }
}

export default songsReducer
