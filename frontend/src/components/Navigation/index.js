import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import HomeButton from './HomeButton';
import SongButton from './SongButton';
import AlbumButton from './AlbumButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';


import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks =
            <>
                <HomeButton />
                <SongButton />
                <AlbumButton />
                <ProfileButton user={sessionUser} />
            </>
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
            </>
        );
    }

    return (
        <nav className="navigation">
            <div className="top-splash">
                <div className='nav-left'>
                    <img src={require('../../images/soundcloud.png')} className='nav-left' />
                </div>
                <div className='search-bar'>
                    <input
                        type='text'
                        placeholder='Search for anything...'
                        className='search-input'
                    />
                </div>
                <div className="nav-right">
                    <ul>
                        <li className='session-btns'>
                            {isLoaded && sessionLinks}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
