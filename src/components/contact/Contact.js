import React, { Component } from 'react';
import './Contact.css';

export class Contact extends Component {
  render() {
    return (
      <div className={this.props.showContact ? 'Contact showContact' : 'Contact hideContact'}>
        <h1>Contact</h1>
      </div>
    )
  }
}

export default Contact;
