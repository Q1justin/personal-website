import React from 'react';
import classes from "./Projects.module.css";
import Columns from 'react-columns';
import Project from './Project/Project';
import test1 from '../../img/pokemon4.jpg';
import test2 from '../../img/pokemon3.jpg';

const projects = (props) => {
  const projectList = [
    {
      name: "Test Name",
      description: "Test Description",
      image: test1,
      date: null
    },
    {
      name: "Test 2",
      description: "Description 2",
      image:test2,
      date: null
    },
    {
      name: "Test 3",
      description: "Description 2",
      image:test2,
      date: null
    },
  ];

  let projectDisplay = [];

  for (let i = 0; i < projectList.length; i+=2) {
    if(projectList[i+1]){
      projectDisplay.push(
        <div className = {classes.flexBox}>
        <Project
          name={projectList[i].name}
          description={projectList[i].description}
          image = {projectList[i].image}
          key = {projectList[i].name}/>
          <Project
            name={projectList[i+1].name}
            description={projectList[i+1].description}
            image = {projectList[i+1].image}
            key = {projectList[i+1].name}/>
        </div>
      )
    }
    else{
      projectDisplay.push(
        <div className = {classes.flexBox}>
        <Project
          name={projectList[i].name}
          description={projectList[i].description}
          image = {projectList[i].image}
          key = {projectList[i].name}/>
        </div>
      )
    }
  }

  return (
    <div className = {classes.wrapper} id = {props.id}>
      <h1 className = {classes.title}>Projects</h1>
      <h2 className = {classes.introduction}>Here's What I Have Been Doing</h2>
      {projectDisplay}
    </div>
  )
}

export default projects;
