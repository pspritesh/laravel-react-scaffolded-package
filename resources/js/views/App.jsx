import React, { Component } from 'react';
import ReactDOM, { Link } from 'react-dom';

class Home extends Component {
  render() {
    return (
      <div><Link to="/home">Click here to go to home page</Link></div>,
      <div><Link to="/about">Click here to go to about page</Link></div>
    );
  }
}

export default Home;
