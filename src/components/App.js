import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Header from './Header';
import Nav from './Nav';

const App = ({ children }) => (
  <main className="App">
    <Header/>
    <Nav/>
    {children}
  </main>
);

App.propTypes = {
  children: PropTypes.array
};

export default App;
