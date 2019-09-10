
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import $ from "jquery";


export default class Tree extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      rotation: 0
    }

    this.lastPosition = {
      x: 0,
      y: 0
    }
  }

  onMouseMove(event) {
    let deltaX = this.lastPosition.x - event.clientX;
    let deltaY = this.lastPosition.y - event.clientY;
    let distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
    let newRotation = this.state.rotation + (distance * this.props.speed * this.props.direction * .5);

    if (distance > 0) {
      this.setState({
        rotation: newRotation
      })
    }

    this.lastPosition.x = event.clientX;
    this.lastPosition.y = event.clientY;
  }

  componentDidMount() {
    document.addEventListener("mousemove", (e)=>{
      this.onMouseMove(e);
    });
  }

  render() {

    let classnames = ClassNames({
      'tree-top': true,
    });
    classnames = classnames + ' tree-top--' + this.props.id;

    let style = {
      "transform": "rotate(" + (this.state.rotation) + "deg)"
    }

    return (
      <div className={classnames} style={style}>

      </div>
    );
  }
}
