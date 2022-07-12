import { csrfFetch } from "./csrf";

export const LOAD_ALBUMS = "albums/loadAlbums";
export const SINGLE_ALBUM = "albums/singleAlbum";
export const CREATE_ALBUM = 'albums/addAlbum';
export const UPDATE_ALBUM = 'albums/updateAlbum';
export const DELETE_ALBUM = 'albums/deleteAlbum';




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

const updateAlbum = (album) => ({
    type: UPDATE_ALBUM,
    album
})

const deleteAlbum = (id) => ({
    type: DELETE_ALBUM,
    id
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

export const editAlbum = (album) => async (dispatch) => {
    const result = await csrfFetch(`/albums/${album.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(album)
    });
    if (result.ok) {
        const data = await result.json();
        dispatch(updateAlbum(data))
    }
}

export const deleteOneAlbum = (id) => async (dispatch) => {
    const res = await csrfFetch(`/albums/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(deleteAlbum(id));
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
        case UPDATE_ALBUM:
            return {
                ...state,
                [action.album.id]: action.album
            };
        case DELETE_ALBUM:
            newState = { ...state };
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default albumsReducer;
