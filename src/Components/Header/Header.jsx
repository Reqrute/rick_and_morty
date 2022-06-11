import React from 'react'
import { NavLink } from 'react-router-dom'
import Autorization from '../../ClientAuth/Autorization/Autorization'

function Header() {
  return (
    <div>
        <h3>Rick and Morty</h3>
        <div className="header-links">
            <NavLink 
            exact
            to="/"
            >
                Characters
            </NavLink>
            
            <NavLink
            exact
            to="/"
            >
                Episode
            </NavLink>

            <NavLink
            exact
            to="/"
            >
                Location
            </NavLink>
            <Autorization/>
        </div>
    </div>
  )
}

export default Header