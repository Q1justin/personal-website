import React from 'react';
import classes from "./Projects.module.css";
import Project from './Project/Project';
import test1 from '../../img/pokemon4.jpg';
import test2 from '../../img/pokemon3.jpg';

const projects = (props) => {
  const projectList = [
    {
      name: "Optimize Airport Control",
      description: "Under Works",
      image: test1,
      date: null
    },
    {
      name: "Tration",
      description: "Track Your Health Easily",
      image:test2,
      date: null
    },
    {
      name: "Covid Tracker",
      description: "Track Covid Globally",
      image:test2,
      date: null
    },
  ];


  return (
    <div className = {classes.wrapper} id = {props.id}>
      <div className = {classes.projectTop}>
      </div>
    </div>
  )
}

export default projects;
