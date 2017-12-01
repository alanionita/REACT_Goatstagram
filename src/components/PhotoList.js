import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'node-uuid';
import Spinner from 'react-spinkit';

// Components
import PhotoCardMini from './PhotoCardMini';

class PhotoList extends React.Component {
  componentWillMount () {
    document.title = 'Home | Goatstagram';
  }

  render () {
    return this.props.photos.length === 0 ? (
      this.props.path === '/favourites' ? (
        <section className="hero is-medium">
          <p className="subtitle has-text-centered">
            {'Oh no, you haven\'t favourited any goats yet!'}
          </p>
        </section>
      ) : (
        <div className="container">
          <div className="columns is-multiline is-mobile is-centered">
            <div className="column is-four-fifths-mobile is-two-fifths-tablet is-one-third-desktop">
              <Spinner name="pacman" color="#60C320" />
            </div>
          </div>
        </div>
      )
    ) : (
      <section className="PhotoList">
        <div className="container">
          <div className="columns is-multiline is-mobile is-centered">
            {this.props.photos.map(
              photo =>
                !photo.url_m ? null : (
                  <PhotoCardMini
                    title={photo.title}
                    link={photo.url_m}
                    views={photo.views}
                    key={`${v4()}${photo.id}`}
                    onClick={() => this.props.faveFunc(photo)}
                    path={this.props.path}
                  />
                )
            )}
          </div>
        </div>
      </section>
    );
  }
}

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  faveFunc: PropTypes.func.isRequired
};

export default PhotoList;
