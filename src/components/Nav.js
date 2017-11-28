import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="tabs is-centered">
    <ul>
      <li>
        <Link to="/all">Browse all</Link>
      </li>
      <li>
        <Link to="/favourites">Favourites</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
