import reducer from './photos.reducer';
import { initialState } from './photos.reducer';
import * as actions from '../actions/actions';

describe('PHOTOS REDUCER', () => {
  test('is a function', () => {
    expect(typeof reducer).toBe('function');
  });
  describe('fetchPhotos', () => {
    test('adds a collection of photos to an empty state', () => {
      const action = actions.fetchPhotosSuccess({
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
      });
      const newState = reducer(initialState, action);
      expect(Array.isArray(newState.data)).toBe(true);
      expect(newState.data).toEqual([
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
          url_m: 'https://farm6.staticflickr.com/5502/9117768351_a1121f1791.jpg'
        }
      ]);
      expect(newState).not.toMatchObject(initialState);
    });
    test('changes the loading property in the new state', () => {
      const action = actions.fetchPhotosRequest();
      const newState = reducer(initialState, action);
      expect(newState.loading).toBe(true);
      expect(newState).not.toMatchObject(initialState);
    });
    test('returns the error if it fails', () => {
      const action = actions.fetchPhotosFailed('error');
      const newState = reducer(initialState, action);
      expect(newState.error).toEqual('error');
      expect(newState).not.toMatchObject(initialState);
    });
    test('will not add copies to existing state', () => {
      const prevState = {
        data: [
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
        ],
        favourites: [],
        error: null,
        loading: false
      };
      const action = actions.fetchPhotosSuccess({
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
      });
      const newState = reducer(prevState, action);
      expect(Array.isArray(newState.data)).toBe(true);
      expect(newState.data).toEqual([
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
          url_m: 'https://farm6.staticflickr.com/5502/9117768351_a1121f1791.jpg'
        }
      ]);
      expect(newState.data.length).toBe(2);
      expect(newState).not.toMatchObject(initialState);
    });
    test('will not add add favourites to photos', () => {
      const prevState = {
        data: [
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
        ],
        favourites: [
          {
            id: '2746155554',
            title: 'goat',
            views: '4666',
            url_m:
              'https://farm4.staticflickr.com/3184/2746155554_0ea35488f3.jpg'
          }
        ],
        error: null,
        loading: false
      };
      const action = actions.fetchPhotosSuccess({
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
            },
            {
              id: '2746155554',
              title: 'goat',
              views: '4666',
              url_m:
                'https://farm4.staticflickr.com/3184/2746155554_0ea35488f3.jpg'
            }
          ]
        }
      });
      const newState = reducer(prevState, action);
      expect(Array.isArray(newState.data)).toBe(true);
      expect(newState.data).toEqual([
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
          url_m: 'https://farm6.staticflickr.com/5502/9117768351_a1121f1791.jpg'
        }
      ]);
      expect(newState.data.length).toBe(2);
      expect(newState.favourites.length).toBe(1);
      expect(newState).not.toMatchObject(initialState);
    });
  });
  describe('addToFavourites', () => {
    const rootAction = actions.fetchPhotosSuccess({
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
    });
    const prevState = reducer(initialState, rootAction);
    const input = {
      id: '9117768351',
      title: 'Goat (1)',
      views: '10267',
      url_m: 'https://farm6.staticflickr.com/5502/9117768351_a1121f1791.jpg'
    };
    test('removes photo from state', () => {
      expect(prevState.data.length).toBe(2);
      const action = actions.addToFavourites(input);
      const newState = reducer(prevState, action);
      expect(newState.data).toEqual([
        {
          id: '35057169673',
          title: 'GOAT',
          views: '1109',
          url_m:
            'https://farm5.staticflickr.com/4288/35057169673_7610627c7e.jpg'
        }
      ]);
      expect(newState.data.length).toBe(1);
    });
    test('adds a photo to favourites', () => {
      const action = actions.addToFavourites(input);
      const newState = reducer(prevState, action);
      expect(newState.data).toEqual([
        {
          id: '35057169673',
          title: 'GOAT',
          views: '1109',
          url_m:
            'https://farm5.staticflickr.com/4288/35057169673_7610627c7e.jpg'
        }
      ]);
      expect(newState.data.length).toBe(1);
      expect(newState.favourites.length).toBe(1);
      expect(newState.favourites).toEqual([input]);
    });
  });
  describe('removeFromFavourites', () => {
    const rootAction = actions.fetchPhotosSuccess({
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
    });
    const prevState = reducer(initialState, rootAction);
    const input = {
      id: '35057169673',
      title: 'GOAT',
      views: '1109',
      url_m: 'https://farm5.staticflickr.com/4288/35057169673_7610627c7e.jpg'
    };
    const action = actions.addToFavourites(input);
    const newState = reducer(prevState, action);
    expect(newState.data).toEqual([
      {
        id: '9117768351',
        title: 'Goat (1)',
        views: '10267',
        url_m: 'https://farm6.staticflickr.com/5502/9117768351_a1121f1791.jpg'
      }
    ]);
    expect(newState.data.length).toBe(1);
    expect(newState.favourites.length).toBe(1);
    expect(newState.favourites).toEqual([
      {
        id: '35057169673',
        title: 'GOAT',
        views: '1109',
        url_m: 'https://farm5.staticflickr.com/4288/35057169673_7610627c7e.jpg'
      }
    ]);
    test('removes photo from favourites', () => {
      const input = {
        id: '35057169673',
        title: 'GOAT',
        views: '1109',
        url_m: 'https://farm5.staticflickr.com/4288/35057169673_7610627c7e.jpg'
      };
      const action = actions.removeFromFavourites(input);
      const newState = reducer(prevState, action);
      expect(newState.favourites.length).toBe(0);
    });
    test('adds photo to state', () => {
      const input = {
        id: '35057169673',
        title: 'GOAT',
        views: '1109',
        url_m: 'https://farm5.staticflickr.com/4288/35057169673_7610627c7e.jpg'
      };
      const action = actions.removeFromFavourites(input);
      const newState = reducer(prevState, action);
      expect(newState.favourites.length).toBe(0);
      expect(newState.data.length).toBe(3);
    });
  });
});
