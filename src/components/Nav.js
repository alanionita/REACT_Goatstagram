import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="tabs is-centered">
    <ul>
      <li>
        <NavLink to="/">All goats</NavLink>
      </li>
      <li>
        <NavLink to="/favourites">Favourites</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
