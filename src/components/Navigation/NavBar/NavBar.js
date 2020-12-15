import React from 'react';
import classes from './NavBar.module.css';

const navBar = () => {
  return (
    <div className = {classes.navBar}>
      <nav className = {classes.navLink}>Home</nav>
      <nav className = {classes.navLink}>About</nav>
      <nav className = {classes.navLink}>Projects</nav>
      <nav className = {classes.navLink}>Contact</nav>
    </div>
  )
}

export default navBar;
