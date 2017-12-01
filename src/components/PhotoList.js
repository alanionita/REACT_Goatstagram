import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'node-uuid';

// Components
import PhotoCardMini from './PhotoCardMini';

class PhotoList extends React.Component {
  componentWillMount () {
    document.title = 'Home | Goatstagram';
  }

  render () {
    return this.props.photos.length === 0 ? (
      this.props.path === '/favourites' ? (
        <h2>No favourites here!</h2>
      ) : (
        <h2>No photos available</h2>
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
