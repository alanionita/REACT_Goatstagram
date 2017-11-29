import * as types from '../actions/types';

export const initialState = {
  data: [],
  favourites: [],
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
    newState.data = newState.data.concat(action.payload.photos.photo);
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

  if (action.type === types.ADD_TO_FAVOURITES) {
    const newState = Object.assign({}, prevState);
    newState.favourites = prevState.favourites.concat(action.payload);
    newState.data = prevState.data.filter(item => {
      if (action.payload.id !== item.id) return item;
      return null;
    });
    return newState;
  }

  if (action.type === types.REMOVE_FROM_FAVOURITES) {
    const newState = Object.assign({}, prevState);
    newState.favourites = prevState.favourites.filter(item => {
      if (action.payload.id !== item.id) return item;
      return null;
    });
    newState.data = prevState.data.concat(action.payload);
    return newState;
  }

  return prevState;
}

export default reducer;
