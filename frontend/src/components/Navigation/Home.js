import React from 'react'
import { useSelector } from 'react-redux'

import './Navigation.css'

export default function Home() {
    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) {
        return (
            <div className='home-container'>
                <h1>
                    Explore the sounds of today,
                </h1>
                <h1>
                    Create the sounds of tomorrow
                </h1>
            </div>
        )
    } else {
        return null;
    }
}
