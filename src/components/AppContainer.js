import React from 'react';
import PropTypes from 'prop-types';
import App from './App';

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
        addToFave={this.props.addToFave}
        removeFromFave={this.props.removeFromFave}
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
    },
    removeFromFave: input => {
      dispatch(actions.removeFromFavourites(input));
    }
  };
}

function mapStateToProps (state) {
  return {
    photosData: state.photos,
    loading: state.loading
  };
}

AppContainer.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  photosData: PropTypes.object.isRequired,
  addToFave: PropTypes.func.isRequired,
  removeFromFave: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
