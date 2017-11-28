import React from 'react';
import PropTypes from 'prop-types';
import App from './App';
// import PhotoList from './PhotoList';
// import FaveList from './FaveList';

// Redux
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class AppContainer extends React.Component {
  componentDidMount () {
    this.props.fetchPhotos();
  }

  render () {
    return (
      <App
        photosData={this.props.photosData}
        favouritesData={this.props.favouritesData}
        addToFave={this.props.addToFave}
      />
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPhotos: () => {
      dispatch(actions.fetchPhotos());
    },
    addToFave: input => {
      dispatch(actions.addToFavourites(input));
    }
  };
}

function mapStateToProps (state) {
  return {
    photosData: state.photos.data,
    favouritesData: state.photos.favourites,
    loading: state.loading
  };
}

AppContainer.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  photosData: PropTypes.array.isRequired,
  favouritesData: PropTypes.array.isRequired,
  addToFave: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
