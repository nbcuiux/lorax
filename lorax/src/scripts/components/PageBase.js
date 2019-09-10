
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import PageVideoBackground from './PageVideoBackground.js';
import AutoVideo from './AutoVideo.js';
import $ from "jquery";
import Swipeable from 'react-swipeable';



function dontScroll(e) {
  e.preventDefault();
  return false;
}





export default class PageBase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollPhase: "top"
    }
  }


  componentDidMount() {
    //this.refs.theVideo.play();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isCurrent !== this.props.isCurrent && this.refs.theVideo) {
      if (this.props.isCurrent) {
        this.refs.theVideo.play();
      }
      else {
        this.refs.theVideo.pause();
      }
    }

    if (prevState.scrollPhase !== this.state.scrollPhase) {
      if (this.state.scrollPhase === "top") {
        $(".logo-main").removeClass("logo-main--hidden");
      }
      else {
        $(".logo-main").addClass("logo-main--hidden");
      }
    }
  }

  
  onWheel(e) {
    if (this.state.scrollPhase === "top" || this.state.scrollPhase === "blur") {
      e.stopPropagation();
      e.preventDefault();
    }

    if (this.state.scrollPhase === "top" && e.deltaY > 0) {
      this.scrollDown();
    }

    else if (e.deltaY < 0 && $(window).scrollTop() === 0 && this.state.scrollPhase === "bottom") {
      this.setState({
        scrollPhase: "top"
      });
    } 
  }

  onArrowClick(e) {
    if (this.state.scrollPhase === "top") {
      this.scrollDown();
    }

    else {
      console.log("scrolling fucker");
      $("html, body").animate({
        scrollTop: window.innerHeight
      }, 1000)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isCurrent && this.props.isCurrent) {
      this.setState({
        scrollPhase: "top"
      });
    }
  }

  scrollDown() {
    this.setState({
      scrollPhase: "blur"
    });

    setTimeout(()=>{
      this.setState({
        scrollPhase: "bottom"
      });
    }, 1000)
  }

  swipingUp(e) {
    if (this.state.scrollPhase === "top") {
      e.stopPropagation();
      e.preventDefault();
      this.scrollDown();
    }
  }

  swipingDown(e) {
    if ($(window).scrollTop() <= 0 && this.state.scrollPhase === "bottom") {
      e.stopPropagation();
      e.preventDefault();      
      this.setState({
        scrollPhase: "top"
      });
    }
  }


  render() {
    let classnames = ClassNames({
      'page-base': true
    });
    let { scrollPhase } = this.state;
    classnames = classnames + ' page-base--scroll-phase-' + this.state.scrollPhase;
    let showVideo = !this.context.isMobile;
    return (
      <div className={classnames} onWheel={this.onWheel.bind(this)}>
        <Swipeable 
          onSwipedUp={this.swipingUp.bind(this)} 
          onSwipedDown={this.swipingDown.bind(this)}
          stopPropagation={ scrollPhase === "top"}
          preventDefaultTouchmoveEvent={ scrollPhase === "top"}
        >
          <div className="page-video-background">
            <div className="page-video-background__inner">
              <AutoVideo 
                videoName={this.props.videoName} 
                posterSrc={this.props.posterSrc} 
                isPlaying={true}
                loop={true} 
              />
              <div className="page-video-background__blurb">
                {this.props.blurb}
              </div>
            </div>
          </div>
          <div className="page-info">
            <div className={"page-icon " + this.props.iconClass}></div>
            <div className="page-title">{this.props.title}</div>
          </div>
          <div className="page-down universal-down-arrow bounce" onClick={this.onArrowClick.bind(this)}></div>
        </Swipeable> 
        <div className="divider-1"></div>
        {
          this.state.scrollPhase !== "top" ?
            this.props.children 
          :
            null
        }
      </div>
    );
  }
}



PageBase.contextTypes = {
  isMobile: React.PropTypes.bool
};






