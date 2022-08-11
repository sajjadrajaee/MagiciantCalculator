import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = () => (
  <nav className="navBar">
    <ul>
      <li>
        <NavLink to="/qoute">qoute</NavLink>
        |
        {' '}
      </li>
      <li><NavLink to="/aboutCalc">calculator</NavLink></li>

    </ul>
  </nav>
);

export default navbar();
