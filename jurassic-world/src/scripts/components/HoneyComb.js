



import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import DelayChain from '../lib/DelayChain';
import { getPoints, getPolygonPoints } from '../lib/hexagon';

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

export default class HoneyComb extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.onresize = () => {
      this.forceUpdate();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log("rendering hexagons");
  	let classnames = ClassNames({
  		"hexagon-nav": true
  	});

    let { hexHeight } = this.props;
    let hexWidth = hexHeight / (Math.sqrt(3)/2);

    let vw = window.innerWidth;
    let vh = window.innerHeight;

    let numRows = Math.ceil(vh / hexHeight) + 2;
    let numColumns = Math.ceil(vw / (hexWidth * 0.75));

    let totalTransitionTime = 800;
    let staggerTime = totalTransitionTime / (numRows * numColumns);

    let polygons = [];
    let index = 0;

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numColumns; j++) {
        let pts = getPoints(hexHeight, hexWidth);
        let yOffset = (j%2 === 0) ? 0 : hexHeight/2;
        pts = pts.map((pt, index) => {
            return {
              x: pt.x + (hexWidth * j * 0.75),
              y: pt.y + (hexHeight * i) + yOffset
            }
        });
        polygons.push(pts);
        index++;
      }
    }

    shuffle(polygons);
    let polygonEls = polygons.map((pts, index) => {
      let transitionTime = (staggerTime*index)/1000;
      return <polygon key={index} points={getPolygonPoints(pts)} style={{"transitionDelay": transitionTime + "s"}} />
    })
    return (
      <div className="honeycomb">
        <svg ref="container">
          <g style={{"transform": "translate(" + (-hexWidth/4) + "px, " + (-hexHeight) + "px)" }} >
          {
            polygonEls
          }
          </g>
        </svg>
      </div>
    );
  }
}

