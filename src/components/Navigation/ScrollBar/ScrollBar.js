import React, {Component} from 'react';
import { Link} from "react-scroll";
import classes from "./ScrollBar.module.css";

class ScrollBar extends Component {
  state = {
    selectedComponent: ""
  }

 setActiveComponent = (component) => {
  this.setState({selectedComponent: component})
}

  render(){
    return(
      <div className = {classes.navBar}>
        <Link
          activeClass="active"
          to="AboutMe"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive = {() => this.setActiveComponent("AboutMe")}
          /*Determine if active status*/
          className = {this.state.selectedComponent == "AboutMe" ? classes.active: classes.navLink}
        >
        <p>About Me</p>
        </Link>
        <Link
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive = {() => this.setActiveComponent("Projects")}
          className = {this.state.selectedComponent == "Projects" ? classes.active: classes.navLink}
        >
        <p>Projects</p>
        </Link>
        <Link
          activeClass="active"
          to="ContactBar"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive = {() => this.setActiveComponent("ContactBar")}
          className = {this.state.selectedComponent == "ContactBar" ? classes.active: classes.navLink}
        >
        <p>Contacts</p>
        </Link>
      </div>
    )
  }
}

export default ScrollBar;
