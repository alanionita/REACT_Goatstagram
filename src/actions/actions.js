import * as types from './types';
import axios from 'axios';

export function fetchPhotosRequest () {
  return {
    type: types.FETCH_PHOTOS_REQUEST
  };
}

export function fetchPhotosSuccess (photos) {
  return {
    type: types.FETCH_PHOTOS_SUCCESS,
    payload: photos
  };
}

export function fetchPhotosFailed (err) {
  return {
    type: types.FETCH_PHOTOS_FAILED,
    payload: err
  };
}

export function fetchPhotos () {
  return function (dispatch) {
    dispatch(fetchPhotosRequest());
    return axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then(res => {
        dispatch(fetchPhotosSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchPhotosFailed(err));
      });
  };
}

export function addToFavourites (item) {
  return {
    type: types.ADD_TO_FAVOURITES,
    payload: item
  };
}
