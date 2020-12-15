import React, {Component} from 'react';
import classes from "./Project.module.css";

class Project extends Component {
  state = {
    toggled: false
  }

  handleMouseHover = () => {
    this.setState({toggled: true});
  }

  handleMouseLeave = () => {
    this.setState({toggled: false});
  }

  render(){

    let projectImage = <div className = {classes.imageBox}>
      <img
        src={this.props.image}
        key = {this.props.name}
        className = {classes.projectImage}
      />
      <div className = {classes.overlay}>
          <h3 className = {classes.projectTitle}>{this.props.name}</h3>
          <p className = {classes.description}>{this.props.description}</p>
      </div>
    </div>
    //
    // if(this.state.toggled){
    //   projectImage = <div className = {classes.imageHover}>
    //     <img
    //       src={this.props.image}
    //       onMouseEnter = {this.handleMouseHover}
    //       onMouseLeave = {this.handleMouseLeave}
    //       className = {classes.projectImage}
    //       key = {this.props.name}
    //     />
    //     <div className = {classes.overlay}>
    //         <h3>{this.props.name}</h3>
    //     </div>
    //   </div>
    // }

    return (
      <div>
        {projectImage}
      </div>
    )
  }
}

export default Project;
