import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

import * as actions from './actions';
import * as types from './types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('PHOTOS ACTIONS', () => {
  describe('fetchPhotosRequest', () => {
    test('returns \'FETCH PHOTOS REQUEST\'', () => {
      expect(actions.fetchPhotosRequest()).toEqual({
        type: 'FETCH PHOTOS REQUEST'
      });
    });
  });
  describe('fetchPhotosSuccess', () => {
    test('returns \'FETCH PHOTOS SUCCESS\' and payload', () => {
      const input = {
        items: [
          {
            title: 'Stretching for food',
            link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
          }
        ]
      };
      expect(actions.fetchPhotosSuccess(input)).toEqual({
        type: 'FETCH PHOTOS SUCCESS',
        payload: input
      });
    });
  });
  describe('fetchPhotosFailed ', () => {
    test('returns \'FETCH PHOTOS FAILED\' and payload', () => {
      const err = {
        err: 'I am an error!'
      };
      expect(actions.fetchPhotosFailed(err)).toEqual({
        type: 'FETCH PHOTOS FAILED',
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
    test('returns correct series of actions and payload if succesful', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            items: [
              {
                title: 'Stretching for food',
                link:
                  'https://www.flickr.com/photos/vassilisonline/38593667296/'
              }
            ]
          }
        });
      });

      const store = mockStore({
        items: [
          {
            title: 'Stretching for food',
            link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
          }
        ]
      });

      const expectedActions = [
        { type: types.FETCH_PHOTOS_REQUEST },
        {
          type: types.FETCH_PHOTOS_SUCCESS,
          payload: {
            items: [
              {
                title: 'Stretching for food',
                link:
                  'https://www.flickr.com/photos/vassilisonline/38593667296/'
              }
            ]
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
      id: '1',
      title: 'Stretching for food',
      link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
    };
    expect(actions.addToFavourites(input)).toEqual({
      type: 'ADD TO FAVOURITES',
      payload: input
    });
  });
  describe('removeFromFavourites', () => {
    const input = {
      id: '1',
      title: 'Stretching for food',
      link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
    };
    expect(actions.removeFromFavourites(input)).toEqual({
      type: 'REMOVE FROM FAVOURITES',
      payload: input
    });
  });
});
