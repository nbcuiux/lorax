
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';


export default class PageLoader extends Component {


  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="page-loader">
        <div>Loading...</div>
      </div>
    );
  }
}
