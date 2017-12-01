import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

import * as actions from './actions';
import * as types from './types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('PHOTOS ACTIONS', () => {
  describe('fetchPhotosRequest', () => {
    test('returns \'FETCH_PHOTOS_REQUEST\'', () => {
      expect(actions.fetchPhotosRequest()).toEqual({
        type: 'FETCH_PHOTOS_REQUEST'
      });
    });
  });
  describe('fetchPhotosSuccess', () => {
    test('returns \'FETCH_PHOTOS_SUCCESS\' and payload', () => {
      const input = {
        photos: {
          photo: [
            {
              id: '35057169673',
              title: 'GOAT',
              views: '1109',
              url_m:
                'https://farm5.staticflickr.com/4288/35057169673_7610627c7e.jpg'
            },
            {
              id: '9117768351',
              title: 'Goat (1)',
              views: '10267',
              url_m:
                'https://farm6.staticflickr.com/5502/9117768351_a1121f1791.jpg'
            }
          ]
        }
      };
      expect(actions.fetchPhotosSuccess(input)).toEqual({
        type: 'FETCH_PHOTOS_SUCCESS',
        payload: input
      });
    });
  });
  describe('fetchPhotosFailed ', () => {
    test('returns \'FETCH_PHOTOS_FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.fetchPhotosFailed(err)).toEqual({
        type: 'FETCH_PHOTOS_FAILED',
        payload: err
      });
    });
  });
  describe('fetchPhotos ASYNC', () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall;
    });
    test('adds payload to an empty store', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            photos: {
              photo: [
                {
                  id: '35057169673',
                  title: 'GOAT',
                  views: '1109',
                  url_m:
                    'https://farm5.staticflickr.com/4288/35057169673_7610627c7e.jpg'
                },
                {
                  id: '9117768351',
                  title: 'Goat (1)',
                  views: '10267',
                  url_m:
                    'https://farm6.staticflickr.com/5502/9117768351_a1121f1791.jpg'
                }
              ]
            }
          }
        });
      });

      const store = mockStore({
        items: []
      });

      const expectedActions = [
        { type: types.FETCH_PHOTOS_REQUEST },
        {
          type: types.FETCH_PHOTOS_SUCCESS,
          payload: {
            photos: {
              photo: [
                {
                  id: '35057169673',
                  title: 'GOAT',
                  views: '1109',
                  url_m:
                    'https://farm5.staticflickr.com/4288/35057169673_7610627c7e.jpg'
                },
                {
                  id: '9117768351',
                  title: 'Goat (1)',
                  views: '10267',
                  url_m:
                    'https://farm6.staticflickr.com/5502/9117768351_a1121f1791.jpg'
                }
              ]
            }
          }
        }
      ];
      return store.dispatch(actions.fetchPhotos()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
  describe('addToFavourites', () => {
    const input = {
      id: '35057169673',
      title: 'GOAT',
      views: '1109',
      url_m: 'https://farm5.staticflickr.com/4288/35057169673_7610627c7e.jpg'
    };
    expect(actions.addToFavourites(input)).toEqual({
      type: 'ADD_TO_FAVOURITES',
      payload: input
    });
  });
  describe('removeFromFavourites', () => {
    const input = {
      id: '35057169673',
      title: 'GOAT',
      views: '1109',
      url_m: 'https://farm5.staticflickr.com/4288/35057169673_7610627c7e.jpg'
    };
    expect(actions.removeFromFavourites(input)).toEqual({
      type: 'REMOVE_FROM_FAVOURITES',
      payload: input
    });
  });
});
