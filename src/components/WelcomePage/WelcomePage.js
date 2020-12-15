import React from 'react';
import classes from './WelcomePage.module.css';
import pokemon from '../../img/website.png';

const welcome = () => {
  return (
    <div className = {classes.wrapper}>
      <h1 className={classes.nameText}>Justin Do</h1>
      <h3 className={classes.otherText}>Slow But Steady Progress</h3>
      <img src={pokemon} className={classes.homeImage} />
    </div>
  )
}

export default welcome;
