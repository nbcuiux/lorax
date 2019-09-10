
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import $ from "jquery";

export default class AutoVideo extends Component {


  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.isPlaying && !this.context.isMobile) {
      setTimeout(()=>{
        this.refs.theVideo.play();
      }, 1000);
    }
    this.ajustVideoSize();
    $(window).resize(this.ajustVideoSize.bind(this));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isPlaying === false && this.props.isPlaying === true && !this.context.isMobile) {
      this.refs.theVideo.play();
      setTimeout(()=>{
        this.refs.theVideo.play();
      }, 1000);
    }
  }

  ajustVideoSize() {
    let style;
    let videoEl = $(this.refs.theVideo);
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let videoW = videoEl.width();
    let videoH = videoEl.height();
    if (vw/vh > videoW/videoH) {
      style = {
        width: "100%",
        height: "auto"
      }
    }
    else {
      style = {
        width: "auto",
        height: "100%"
      }
    }
    $(videoEl).css(style);
  }


  render() {

    let showPoster = this.context.isMobile;

    return (
      <div className="auto-video">
        {
          showPoster ?
            <div className="page-base__background" style={{ backgroundImage: "url(" + this.props.posterSrc + ")" }}>
            </div>
          :
            <video ref="theVideo" loop={this.props.loop} ref="theVideo">
              <source src={window.STATIC_URL + "/video/" + this.props.videoName + ".mp4"} type="video/mp4" />
              <source src={window.STATIC_URL + "/video/" + this.props.videoName + ".ogv"} type="video/ogg" />
              <source src={window.STATIC_URL + "/video/" + this.props.videoName + ".webm"} type="video/webm" />
            </video>
        }
      </div>
    );
  }
}


AutoVideo.contextTypes = {
  isMobile: React.PropTypes.bool
};
