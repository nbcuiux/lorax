
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';


export default class PageVideoBackground extends Component {


  constructor(props) {
    super(props);
    this.state = {
      scrollPhase: "top"
    }
  }

  componentDidMount() {
    if (this.props.isPlaying) {
      this.refs.theVideo.play();
    }

    window.addEventListener("scroll", (e)=>{
      this.onScroll(e);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isPlaying === false && this.props.isPlaying === true) {
      this.refs.theVideo.play();
    }
  }

  onScroll(e) {

    if (window.scrollY < 10) {
      this.setState({
        scrollPhase: "top"
      })
    }

    else if (window.scrollY < 200) {
      this.setState({
        scrollPhase: "blur"
      })
    }

    else {
      this.setState({
        scrollPhase: "bottom"
      })
    }
  }

  onWheel(e) {
    console.log("calling on wheel");
    /*
    if (this.state.scrollPhase === "top" && e.deltaY > 0) {
      this.setState({
        scrollPhase: "blur"
      })
    }
    */
  }

  render() {

    let classnames = ClassNames({
      'page-video-background': true
    })
    classnames = classnames + " page-video-background--" + this.state.scrollPhase;
    return (
      <div className={classnames} onWheel={this.onWheel.bind(this)}>
        <div className="page-video-background__inner">
          <video ref="theVideo" loop={this.props.loop}>
            <source src={this.props.src} type="video/mp4" />
          </video>
          <div className="page-video-background__blurb">
            {this.props.blurb}
          </div>
        </div>
      </div>
    );
  }
}
