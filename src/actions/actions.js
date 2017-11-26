import * as types from './types';

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