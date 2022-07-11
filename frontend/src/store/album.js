import { csrfFetch } from "./csrf";

export const LOAD_ALBUMS = "albums/loadAlbums";
export const SINGLE_ALBUM = "albums/singleAlbum";
export const CREATE_ALBUM = 'albums/addAlbum';


const loadAllAlbums = (list) => {
    return {
        type: LOAD_ALBUMS,
        list
    };
};

const loadAlbum = (album) => {
    return {
        type: SINGLE_ALBUM,
        album
    };
};

const addAlbum = (album) => ({
    type: CREATE_ALBUM,
    album
});


export const loadAlbums = () => async (dispatch) => {
    const res = await csrfFetch("/albums");

    if (res.ok) {
        const albums = await res.json();
        dispatch(loadAllAlbums(albums.Albums));
    }
};

export const getAlbum = (album) => async (dispatch) => {
    const res = await csrfFetch(`/albums/${album.id}`);

    if (res.ok) {
        const album = await res.json();
        dispatch(loadAlbum(album));
    }
};

export const createAlbum = (data) => async (dispatch) => {
    const res = await csrfFetch('/albums', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    // console.log(data);
    if (res.ok) {
        const album = await res.json();
        dispatch(addAlbum(album));

        return album;
    }
};


let newState = {};

const albumsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            newState = { ...state };
            action.list.forEach((album) => {
                newState[album.id] = album;
            });
            return newState;

        case SINGLE_ALBUM:
            return {
                ...state,
                [action.album.id]: action.album
            };
        case CREATE_ALBUM:
            return {
                ...state,
                [action.album.id]: action.album
            }
        default:
            return state;
    }
};

export default albumsReducer;
