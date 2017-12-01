import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Header from './Header';
import Nav from './Nav';
import PhotoList from './PhotoList';

const App = ({ photosData, addToFave, removeFromFave }) => (
  <main className="App">
    <Header />
    <Nav />
    <Switch>
      <Route
        path="/"
        exact={true}
        render={() => (
          <PhotoList photos={photosData.data} faveFunc={addToFave} path={'/'} />
        )}
      />
      <Route
        path="/favourites"
        exact={true}
        render={() => (
          <PhotoList
            photos={photosData.favourites}
            faveFunc={removeFromFave}
            path={'/favourites'}
          />
        )}
      />
    </Switch>
  </main>
);

App.propTypes = {
  photosData: PropTypes.object.isRequired,
  addToFave: PropTypes.func.isRequired,
  removeFromFave: PropTypes.func.isRequired
};

export default App;
