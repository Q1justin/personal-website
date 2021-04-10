import React, { Component } from 'react';
import './App.css';
// import ContactBar from './components/Navigation/ContactBar/ContactBar';
import WelcomePage from './components/WelcomePage/WelcomePage';
// import AboutMe from './components/AboutMe/AboutMe';
// import Projects from './components/Projects/Projects';
// import TestContainer from './containers/TestContainer';
// import ScrollBar from './components/Navigation/ScrollBar/ScrollBar';

class App extends Component {
  render(){
    return (
      <div>
        <WelcomePage />
      </div>
    )
  }

}

export default App;
