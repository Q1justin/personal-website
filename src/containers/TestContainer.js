import React, {Component} from 'react';

class Item extends Component {
  state = {
    toggled: false
  }

  handleMouseHover = () => {
    console.log(this.state)
    this.setState({toggled: true});
  }

  handleMouseLeave = () => {
    this.setState({toggled: false});
  }
  render(){
    return (
      <div>
      </div>
    )
  }
}

export default Item;
