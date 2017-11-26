import * as actions from './actions';

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
                title:'Stretching for food',
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
});
