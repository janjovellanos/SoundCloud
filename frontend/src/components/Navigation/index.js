import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';


import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks =
            <>
                <ProfileButton user={sessionUser} />
            </>
    } else {
        sessionLinks = (
            <>
                {/* <NavLink className='login-btn' to="/login">Log In</NavLink> */}
                <LoginFormModal />
                {/* <NavLink className='signup-btn' to="/signup">Sign Up</NavLink> */}
                <SignupFormModal />
            </>
        );
    }

    return (
        <nav className="navigation">
            <div className="top-splash">
                <div className='nav-left'>
                    <img src={require('../../images/soundcloud.png')} className='nav-left' />
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to='/songs'>All Songs</NavLink>
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
