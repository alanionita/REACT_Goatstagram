import React from 'react';
import PropTypes from 'prop-types';


const PhotoCardMini = props => {
  const { title, link } = props;
  return (
    <div className="column is-three-fifths-mobile is-half-tablet is-one-third-desktop">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
        </header>
        <div
          className="card-image"
        >
          <figure className="image is-1by1">
            <img src={link} alt={title} style={{objectFit:'cover'}}/>
          </figure>
        </div>
      </div>
    </div>
  );
};

PhotoCardMini.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default PhotoCardMini;
