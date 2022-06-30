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
                <nav className="login-navigation">
                    <div className="login-top-splash">
                        <div className='nav-left'>
                            <img src={require('../../images/soundcloud.png')} className='nav-left-logo' />
                        </div>
                        <HomeButton />
                        <SongButton />
                        <AlbumButton />
                        <div className='search-bar'>
                            <input
                                type='text'
                                placeholder='Search for anything...'
                                className='search-input'
                            />
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li className='profile-btn'>
                                    <ProfileButton user={sessionUser} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
    } else {
        sessionLinks =
            <>
                <nav className="logout-navigation">
                    <div className="logout-top-splash">
                        <div className='nav-left'>
                            <img src={require('../../images/soundcloud.png')} className='nav-left-logo' />
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
                                    <LoginFormModal />
                                    <SignupFormModal />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>

    }

    return (
        <>
            {isLoaded && sessionLinks}
        </>
    );
}

export default Navigation;
