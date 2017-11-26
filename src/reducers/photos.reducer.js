import * as types from '../actions/types';

export const initialState = {
  data: [],
  error: null,
  loading: false
};

function reducer (prevState = initialState, action = {}) {
  if (!action) return prevState;

  if (action.type === types.FETCH_PHOTOS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_PHOTOS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = newState.data.concat(action.payload);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_PHOTOS_FAILED) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.data = [];
    newState.loading = false;
    return newState;
  }

  return prevState;
}

export default reducer;
