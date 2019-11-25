import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';

export class App extends Component {
  state = {
    showAbout:true,
    showContact:false,
    showProjects:false
  }

  changeDisplay = (val) => {
    if(val === "about"){
      this.setState({
        showAbout:true,
        showContact:false,
        showProjects:false
      });
    }
    else if(val === "contact"){
      this.setState({
        showAbout:false,
        showContact:true,
        showProjects:false
      });
    }
    else if(val === "projects"){
      this.setState({
        showAbout:false,
        showContact:false,
        showProjects:true
      });
    }

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header changeDisplay={this.changeDisplay} />
          <Content showAbout={this.state.showAbout} showContact={this.state.showContact} showProjects={this.state.showProjects} />
        </div>
      </Router>
    )
  }
}

export default App;
