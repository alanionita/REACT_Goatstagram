# AO.com Tech Challenge 

My own interpretation of the AO.com challenge found in task.md.

![screencast of the app](http://# "App screencast")

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

#### node.js

node.js must be installed on your machine (any versions will work; v7.10.0 was used for this project)

```
$ node -v // v7.10.0
```

To install node follow this guide -  https://nodejs.org/en/download/package-manager/#osx

#### npm

npm is required (any versions will work; v4.2.0 was used for this project)

```
$ npm -v // 4.2.0
```

To install npm follow this guide - https://docs.npmjs.com/getting-started/installing-node

#### Flickr API 

The API is called using axios via an async Redux action. I'm mainly using the flickr.photos.search with a signed request that asks for:
- tags: aminals, goats
- sorted by relevance
- only pictures
- medium size photo url (url_m)
- views for that photo

### Install

Create a new folder on your machine and clone / fork + clone the repo. 

Open terminal and navigate to the folder storing the code

Install all of the required packages using npm

```
$ npm i  
```

### Start the app

The app was built using the create-react-app for easier deployment.

To start the app run the start script

```
$ npm start
```

## Running the tests

The tests are built using Jest and moxios for mocking requests.

To run the tests, type the following command in your terminal anywhere withing the project folder

```
$ npm t
```

The test available: 
- all Redux actions
- photos.reducer.test

### Actions Testing patterns

fetchCommentsRequest() SYNC action

```javascript
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
```

fetchComments() ASYNC action

```javascript
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
```

### Reducers Testing patterns

fetchArticleById() article.reducer.js

```javascript
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
    ...
});
```

### React Testing

I broke up the components into small components of two types:
- presentational: render data to html
- container: fetches data and manages state

## File Structure


## Styling

Initially used bulma.io (a CSS framework).

## Built With

### Dependencies
* [Prop-types](https://www.npmjs.com/package/prop-types) - React prop type validation
* [React](https://www.npmjs.com/package/react) - JS library for building UIs
* [React DOM](https://www.npmjs.com/package/react-dom) - React package for working with the DOM
* [React Redux](https://www.npmjs.com/package/react-redux) - React bindings for Redux
* [React Router DOM](https://www.npmjs.com/package/react-router-dom) - DOM bindings for React Router v4
* [React Router Redux](https://www.npmjs.com/package/react-router-redux) - Redux bindings for React Router
* [React Spinkit](https://www.npmjs.com/package/react-spinkit) - A collection of loading indicators animated with CSS for React
* [Redux](https://www.npmjs.com/package/redux) - State container for React Apps
* [Redux Logger](https://www.npmjs.com/package/redux-logger) - Logger for Redux
* [Redux Form](https://redux-form.com) - A better way to manage your form state in Redux

### Dev Dependencies
* [Husky](https://github.com/typicode/husky) - Git hooks made easy, used to chain linting and tests before commits
* [Jest](https://facebook.github.io/jest/) - Javascript Testing solution
* [ESLint + JSX, React, Jest plugins](http://eslint.org) - Linting utility
* [Prettier](https://www.npmjs.com/package/prettier) - Code formater, used to enforce linting at save
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [Moxiox](https://www.npmjs.com/package/moxios) - Mock axios requests for testing
* [Redux Mock Store](https://www.npmjs.com/package/redux-mock-store) - Mock store for testing Redux
* [Redux Thunk](https://www.npmjs.com/package/redux-thunk) - Redux thunk middleware


## Authors

* **Alan Ionita** - https://github.com/alanionita

## Acknowledgments

React, Redux, and the magical webpack 🙌