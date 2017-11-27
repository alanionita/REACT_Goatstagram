import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// COMPONENTS
import PhotoList from './PhotoList';

const App = ({ photosData, addToFave }) => (
  <div className="App">
    <header className="level is-mobile">
      <h1 className="level-item is-size-3">
        Goatstagram{' '}
        <span role="img" aria-label="goat emoji">
          🐐
        </span>
      </h1>
    </header>
    <nav className="tabs is-centered">
      <ul>
        <li>
          <Link to="/all">All images</Link>
        </li>
        <li>
          <Link to="/favourites">
            Favourites{' '}
            <span role="img" aria-label="heart emoji">
              ❤️
            </span>
          </Link>
        </li>
      </ul>
    </nav>
    <PhotoList photos={photosData} addToFave={addToFave} />
  </div>
);

App.propTypes = {
  photosData: PropTypes.array.isRequired,
  addToFave: PropTypes.func.isRequired
};

export default App;
