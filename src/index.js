import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// REDUX
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combinedReducer from './reducers/index';
import { loadState, saveState } from './localStorage';

// CSS
import './css/bulma.css';

// COMPONENTS
import Routes from './Routes';

const persistedState = loadState();
const store = createStore(
  combinedReducer,
  persistedState,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(<Routes store={store} />, document.getElementById('root'));
registerServiceWorker();
