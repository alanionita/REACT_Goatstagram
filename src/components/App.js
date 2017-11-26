import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="level is-mobile">
          <h1 className="level-item is-size-3">Goatstagram 🐐</h1>
        </header>
        <nav className="tabs is-centered">
          <ul>
            <li>
              <a>All images</a>
            </li>
            <li>
              <a>Favourites</a>
            </li>
          </ul>
        </nav>
        <section className="ArticleList">
          <div className="container">
            <div className="columns is-multiline is-centered">
              <div className="column is-three-fifths-mobile is-half-tablet is-one-third-desktop">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">Component</p>
                  </header>
                  <div className="card-image">
                    <figure className="image is-4by4">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column is-three-fifths-mobile is-half-tablet is-one-third-desktop">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">Component</p>
                  </header>
                  <div className="card-image">
                    <figure className="image is-4by4">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column is-three-fifths-mobile is-half-tablet is-one-third-desktop">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">Component</p>
                  </header>
                  <div className="card-image">
                    <figure className="image is-4by4">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
