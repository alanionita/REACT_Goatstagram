import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'node-uuid';

// Components
import PhotoCardMini from './PhotoCardMini';

const PhotoList = ({ photos, addToFave }) => (
  <section className="PhotoList">
    <div className="container">
      <div className="columns is-multiline is-centered">
        {photos.data.map(photo => {
          return (
            <PhotoCardMini
              title={photo.title}
              link={photo.url_m}
              views={photo.views}
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
  photos: PropTypes.object.isRequired,
  addToFave: PropTypes.func.isRequired
};

export default PhotoList;
