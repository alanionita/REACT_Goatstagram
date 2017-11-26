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
});
