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
    newState.data = action.payload.photos.photo.filter(
      photosElem =>
        newState.favourites.filter(favElem => favElem.id == photosElem.id)
          .length == 0
    );
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
    newState.data = prevState.data.filter(
      item => (action.payload.id !== item.id ? item : null)
    );
    return newState;
  }

  if (action.type === types.REMOVE_FROM_FAVOURITES) {
    const newState = Object.assign({}, prevState);
    newState.favourites = prevState.favourites.filter(
      item => (action.payload.id !== item.id ? item : null)
    );
    newState.data = prevState.data.concat(action.payload);
    return newState;
  }

  return prevState;
}

export default reducer;
