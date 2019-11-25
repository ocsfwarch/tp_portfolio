import React, { Component } from 'react';
import './Content.css';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';

export class Content extends Component {
  render() {
    return (
      <div className="content">
        <About showAbout={this.props.showAbout} />
        <Contact showContact={this.props.showContact} />
        <Projects showProjects={this.props.showProjects} />
     </div>
    )
  }
}

export default Content;
