import React from 'react';
import classes from './WelcomePage.module.css';

const welcomePage = (props) => {
  return (
    <section className = {classes.home}>
      <div className = {classes.welcomeText} style={props.isClicked ? { transform: `translate(200%)` } : {}}>
        <h1>Hi, My Name Is Gyuwon Do</h1>
        <h2>안녕하세요, 도규원입니다</h2>
      </div>
      <div className={classes.buttonContainer} style={props.isClicked ? { transform: `translate(200%)` } : {}}>
        <button onClick = {() => props.handleClick()}>
          Click Me!
        </button>
      </div>
    </section>
  )
}

export default welcomePage;
