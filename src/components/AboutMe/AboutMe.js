import React from 'react';
import classes from './AboutMe.module.css';
import Columns from 'react-columns';
import profilePicture from '../../img/pokemon2.png';
import LineBreak from '../../UI/LineBreak/LineBreak';

const aboutMe = () => {
  return (
    <div className = {classes.wrapper}>
      <h1>About Me</h1>
      <h2>Making Progress Step By Step</h2>
      <Columns columns="3" className = {classes.columns}>
        <div className = {classes.column1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <img src={profilePicture} className = {classes.column2} />
        <div className = {classes.column3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </Columns>
      <p> Some extra info to fill in</p>
    </div>
  )
}

export default aboutMe;
