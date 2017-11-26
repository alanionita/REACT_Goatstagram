import React from 'react';
import PropTypes from 'prop-types';

// Components
import PhotoCardMini from './PhotoCardMini';

const PhotoList = ({ photos }) => (
  <section className="PhotoList">
    <div className="container">
      <div className="columns is-multiline is-centered">
        {photos.map(photo => (
          <PhotoCardMini
            title={photo.title}
            link={photo.url_m}
            key={photo.id}
          />
        ))}
      </div>
    </div>
  </section>
);

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoList;
