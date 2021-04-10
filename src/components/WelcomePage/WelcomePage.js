import React, {Component} from 'react';
import classes from './WelcomePage.module.css';

class welcomePage extends Component{
  state = {
    isClicked: false
  }

  handleClick(){
    this.setState({
      isClicked: true
    })
  }

  render(){
    return (
      <section className = {this.state.isClicked ? {} : classes.home}>
        <div className = {classes.welcomeText} style={this.state.isClicked ? { transform: `translate(200%)` } : {}}>
          <h1>Hi, My Name Is Gyuwon Do</h1>
          <h2>안녕하세요, 도규원입니다</h2>
        </div>
        <div className={classes.buttonContainer} style={this.state.isClicked ? { transform: `translate(200%)` } : {}}>
          <button onClick = {() => this.handleClick()}>
            Click Me!
          </button>
        </div>
      </section>
    )
  }
}

export default welcomePage;
