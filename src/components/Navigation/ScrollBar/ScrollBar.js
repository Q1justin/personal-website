import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import classes from "./ScrollBar.module.css";

const scrollBar = () => {
  return(
    <div className = {classes.navBar}>
      <Link
        activeClass="active"
        to="AboutMe"
        spy={true}
        smooth={true}
        duration={500}
      >
      About Me
      </Link>
      <Link
        activeClass="active"
        to="Projects"
        spy={true}
        smooth={true}
        duration={500}
      >
      Projects
      </Link>
      <Link
        activeClass="active"
        to="ContactBar"
        spy={true}
        smooth={true}
        duration={500}
      >
      Contacts
      </Link>
    </div>
  )
}

export default scrollBar;
