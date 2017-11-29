import {combineReducers} from 'redux';
import photosReducer from './photos.reducer.js';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  photos: photosReducer,
  routing: routerReducer,
});
