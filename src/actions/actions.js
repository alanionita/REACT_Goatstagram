import * as types from './types';
import axios from 'axios';

const API_URL =
  'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=nameOfCallback&tags=goats';

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
      .get(`${API_URL}`)
      .then(res => {
        dispatch(fetchPhotosSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchPhotosFailed(err));
      });
  };
}
