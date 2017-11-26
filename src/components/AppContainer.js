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
    return <App photos={this.props.photos} />;
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPhotos: () => {
      dispatch(actions.fetchPhotos());
    }
  };
}

function mapStateToProps (state) {
  return {
    photosData: state.photos.data,
    loading: state.loading
  };
}

AppContainer.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  photosData: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
