import React, { Component } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';
// import Projects from './components/Projects/Projects';
// import TestContainer from './containers/TestContainer';

class App extends Component {
  state = {
    isClicked: false,
    showDiv: false
  }

  handleInitialClick(){
    this.setState({
      isClicked: true
    })
    setTimeout(function() {
        this.setState({showDiv: true})
    }.bind(this), 1700)
  }

  render(){
    return (
      <div>
        <div style={this.state.showDiv ? { display: `none` } : {}}>
          <WelcomePage isClicked = {this.state.isClicked} handleClick = {() => this.handleInitialClick()}/>
        </div>
        <div style={this.state.showDiv ? {} : { display: `none` }}>
          <NavBar />
          <AboutMe />
        </div>
      </div>
    )
  }

}

export default App;
