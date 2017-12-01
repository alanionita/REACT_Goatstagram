import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import _ from 'underscore';
import combinedReducer from './reducers/index';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    combinedReducer,
    persistedState,
    applyMiddleware(thunk, logger)
  );

  store.subscribe(
    _.throttle(() => {
      saveState(store.getState());
    }, 1000)
  );

  return store;
};

export default configureStore;
