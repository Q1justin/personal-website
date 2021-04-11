import React from 'react';
import classes from "./Projects.module.css";
import Project from './Project/Project';

const projects = (props) => {
  const projectList = [
    {
      name: "Optimize Airport Control",
      description: "Under Works",
      date: null
    },
    {
      name: "Tration",
      description: "Track Your Health Easily",
      date: null
    },
    {
      name: "Covid Tracker",
      description: "Track Covid Globally",
      date: null
    },
  ];


  return (
    <div className = {classes.wrapper} id = {props.id}>
      <div className = {classes.projectTop}>
        <div className = {classes.introText}>
          <h1>Slow But Steady</h1>
          <h2>The goal is to continue</h2>
        </div>
        <div className = {classes.radioContainer}>
          <div className = {classes.colorContainer}>
            <div className = {classes.colorBox}></div>
            <div className = {classes.colorBox}></div>
          </div>
          <div className = {classes.colorContainer}>
            <div className = {classes.colorBox}></div>
            <div className = {classes.colorBox}></div>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default projects;
