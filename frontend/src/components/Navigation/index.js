import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <li className='profile-button-li'>
                <ProfileButton user={sessionUser} className="profile-button" />
            </li>
        );
    } else {
        sessionLinks = (
            <>
                <li className='nav-li'>
                    <NavLink to="/login">Log In</NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
            </>
        );
    }

    return (
        <div className='nav-div'>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                {isLoaded && sessionLinks}
            </ul>
        </div>
    );
}

export default Navigation;
