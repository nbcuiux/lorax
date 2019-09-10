
import React, { Component, PropTypes } from 'react';
import $ from "jquery";


import ClassNames from 'classnames';
import AutoVideo from './AutoVideo';
import PageLoader from "./PageLoader";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DelayChain from "../lib/DelayChain";
import Nav from "./Nav.js";
import GalleryOverlay from "./GalleryOverlay.js";
import Pages from "./Pages";
import HoneyComb from "./HoneyComb";

import { withRouter, Link } from 'react-router';


class Container extends Component {


  constructor(props) {
    super(props);

    this.introDc = new DelayChain;
    this.pageDc = new DelayChain;
    this.navDc = new DelayChain;

    this.state = {
      pageLoaded: false,
      introPhase: "unloaded",
      scrollLeft: 0,
      currPage: 0,
      prevPage: null,
      nextPage: null,
      pageTransPhase: null,
      galleryItems: [],
      initialGalleryIndex: 0,
      navOpenPhase: "closed",
      hexPhase: null,
      isMobile: window.innerWidth < 800
    }

  }

  getChildContext() {
    return {
      openGallery: (gallery, index) => {
        // Create a new object so the GalleryOverlay component can tell when we have called
        // this function
        let newGallery = gallery.slice();
        this.setState({
          galleryItems: newGallery,
          initialGalleryIndex: index
        })

      },
      navTo: this.navTo.bind(this),
      isMobile: this.state.isMobile
    };
  }

  onPageLoad() {

    if (this.state.isMobile) {
      this.setState({
        pageLoaded: true,
        introPhase: null,
        hexPhase: "entered"
      });
      return;
    }

    this.setState({
      pageLoaded: true
    });

    this.introDc.delay(1, ()=>{
      this.setState({
        introPhase: "video"
      });
    }).delay(11500, ()=>{
      this.setState({
        introPhase: "logo-appear"
      });
    }).delay(6000, ()=>{ // Wait 4 seconds then fade out the title screen
      this.setState({
        introPhase: "fade-out",
        hexPhase: "enter",
        currPage: 0
      });
    }).delay(2000, ()=>{
      this.setState({
        introPhase: "finish"
      });
    }).delay(500, ()=>{
      this.setState({
        introPhase: null,
        hexPhase: "entered"
      });
    });
  }

  skipIntro() {
    this.introDc.cancel();
    this.introDc.delay(1, ()=>{
      this.setState({
        introPhase: "fade-out",
        hexPhase: "enter",
        currPage: 0
      });
    }).delay(2000, ()=>{
      this.setState({
        introPhase: "finish"
      });
    }).delay(500, ()=>{
      this.setState({
        introPhase: null,
        hexPhase: "entered"
      });
    });
  }

  handleKeyPress(e) {

    let vw = window.innerWidth;

    this.setState({
      scrollLeft: this.state.scrollLeft - vw
    });
    return;

    switch (e.keyCode) {
      case 39:
        this.setState({
          scrollLeft: this.state.scrollLeft - 500
        });
        return;
      case 37:
        this.setState({
          scrollLeft: this.state.scrollLeft + 500
        });
        return;
    }
  };


  toggleNav() {
    if (this.state.navOpenPhase === "closed" || this.state.navOpenPhase === "closing") {
      this.openNav();
    }
    else if (this.state.navOpenPhase === "open" || this.state.navOpenPhase === "opening") {
      this.closeNav();
    }
  }

  openNav() {
    this.navDc.cancel();
    // Open it
    this.setState({
      navOpenPhase: "opening"
    });

    this.navDc.delay(1200, ()=>{
      this.setState({
        navOpenPhase: "open"
      });
    });
  }

  closeNav() {
    this.navDc.cancel();
    // Close it
    this.setState({
      navOpenPhase: "closing"
    });

    this.navDc.delay(200, ()=>{
      this.setState({
        navOpenPhase: "closed"
      });
    });
  }

