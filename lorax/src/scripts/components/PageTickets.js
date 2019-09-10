
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import $ from "jquery";
import FlipClock from "../lib/flipclock.js";
import PageBase from './PageBase.js';
import Tilter from "./Tilter.js";
export default class PageVideos extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageBase 
        videoName="Fish_Final"
        posterSrc={window.STATIC_URL + "/img/fish-fallback.jpg"}
        blurb="You won’t see the Once-ler Don’t knock at his door He stays in his Lurkim on top of his store"
        isCurrent={this.props.isCurrent}
        title="Tickets"
        iconClass="universal-tickets"
      >
        <div className="page-tickets">
          <div className="page-tickets__half">
            <div className="countdown-title">Countdown to LORAX release</div>
            <div>
              <CountdownTimer />
            </div>
            <a href="http://www.fandango.com/" target="_blank" className="standard-cta large">Find&nbsp;&nbsp;tickets</a>

          </div>
          <div className="page-tickets__half">
            <Tilter xFactor="-50" yFactor="-50" rotateFactor="2">
              <img className="countdown-grandma" src={window.STATIC_URL + "/img/grandma-shadow.png"} />
            </Tilter>
          </div>
        </div>
      </PageBase>
    );
  }
}


class CountdownTimer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let $el = $(this.refs.container);
    this.clock = new FlipClock($el, 3600 * 24 * 3, {
      countdown: true,
      showSeconds: true
    });
    $(".flip-clock-wrapper").on("click", (e)=>{
      e.preventDefault();
    })
  }

  render() {
    return (
      <div ref="container">
      </div>
    );
  }
}
