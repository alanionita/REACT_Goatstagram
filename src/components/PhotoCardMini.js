import React from 'react';
import PropTypes from 'prop-types';

const PhotoCardMini = props => {
  const { title, link, onClick, views, path } = props;
  return (
    <section className="column is-four-fifths-mobile is-two-fifths-tablet is-one-third-desktop">
      <article className="card">
        <div className="level is-mobile" style={{ marginBottom: 0 }}>
          <div className="level-left">
            <h1 className="card-header-title level-item">
              {title.substring(0, 15).toLowerCase()}
            </h1>
          </div>
          <h3 className="level-item">{views} views</h3>
          <div className="level-right">
            <span
              className="card-header-title level-item"
              onClick={onClick}
              role="img"
              aria-label="heart emoji"
            >
              {path === '/favourites' ? (
                <i className="fa fa-heart" aria-hidden="true" />
              ) : (
                <i className="fa fa-heart-o" aria-hidden="true" />
              )}
            </span>
          </div>
        </div>
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={link} alt={title} style={{ objectFit: 'cover' }} />
          </figure>
        </div>
      </article>
    </section>
  );
};

PhotoCardMini.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

export default PhotoCardMini;
