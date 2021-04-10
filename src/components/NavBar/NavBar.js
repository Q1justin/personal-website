import React from 'react';
import classes from './NavBar.module.css';

const navBar = (props) => {
  return (
    <div className = {classes.navContainer}>
      <ul>
        <li><a>Projects</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  )
}

export default navBar;
