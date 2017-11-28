import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'node-uuid';

// Components
import PhotoCardMini from './PhotoCardMini';

const PhotoList = ({ photos, addToFave }) => (
  <section className="PhotoList">
    <div className="container">
      <div className="columns is-multiline is-centered">
        {photos.map(photo => {
          return (
            <PhotoCardMini
              title={photo.title}
              link={photo.url_m}
              key={`${v4()}${photo.id}`}
              onClick={() => addToFave(photo)}
            />
          );
        })}
      </div>
    </div>
  </section>
);

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  addToFave: PropTypes.func.isRequired
};

export default PhotoList;
