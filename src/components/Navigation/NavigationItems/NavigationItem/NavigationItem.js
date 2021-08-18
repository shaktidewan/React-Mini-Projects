import React from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom'
const NavigationItem = (props) => (
    <li className='NavigationItem'>
    <NavLink
        to={props.link} 
        activeClassName='active'
        exact={props.exact}
    >
    {props.children}
    </NavLink>
    </li>
);

export default NavigationItem;
