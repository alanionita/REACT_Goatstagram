import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// REDUX
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combinedReducer from './reducers/index';

// CSS
import './css/bulma.css';

// COMPONENTS
import Root from './Root';

const store = createStore(combinedReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();


