import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import MusicPlayer from './MusicPlayer';
import CreateSongFormModal from '../SongComponents/CreateSongModal'

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
                        </div>
                        <NavLink exact to='/'><i className="fa-solid fa-house"></i></NavLink>
                        <NavLink to='/songs'>Songs</NavLink>
                        <NavLink to='/albums'>Albums</NavLink>
                        <CreateSongFormModal />
                        <div className='search-bar'>
                            <input
                                type='text'
                                placeholder='Search for anything...'
                                className='search-input'
                            />
                        </div>
                        <div className="nav-right">
                            <ul className='profile-btn-ul'>
                                <li className='profile-btn'>
                                    <ProfileButton user={sessionUser} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                    </div>
                </nav>
                <MusicPlayer />
            </>
    } else {
        sessionLinks =
            <>
                <nav className="logout-navigation">
                    <div className="logout-top-splash">
                        <div className='nav-left'>
                            <img src={require('../../images/soundcloudlogo.png')} className='nav-left-logo' />
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
                    <div className='under-nav-banner'>
                        <h1>Login and listen now <i className="fa-solid fa-headphones-simple"></i></h1>
                    </div>
                </nav>
            </>

    }

    return (
        <div className='all-navigation'>
            {isLoaded && sessionLinks}
        </div>
    );
}

export default Navigation;
