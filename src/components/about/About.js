import React, { Component } from 'react';
import './About.css';

export class About extends Component {
  render() {
    return (
      <div className={this.props.showAbout ? 'About showAbout' : 'About hideAbout'}>
        <h1>About</h1>
      </div>
    )
  }
}

export default About;
