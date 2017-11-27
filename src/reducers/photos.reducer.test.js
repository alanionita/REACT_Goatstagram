import reducer from './photos.reducer';
import { initialState } from './photos.reducer';
import * as actions from '../actions/actions';

describe('PHOTOS REDUCER', () => {
  test('is a function', () => {
    expect(typeof reducer).toBe('function');
  });
  describe('fetchPhotos', () => {
    test('adds a collection of photos to the new state', () => {
      const action = actions.fetchPhotosSuccess({
        photos: {
          photo: [{ '2': 2 }, { '1': 1 }]
        }
      });
      const newState = reducer(initialState, action);
      expect(Array.isArray(newState.data)).toBe(true);
      expect(newState.data).toEqual([{ '2': 2 }, { '1': 1 }]);
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
    test('removes photo from state', () => {
      const action = actions.fetchPhotosSuccess({
        photos: {
          photo: [
            {
              id: '1',
              title: 'Stretching for food',
              link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
            },
            {
              id: '2',
              title: 'Yoga',
              link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
            }
          ]
        }
      });
      let prevState = reducer(initialState, action);
      expect(Array.isArray(prevState.data)).toBe(true);
      expect(prevState.data.length).toBe(2);
      expect(prevState.data).toEqual([
        {
          id: '1',
          title: 'Stretching for food',
          link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        },
        {
          id: '2',
          title: 'Yoga',
          link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        }
      ]);
      const input = {
        id: '1',
        title: 'Stretching for food',
        link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
      };
      const action2 = actions.addToFavourites(input);
      const newState = reducer(prevState, action2);
      expect(newState.data).toEqual([
        {
          id: '2',
          title: 'Yoga',
          link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        }
      ]);
      expect(newState.data.length).toBe(1);
    });
    test('adds a photo to favourites', () => {
      const action = actions.fetchPhotosSuccess({
        photos: {
          photo: [
            {
              id: '1',
              title: 'Stretching for food',
              link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
            },
            {
              id: '2',
              title: 'Yoga',
              link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
            }
          ]
        }
      });
      let prevState = reducer(initialState, action);
      expect(Array.isArray(prevState.data)).toBe(true);
      expect(prevState.data.length).toBe(2);
      expect(prevState.data).toEqual([
        {
          id: '1',
          title: 'Stretching for food',
          link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        },
        {
          id: '2',
          title: 'Yoga',
          link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        }
      ]);
      const input = {
        id: '1',
        title: 'Stretching for food',
        link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
      };
      const action2 = actions.addToFavourites(input);
      const newState = reducer(prevState, action2);
      expect(newState.data).toEqual([
        {
          id: '2',
          title: 'Yoga',
          link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        }
      ]);
      expect(newState.data.length).toBe(1);
      expect(newState.favourites).toEqual([
        {
          id: '1',
          title: 'Stretching for food',
          link: 'https://www.flickr.com/photos/vassilisonline/38593667296/'
        }
      ]);
      expect(newState.favourites.length).toBe(1);
    });
  });
});
