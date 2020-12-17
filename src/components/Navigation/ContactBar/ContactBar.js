import React from 'react';
import classes from './ContactBar.module.css';

const contactBar = (props) => {
  return (
    <div className = {classes.contactBar} id = {props.id}>
        <div className = {classes.navLink}>Email</div>
        <div className = {classes.navLink}>LinkedIn</div>
        <div className = {classes.navLink}>Github</div>
      </div>
  )
}

export default contactBar;
