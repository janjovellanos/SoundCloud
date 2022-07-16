import { csrfFetch } from "./csrf";

export const LOAD_ARTISTS = 'artists/loadArtists';

const load = (list) => ({
    type: LOAD_ARTISTS,
    list
})

export const getAllArtists = () => async dispatch => {
    const res = await csrfFetch('/api/artists');
    if (res.ok) {
        const list = await res.json();
        dispatch(load(list));
    }
}

const artistsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ARTISTS:
            newState = { ...state };
            action.list.forEach(artist => {
                newState[artist.id] = artist;
            });
            return newState
        default:
            return state;
    }
}

export default artistsReducer
