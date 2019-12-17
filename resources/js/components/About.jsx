import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <div>Click <Link to="/">here</Link> to go to home page.</div>
        <div>Click <Link to="/about">here</Link> to go to about page.</div>
        <h2>Hi, I am a About Component!</h2>
      </div>
    );
  }
}

export default About;
