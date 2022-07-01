import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeButton() {
    return (
        <NavLink exact to='/'>
            Home
        </NavLink>
    )
}
