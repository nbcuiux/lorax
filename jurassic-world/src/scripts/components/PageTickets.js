
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import $ from "jquery";
import FlipClock from "../lib/flipclock.js";
import PageBase from './PageBase.js';
import Tilter from "./Tilter.js";
import moment from "moment";
import AutoVideo from "./AutoVideo.js";
import { getPageData } from '../lib/pageData.js';

export default class PageTickets extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageBase videoName="Flare_Final"
      blurb="You can see over 100 species of prehistoric life when you paddle out on the Cretaceous Cruise."
      isCurrent={this.props.isCurrent}
      title="Tickets"
      iconClass="icon-ticket"
      posterSrc={window.STATIC_URL + "/img/Flare.jpg"}
      >
        <div className="page-tickets">
          <AutoVideo
            posterSrc={window.STATIC_URL + "/img/Raptor_Doors.jpg"}
            videoName="Raptor_Doors_Final" loop={true} isPlaying={true} />
          <div className="page-tickets__half">
            <div className="countdown-title">Countdown to release</div>
            <div>
              <CountdownTimer />
            </div>
            <a href="http://www.fandango.com/" target="_blank" className="standard-cta large">Find&nbsp;&nbsp;tickets</a>

          </div>
        </div>
      </PageBase>
    );
  }
}


PageTickets.defaultProps = {
  pageData: getPageData("tickets")
}


function pad(num, size) {
    var s = "000" + num;
    return s.substr(s.length-size);
}

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timer = window.setInterval(()=>{
      this.forceUpdate();
    }, 10);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {

    let grad = new Date(2017, 3, 16, 17, 0, 0, 0, 0);
    let now = new Date();
    let dur = moment.duration(grad.getTime() - now.getTime());

    let days = pad(dur.days(), 2);
    let hours = pad(dur.hours(), 2);
    let minutes = pad(dur.minutes(), 2);
    let seconds = pad(dur.seconds(), 2);
    let milliseconds = pad(dur.milliseconds(), 3);

    return (
      <div ref="container">
        <div className="countdown-container">
          {/*
          <div className="countdown-section">
            <div className="countdown-section__title">
              Days
            </div>
            <div className="countdown-section__digits">
              <CountdownTimerDigit number={ days[0] } />
              <CountdownTimerDigit number={ days[1] } />
            </div>
          </div>
          */}
          <div className="countdown-section">
            <div className="countdown-section__title">
              Hours
            </div>
            <div className="countdown-section__digits">
              <CountdownTimerDigit number={ hours[0] } />
              <CountdownTimerDigit number={ hours[1] } />
            </div>
          </div>

          <div className="countdown-section">
            <div className="countdown-section__title">
              Minutes
            </div>
            <div className="countdown-section__digits">
              <CountdownTimerDigit number={ minutes[0] } />
              <CountdownTimerDigit number={ minutes[1] } />
            </div>
          </div>

          <div className="countdown-section">
            <div className="countdown-section__title">
              Seconds
            </div>
            <div className="countdown-section__digits">
              <CountdownTimerDigit number={ seconds[0] } />
              <CountdownTimerDigit number={ seconds[1] } />
            </div>
          </div>

          <div className="countdown-section">
            <div className="countdown-section__title">
              Milliseconds
            </div>
            <div className="countdown-section__digits">
              <CountdownTimerDigit number={ milliseconds[0] } />
              <CountdownTimerDigit number={ milliseconds[1] } />
              <CountdownTimerDigit number={ 0 } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class CountdownTimerDigit extends Component {


  render () {

    let number = (this.props.number) ? parseInt(this.props.number) : 0;
    let matrix;

    switch(number) {
      case 0:
        matrix = [
          true, true, true, true,
          true, false, false, true,
          true, false, false, true,
          true, false, false, true,
          true, false, false, true,
          true, false, false, true,
          true, true, true, true
        ];
        break;
      case 1:
        matrix = [
          false, false, false, true,
          false, false, false, true,
          false, false, false, true,
          false, false, false, true,
          false, false, false, true,
          false, false, false, true,
          false, false, false, true
        ];
        break;
      case 2:
        matrix = [
          true, true, true, true,
          false, false, false, true,
          false, false, false, true,
          true, true, true, true,
          true, false, false, false,
          true, false, false, false,
          true, true, true, true
        ];
        break;
      case 3:
        matrix = [
          true, true, true, true,
          false, false, false, true,
          false, false, false, true,
          false, true, true, true,
          false, false, false, true,
          false, false, false, true,
          true, true, true, true
        ];
        break;
      case 4:
        matrix = [
          true, false, false, false,
          true, false, false, true,
          true, false, false, true,
          true, true, true, true,
          false, false, false, true,
          false, false, false, true,
          false, false, false, true
        ];
        break;
      case 5:
        matrix = [
          true, true, true, true,
          true, false, false, false,
          true, false, false, false,
          true, true, true, true,
          false, false, false, true,
          false, false, false, true,
          true, true, true, true
        ];
        break;
      case 6:
        matrix = [
          true, true, true, true,
          true, false, false, false,
          true, false, false, false,
          true, true, true, true,
          true, false, false, true,
          true, false, false, true,
          true, true, true, true
        ];
        break;
      case 7:
        matrix = [
          true, true, true, true,
          true, false, false, true,
          false, false, false, true,
          false, false, false, true,
          false, false, false, true,
          false, false, false, true,
          false, false, false, true
        ];
        break;
      case 8:
        matrix = [
          true, true, true, true,
          true, false, false, true,
          true, false, false, true,
          true, true, true, true,
          true, false, false, true,
          true, false, false, true,
          true, true, true, true
        ];
        break;
      case 9:
        matrix = [
          true, true, true, true,
          true, false, false, true,
          true, false, false, true,
          true, true, true, true,
          false, false, false, true,
          false, false, false, true,
          false, false, false, true
        ];
        break;
    }

    return (
      <div className="countdown-digit">
        <div className="countdown-digit--inner">
        {
          matrix.map((val, index) => {
            return <div key={index} className={ "countdown-digit__pixel " + (val ? "on" : "") }></div>
          })
        }
        </div>
      </div>
    )
  }
}
