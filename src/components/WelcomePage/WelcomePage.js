import React, {Component} from 'react';
import classes from './WelcomePage.module.css';

class welcomePage extends Component{
  state = {
    isClicked: false,
    showDiv: false
  }

  handleClick(){
    this.setState({
      isClicked: true
    })
    setTimeout(function() { //Start the timer
        this.setState({showDiv: true}) //After 1 second, set render to true
    }.bind(this), 2000)
  }

  render(){
    return (
      <section className = {classes.home}>
        <div className = {classes.welcomeText} style={this.state.isClicked ? { transform: `translate(200%)` } : {}}>
          <h1>Hi, My Name Is Gyuwon Do</h1>
          <h2>안녕하세요, 도규원입니다</h2>
        </div>
        <div className={classes.buttonContainer} style={this.state.isClicked ? { transform: `translate(200%)` } : {}}>
          <button onClick = {() => this.handleClick()}>
            Click Me!
          </button>
        </div>
        <div style={this.state.showDiv ? {} : { display: `none` }}>
          <h1>WHATWHAT</h1>
          <h1>WHATWHAT</h1>
          <h1>WHATWHAT</h1>
          <h1>WHATWHAT</h1>
          <h1>WHATWHAT</h1>
          <h1>WHATWHAT</h1>
        </div>
      </section>
    )
  }
}

export default welcomePage;
