import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom';
const Menu = () => {
    const mystyle = {
        textDecoration: 'none',
        color: 'white'
    }
    return (
        <div className='MenuStyle'>
            <ul>

                <li>
                    <NavLink to='/Login' style={mystyle}>
                        Login
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Menu