  navTo(route) {

    if (route === "home") {
      route = "";
    }

    this.pageDc.cancel();
  
    this.closeNav();

    this.setState({
      pageTransPhase: "start"
    });
    this.pageDc.delay(20, ()=>{
      this.setState({
        pageTransPhase: "moving"
      });
    }).delay(1000, ()=>{
      this.setState({
        pageTransPhase: "finish"
      });
      this.props.router.push('/' + route);
    }).delay(1000, ()=>{
      this.setState({
        pageTransPhase: null
      });
    })
  }

  logoClick(e) {
    e.preventDefault();
    this.navTo("");
  }

  componentDidMount() {
    $(window).on("scroll", ()=>{
      let top = $(window).scrollTop();
      if (top > 100) {
        $("body").addClass("sticky-header");
      }
      else {
        $("body").removeClass("sticky-header");
      }
    });

    if (this.props.location.pathname === "/") {
      this.onPageLoad();
    }
    else {
      this.setState({
        pageLoaded: true,
        introPhase: null,
        hexPhase: "entered"
      })
    }
  }

  render() {
    let { pages, menu } = this.props;
    let { introPhase, pageLoaded, currPage, prevPage, nextPage, pageTransPhase, navOpenPhase, hexPhase } = this.state;
    let classnames = ClassNames({
      'main-wrapper': true
    });

    let vw = window.innerWidth;
    let hexHeight = vw/15;
    let plxLyr1ScrollLeft = scrollLeft * 0.4;
    let scrollLeft = (-currPage * 100) + "vw";
    let currRoute = this.props.location.pathname.replace(/\//g, '');

    classnames = classnames + " main-wrapper-intro-phase--" + introPhase;
    classnames = classnames + " main-wrapper-page-phase--" + pageTransPhase;
    classnames = classnames + " main-wrapper-curr--" + currPage;
    classnames = classnames + " main-wrapper-nav--" + navOpenPhase;
    classnames = classnames + " main-wrapper-hex--" + hexPhase;

    return (
      <div className={classnames}>

        <div className="header">
          <a className="header-logo" href="/" onClick={this.logoClick.bind(this)}>
            <img src={window.STATIC_URL + '/img/new-logo-white.svg'} />
          </a>
          <div className="header-right">
            <div className="social-buttons">
              <a href="https://www.facebook.com/JurrasicPark2014/" target="_blank">
                <i className="iconcss icon-facebook"></i>
              </a>
              <a href="https://twitter.com/jurassicworld" target="_blank">
                <i className="iconcss icon-twitter"></i>
              </a>
            </div>
            <div className="nav-trigger" onClick={this.toggleNav.bind(this)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
        </div>

        <Nav 
          closeNav={this.closeNav.bind(this)} 
          navItems={menu.items} 
          pages={pages} 
          navTo={this.navTo.bind(this)} 
          pageIndex={currPage}
          currRoute={currRoute}
        />
        <div className="pages">
          <div className="page-container page--curr">
            {this.props.children}
          </div>
        </div>
        {
          (introPhase !== null && introPhase !== "finish") ?
            (
              <div>
                <div className="intro-video">
                  <AutoVideo videoName="jurassic-intro-w-text-3" isPlaying={introPhase === "video"}/>
                </div>
                <div className="intro-skip" onClick={this.skipIntro.bind(this)}>
                  <div className="skip-text">Skip Intro</div>
                  <i className="iconcss icon-chevron-right"></i>
                </div>
              </div>
            )
          :
            null
        }

        <HoneyComb hexHeight={hexHeight} />
        <GalleryOverlay
          items={this.state.galleryItems}
          initialIndex={this.state.initialGalleryIndex}
        />
      </div>
    );
  }
}


Container.childContextTypes = {
  openGallery: React.PropTypes.func,
  navTo: React.PropTypes.func,
  isMobile: React.PropTypes.bool
}

Container.defaultProps = {
  pages: window.SITE_DATA.pages,
  menu: window.SITE_DATA.menu
}



export default withRouter(Container);


