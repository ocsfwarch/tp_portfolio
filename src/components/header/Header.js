import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  onChangeDisplay = (e) => {
    e.preventDefault();
    const nKey = e.target.id;
    if( typeof this.props.changeDisplay === 'function'){
        this.props.changeDisplay(nKey);
    }else{
        console.log(typeof this.props.changeDisplay);
    }
  }

  render() {
    return (
      <div className="header">
        <button id="about"    className="btn_std btn-about"    onClick={this.onChangeDisplay}>About</button>
        <button id="contact"  className="btn_std btn-contact"  onClick={this.onChangeDisplay}>Contact</button>
        <button id="projects" className="btn_std btn-projects" onClick={this.onChangeDisplay}>Projects</button>
      </div>
    )
  }
}

export default Header;
