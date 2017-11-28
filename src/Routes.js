import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import AppContainer from './components/AppContainer';
import PhotoList from './components/PhotoList';
import FaveList from './components/FaveList';
const history = createBrowserHistory();

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
        <Switch>
          <Route path="/" exact={true} component={AppContainer} />
          <Route path="/all" component={PhotoList} />
          <Route path="/favourites" component={FaveList} />
        </Switch>
    </Router>
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired
};

export default Routes;
