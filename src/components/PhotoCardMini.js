import React from 'react';
import PropTypes from 'prop-types';

const PhotoCardMini = props => {
  const { title, link, onClick } = props;
  return (
    <div className="column is-three-fifths-mobile is-half-tablet is-one-third-desktop">
      <div className="card">
        <header className="level is-mobile">
          <div className="level-left">
            <p className="card-header-title level-item">{title}</p>
          </div>
          <div className="level-right">
            <figure className="card-header-title level-item" onClick={onClick}>
              <span onClick={onClick} role="img" aria-label="heart emoji">
                ❤️
              </span>
            </figure>
          </div>
        </header>
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={link} alt={title} style={{ objectFit: 'cover' }} />
          </figure>
        </div>
      </div>
    </div>
  );
};

PhotoCardMini.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PhotoCardMini;
