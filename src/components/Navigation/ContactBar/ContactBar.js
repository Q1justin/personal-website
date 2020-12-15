import React from 'react';
import classes from './ContactBar.module.css';

const contactBar = () => {
  return (
    <div className = {classes.contactBar}>
        <div className = {classes.navLink}>Email</div>
        <div className = {classes.navLink}>LinkedIn</div>
        <div className = {classes.navLink}>Github</div>
      </div>
  )
}

export default contactBar;
