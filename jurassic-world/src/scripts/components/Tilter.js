
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';


export default class Tilter extends Component {


  constructor(props) {
    super(props);
    this.state={
      mouseX: 0,
      mouseY: 0
    }

    this.onScroll = (e) => {
      let vw = window.innerWidth;
      let vh = window.innerHeight;
      this.setState({
        mouseX: e.clientX/vw,
        mouseY: e.clientY/vh
      })
    }
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onScroll);
  }

  render() {
    
    let { mouseX, mouseY } = this.state;
    let { xFactor, yFactor, rotateFactor } = this.props;
    let style = {
      transform: "translateX(" + (xFactor * mouseX) + "px) translateY(" + (yFactor * mouseY) + "px) rotate(" + (rotateFactor * mouseX * mouseY) + "deg)"
    }
    
    return (
      <div className="tilter" ref="container" style={style}>
        {this.props.children}
      </div>
    );
  }
}
