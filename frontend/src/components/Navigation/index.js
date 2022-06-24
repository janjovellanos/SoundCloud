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
            <li>
                <ProfileButton user={sessionUser} />
            </li>
        );
    } else {
        sessionLinks = (
            <>
                <li>
                    <NavLink to="/login">Log In</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
            </>
        );
    }

    return (
        <div className='nav-div'>
            <ul className='nav-ul'>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                {isLoaded && sessionLinks}
            </ul>
        </div>
    );
}

export default Navigation;
