import reducer from './photos.reducer';
import { initialState } from './photos.reducer';
import * as actions from '../actions/actions';

describe('PHOTOS REDUCER', () => {
  test('is a function', () => {
    expect(typeof reducer).toBe('function');
  });
  describe('fetchPhotos', () => {
    const action = actions.fetchPhotosSuccess({
      photos: {
        photo: [
          {
            id: '1',
            title: 'Stretching for food',
            url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
          },
          {
            id: '2',
            title: 'Yoga',
            url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
          }
        ]
      }
    });
    test('adds a collection of photos to the new state', () => {
      const newState = reducer(initialState, action);
      expect(Array.isArray(newState.data)).toBe(true);
      expect(newState.data).toEqual([
        {
          id: '1',
          title: 'Stretching for food',
          url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        },
        {
          id: '2',
          title: 'Yoga',
          url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        }
      ]);
    });
    test('changes the loading property in the new state', () => {
      const action = actions.fetchPhotosRequest();
      const newState = reducer(initialState, action);
      expect(newState.loading).toBe(true);
    });
    test('returns the error if it fails', () => {
      const action = actions.fetchPhotosFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).toEqual('error');
    });
  });
  describe('addToFavourites', () => {
    const rootAction = actions.fetchPhotosSuccess({
      photos: {
        photo: [
          {
            id: '1',
            title: 'Stretching for food',
            url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
          },
          {
            id: '2',
            title: 'Yoga',
            url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
          }
        ]
      }
    });
    const prevState = reducer(initialState, rootAction);
    const input = {
      id: '1',
      title: 'Stretching for food',
      url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
    };
    test('removes photo from state', () => {
      expect(prevState.data.length).toBe(2);
      const action = actions.addToFavourites(input);
      const newState = reducer(prevState, action);
      expect(newState.data).toEqual([
        {
          id: '2',
          title: 'Yoga',
          url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        }
      ]);
      expect(newState.data.length).toBe(1);
    });
    test('adds a photo to favourites', () => {
      const action = actions.addToFavourites(input);
      const newState = reducer(prevState, action);
      expect(newState.data).toEqual([
        {
          id: '2',
          title: 'Yoga',
          url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        }
      ]);
      expect(newState.data.length).toBe(1);
      expect(newState.favourites.length).toBe(1);
      expect(newState.favourites).toEqual([
        {
          id: '1',
          title: 'Stretching for food',
          url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        }
      ]);
    });
  });
  describe('removeFromFavourites', () => {
    const rootAction = actions.fetchPhotosSuccess({
      photos: {
        photo: [
          {
            id: '1',
            title: 'Stretching for food',
            url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
          },
          {
            id: '2',
            title: 'Yoga',
            url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
          }
        ]
      }
    });
    const prevState = reducer(initialState, rootAction);
    const input = {
      id: '1',
      title: 'Stretching for food',
      url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
    };
    const action = actions.addToFavourites(input);
    const newState = reducer(prevState, action);
    expect(newState.data).toEqual([
      {
        id: '2',
        title: 'Yoga',
        url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
      }
    ]);
    expect(newState.data.length).toBe(1);
    expect(newState.favourites.length).toBe(1);
    expect(newState.favourites).toEqual([
      {
        id: '1',
        title: 'Stretching for food',
        url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
      }
    ]);
    test('removes photo from favourites', () => {
      const input = {
        id: '1',
        title: 'Stretching for food',
        url_m: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
      };
      const action = actions.removeFromFavourites(input);
      const newState = reducer(prevState, action);
      expect(newState.favourites.length).toBe(0);
    });
    test('adds photo to state', () => {
      const input = {
        id: '1',
        title: 'Stretching for food',
        link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
      };
      const action = actions.removeFromFavourites(input);
      const newState = reducer(prevState, action);
      expect(newState.favourites.length).toBe(0);
      expect(newState.data.length).toBe(3);
    });
  });
});
