import * as types from './types';
import axios from 'axios';

const API_URL =
  'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ca19a0ef7ff00d5aa27bc7916e83540&user_id=&tags=animals&text=goats&sort=relevance&safe_search=&content_type=1&place_id=&media=&extras=url_m%2C+views&format=json&nojsoncallback=1';

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
