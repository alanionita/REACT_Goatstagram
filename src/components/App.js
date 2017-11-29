import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Header from './Header';
import Nav from './Nav';
import PhotoList from './PhotoList';
import FaveList from './FaveList';

const App = ({ photosData, addToFave }) => (
  <main className="App">
    <Header />
    <Nav />
    <Switch>
      <Route
        path="/"
        exact={true}
        render={() => <PhotoList photos={photosData} addToFave={addToFave} />}
      />
      <Route
        path="/favourites"
        exact={true}
        render={() => <FaveList photos={photosData} addToFave={addToFave} />}
      />
    </Switch>
  </main>
);

App.propTypes = {
  photosData: PropTypes.object.isRequired,
  addToFave: PropTypes.func.isRequired
};

export default App;
