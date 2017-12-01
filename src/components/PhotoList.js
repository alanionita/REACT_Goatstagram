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
    return (
      <section className="PhotoList">
        <div className="container">
          <div className="columns is-multiline is-centered">
            {this.props.photos.data.map(
              photo =>
                !photo.url_m ? null : (
                  <PhotoCardMini
                    title={photo.title}
                    link={photo.url_m}
                    views={photo.views}
                    key={`${v4()}${photo.id}`}
                    onClick={() => this.props.addToFave(photo)}
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
  photos: PropTypes.object.isRequired,
  addToFave: PropTypes.func.isRequired
};

export default PhotoList;
