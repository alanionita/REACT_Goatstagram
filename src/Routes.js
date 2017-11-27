import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import AppContainer from './components/AppContainer';
import App from './components/App';
import PhotoList from './components/PhotoList';
import FaveList from './components/FaveList';
const history = createBrowserHistory();

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <AppContainer>
        <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/all" exact={true} component={PhotoList} />
          <Route path="/favourites" exact={true} component={FaveList} />
        </Switch>
      </AppContainer>
    </Router>
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired
};

export default Routes;
