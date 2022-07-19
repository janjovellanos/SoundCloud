import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSongs } from '../../store/song';



import './Navigation.css'

export default function Home() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSongs())
    }, [dispatch])

    if (sessionUser) {
        return (
            <div className='home-container'>
                <h1>
                    Explore the sounds of today,
                </h1>
                <h1>
                    Shair the sounds of tomorrow
                </h1>
            </div>
        )
    } else {
        return null;
    }
}
