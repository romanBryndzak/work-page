import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className="Nav-bar">
            Nav-bar
            <NavLink to='/Notes' className='nav-link'>Notes</NavLink>
            <NavLink to='/Create' className='nav-link'>Create</NavLink>
            <NavLink to='/Edit' className='nav-link'>Edit</NavLink>
            <NavLink to='/Setting' className='nav-link'>Setting</NavLink>
        </div>)

}

export default NavBar