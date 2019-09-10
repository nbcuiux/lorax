
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import $ from "jquery";


export default class Icon extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let { width, height, x, y, iconId, className } = this.props;
    let html = '<use xlink:href="#' + iconId +'" x="-20" y="0"></use>';

    return (
        <svg className={className} style={{overflow: "visible"}} width={width} height={height} x={x} y={y} viewBox="0 0 40 40">
          <g dangerouslySetInnerHTML={{__html: html}}>
          </g>
        </svg>
    );
  }
}
