
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
    let style;
    if (this.context.isMobile) {
      style = {};
    }
    else {
      let { mouseX, mouseY } = this.state;
      let { xFactor, yFactor, rotateFactor } = this.props;
      style = {
        transform: "translateX(" + (xFactor * mouseX) + "px) translateY(" + (yFactor * mouseY) + "px) rotate(" + (rotateFactor * mouseX * mouseY) + "deg)"
      }
    }
    return (
      <div className="tilter" ref="container" style={style}>
        {this.props.children}
      </div>
    );
  }
}

Tilter.contextTypes = {
  isMobile: React.PropTypes.bool
};

