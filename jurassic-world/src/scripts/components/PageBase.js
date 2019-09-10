
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
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

    if (prevState.scrollPhase !== this.state.scrollPhase) {
      if (this.state.scrollPhase === "top") {
        $(".logo-main").removeClass("logo-main--hidden");
      }
      else {
        $(".logo-main").addClass("logo-main--hidden");
      }
      if (this.state.scrollPhase === "bottom") {

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

    else if (e.deltaY < 0 && $(window).scrollTop() <= 0 && this.state.scrollPhase === "bottom") {
      this.setState({
        scrollPhase: "top"
      });
    }
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

  onArrowClick(e) {
    if (this.state.scrollPhase === "top") {
      this.scrollDown();
    }

    else {
      $("html, body").animate({
        scrollTop: window.innerHeight - 60
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

  render() {


    let { scrollPhase } = this.state;

    let classnames = ClassNames({
      'page-base': true
    });

    classnames = classnames + ' page-base--scroll-phase-' + this.state.scrollPhase;

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
            </div>
          </div>
          <div className="page-info">
            <div className="hexIcon page-info__icon">
              <div className={"page-icon iconcss " + this.props.iconClass}>
              </div>
            </div>

            <div className="page-title">{this.props.title}</div>
          </div>
          <div className="page-down bounce" onClick={this.onArrowClick.bind(this)}>
            <i className="iconcss icon-chevron-down"></i>
          </div>


          <div className="page-video-background__blurb">
            <div className="page-video-background__blurb-title">DINO-FACT:</div>
            <div className="page-video-background__blurb-content">{this.props.blurb}</div>
          </div>
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






function startdecrypt(text, encrypted, decrypted) {
    // Original text, split into an array and reversed (for faster pop())
    var originalText = text.split('').reverse();
    var decryptedText = "";
    var i = 0;
    decrypted.textContent = "";

    var shuffleInterval = setInterval(function(){

      // Generate random strings. You can modify the generator function range
      // (Math.random()*(to-from+1)+from);
      var shuffledText = '';
      var j = originalText.length;
      while(j--) shuffledText += String.fromCharCode((Math.random()*94+33) | 0);

      // On every 10 cycles, remove a character from the original text to the decoded text
      //if(i++ % 10 === 0) decryptedText += originalText.pop();
      let next = originalText.pop();
      if (next) {
        decryptedText += next;
      }
      
      // Display
      if (decryptedText) {
        decrypted.textContent = decryptedText;
      }

      if (encrypted) {
        encrypted.textContent = shuffledText;
      }

      // Stop when done
      if(!shuffledText.length) clearInterval(shuffleInterval);

    // 50ms looks more dramatic
    },30);
}



class EncryptTransition extends Component {

  componentDidMount() {
    startdecrypt(this.props.content, this.refs.enrypted, this.refs.decrypted);
  }

  render() {
    return (
      <div className="encrypt-transition">
        <span ref="decrypted"></span>
        <span className="encrypt-transition__encrypted" ref="enrypted"></span>
      </div>
    )
  }



}



