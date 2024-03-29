// frontend/src/store/session.js
import { csrfFetch } from './csrf';


//action types
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

//action creators
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

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/login', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data));
    return response;
};

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/my/profile');
    const data = await response.json();
    if (data.id) dispatch(setUser(data));
    return response;
};

export const signup = (user) => async dispatch => {
    const { username, email, password, firstName, lastName } = user
    const response = await csrfFetch('/signup', {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password,
            firstName,
            lastName
        }),
    });
    const data = await response.json();
    dispatch(setUser(data));
    return response;
}

export const logout = () => async dispatch => {
    const response = await csrfFetch('/login', {
        method: 'DELETE'
    })
    dispatch(removeUser());
    return response
}


//session reducer
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
        default:
            return state;
    }
};

export default sessionReducer;
