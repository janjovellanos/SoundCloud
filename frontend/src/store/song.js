import { csrfFetch } from "./csrf";

export const LOAD_SONGS = 'songs/loadSongs';
export const LOAD_ONE_SONG = 'songs/loadOneSong'
export const CREATE_SONG = 'songs/addSong'
export const UPDATE_SONG = 'songs/updateSong';
export const DELETE_SONG = 'song/deleteSong';


const load = (list) => ({
    type: LOAD_SONGS,
    list
})

const loadSong = (song) => ({
    type: LOAD_ONE_SONG,
    song
});

const addSong = (song) => ({
    type: CREATE_SONG,
    song
});

const deleteSong = (id) => ({
    type: DELETE_SONG,
    id
});

const updateSong = (song) => ({
    type: UPDATE_SONG,
    song
})

export const getAllSongs = () => async dispatch => {
    const res = await csrfFetch('/api/songs');
    if (res.ok) {
        const list = await res.json();
        dispatch(load(list.Songs));
    }
}

export const getSong = (songId) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${songId}`);

    if (res.ok) {
        const song = await res.json();
        dispatch(loadSong(song));
    }
};

export const createSong = (data) => async (dispatch) => {
    const { imageUrl, title, audioUrl, description, albumId } = data;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    if (albumId) formData.append("albumId", albumId)
    if (imageUrl) formData.append("imageUrl", imageUrl)
    if (audioUrl) formData.append("audioUrl", audioUrl);

    const res = await csrfFetch('/api/songs', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    });

    if (res.ok) {
        const song = await res.json();
        dispatch(addSong(song));

        return song;
    }
};

export const editSong = (song, songId) => async (dispatch) => {
    const { imageUrl, title, audioUrl, description } = song;

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);

    if (imageUrl) formData.append("imageUrl", imageUrl)
    if (audioUrl) formData.append("audioUrl", audioUrl);

    const result = await csrfFetch(`/api/songs/${songId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    });
    if (result.ok) {
        const data = await result.json();
        dispatch(updateSong(data))
    }
}

export const deleteOneSong = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(deleteSong(id));
    }
};




const songsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SONGS:
            newState = { ...state };
            action.list.forEach(song => {
                newState[song.id] = song;
            });
            return newState
        case LOAD_ONE_SONG:
            return {
                ...state,
                [action.song.id]: action.song
            }
        case CREATE_SONG:
            return {
                ...state,
                [action.song.id]: action.song
            }
        case UPDATE_SONG:
            return {
                ...state,
                [action.song.id]: action.song
            };
        case DELETE_SONG:
            newState = { ...state };
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default songsReducer
