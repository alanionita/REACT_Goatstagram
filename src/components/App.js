import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Header from './Header';
import Nav from './Nav';
import PhotoList from './PhotoList';

const App = ({ photosData, addToFave }) => (
  <main className="App">
    <Header />
    <Nav />
    <PhotoList photos={photosData} addToFave={addToFave}/>
  </main>
);

App.propTypes = {
  photosData: PropTypes.array.isRequired,
  addToFave: PropTypes.func.isRequired
};

export default App;
