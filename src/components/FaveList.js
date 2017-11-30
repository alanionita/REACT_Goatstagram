import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'node-uuid';

// Components
import PhotoCardMini from './PhotoCardMini';

const FaveList = ({ photos, removeFromFave }) =>
  photos.favourites.length === 0 ? (
    <h2>No favourites here!</h2>
  ) : (
    <section className="FaveList">
      <div className="container">
        <div className="columns is-multiline is-centered">
          {photos.favourites.map(photo => {
            return (
              <PhotoCardMini
                title={photo.title}
                link={photo.url_m}
                views={photo.views}
                key={`${v4()}${photo.id}`}
                onClick={() => removeFromFave(photo)}
                isFave={true}
              />
            );
          })}
        </div>
      </div>
    </section>
  );

FaveList.propTypes = {
  photos: PropTypes.object.isRequired,
  removeFromFave: PropTypes.func.isRequired
};

export default FaveList;
