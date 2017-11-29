import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'node-uuid';

// Components
import PhotoCardMini from './PhotoCardMini';

const FaveList = ({ photos, addToFave }) =>
  photos.favourites.length === 0 ? (
    <p>No favourites here!</p>
  ) : (
    <section className="PhotoList">
      <div className="container">
        <div className="columns is-multiline is-centered">
          {photos.favourites.map(photo => {
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

FaveList.propTypes = {
  photos: PropTypes.object.isRequired,
  addToFave: PropTypes.func.isRequired
};

export default FaveList;
