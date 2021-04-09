import React, {Component} from 'react';
import classes from './WelcomePage.module.css';

class WelcomePage extends Component{
  render(){
    return (
      <section className = {classes.home}>
        <div className = {classes.welcomeText}>
          <h1>Hi, My Name Is Gyuwon Do</h1>
          <h2>안녕하세요, 도규원입니다</h2>
        </div>
        <div className={classes.buttonContainer}>
          <button>Click Me!</button>
        </div>
      </section>
    )
  }
}

export default WelcomePage;
