import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <Link to="/">
          <h1 className="title has-text-centered is-size-3-touch is-size-3-desktop is-size-3-widescreen is-size-3-fullhd">
            Goatstagram{' '}
            <span role="img" aria-label="goat emoji">
              🐐
            </span>
          </h1>
        </Link>
        <h2 className="subtitle has-text-centered is-size-6-touch is-size-6-desktop is-size-6-widescreen is-size-6-fullhd">
          The social network for goat-tastic pictures
        </h2>
      </div>
    </div>
  </header>
);

export default Header;
