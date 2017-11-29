import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="tabs is-centered">
    <ul>
      <li>
        <NavLink to="/">Browse all</NavLink>
      </li>
      <li>
        <NavLink to="/fav">Favourites</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
