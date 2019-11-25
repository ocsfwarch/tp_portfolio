import React, { Component } from 'react';
import './Projects.css';

export class Projects extends Component {
  render() {
    return (
      <div className={this.props.showProjects ? 'Projects showProjects' : 'Projects hideProjects'}>
        <h1>Projects</h1>
      </div>
    )
  }
}

export default Projects;
