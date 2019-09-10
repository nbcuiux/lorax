
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
import { withRouter, Link } from 'react-router';

class Container extends Component {


  constructor(props) {
    super(props);

    this.introDc = new DelayChain;
    this.pageDc = new DelayChain;
    this.navDc = new DelayChain;

    // Extracts the current route (which is the page slug) from injcted
    // react router, than sets the current page index accordingly, which 
    // will make sure site starts scrolled to the right page
    let currRoute = this.props.location.pathname.replace(/\//g, '');
    let currIndex = (currRoute !== "") ?
        this.props.pages.findIndex( item => item.slug === currRoute )
      :
        0

    this.state = {
      pageLoaded: true,
      introPhase: null,
      scrollLeft: 0,
      currPage: currIndex,
      prevPage: null,
      pageTransPhase: null,
      galleryItems: [],
      initialGalleryIndex: 0,
      navOpenPhase: "closed",
      marshmallowPhase: null,
      isMobile: window.innerWidth < 800
    }
  }

  componentDidMount() {
    if (this.props.location.pathname === "/") {
      this.onPageLoad();
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
      isMobile: this.state.isMobile
    };
  }
  
  onPageLoad() {
    if (this.state.isMobile) {
      this.setState({
        introPhase: null,
        marshmallowPhase: "finished",
        pageLoaded: true
      });
    }
    else {
      this.setState({
        pageLoaded: true
      });
      this.introDc.delay(1, ()=>{
        this.setState({
          introPhase: "video"
        });
      }).delay(5500, ()=>{
        this.setState({
          introPhase: "logo-appear"
        });
      }).delay(500, ()=>{
        this.setState({
          introPhase: "background-appear",
          marshmallowPhase: "start"
        });
      }).delay(1000, ()=>{
        this.setState({
          introPhase: "logo-shrink",
          marshmallowPhase: "enter"
        });
      }).delay(1000, ()=>{
        this.setState({
          introPhase: "logo-fade"

        });
      }).delay(200, ()=>{
        this.setState({
          introPhase: "finish"
        });
      }).delay(3000, ()=>{
        this.setState({
          introPhase: null,
          marshmallowPhase: "finished"
        });
      }).delay(1000, () =>{
        this.setState({
          marshmallowPhase: "finished"
        });
      });
    }
  }

  skipIntro() {
    this.introDc.cancel();
    this.introDc.delay(1, ()=>{
      this.setState({
          marshmallowPhase: "start",
          introPhase: "logo-fade",
        });
    }).delay(10, ()=>{
      this.setState({
        marshmallowPhase: "enter"
      });
    }).delay(1000, ()=>{
      this.setState({
        introPhase: "logo-fade"
      });
    }).delay(200, ()=>{
      this.setState({
        introPhase: "finish"
      });
    }).delay(3000, ()=>{
      this.setState({
        introPhase: null,
        marshmallowPhase: "finished"
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


  getTransformCss(scrollLeft) {
    return {
      left: scrollLeft
    }
  }

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
    this.props.router.push('/' + route);
    this.closeNav();
    return;
  }

  logoClick(e) {
    e.preventDefault();
    this.navTo("");
  }

  componentDidUpdate(prevProps, prevState) {
    let currRoute = this.props.location.pathname.replace(/\//g, '');
    // We naved
    if (this.props.location.pathname !== prevProps.location.pathname) {
      let currRoute = this.props.location.pathname.replace(/\//g, '');
      let currIndex = (currRoute !== "") ?
        this.props.pages.findIndex( item => item.slug === currRoute )
      :
        0

      this.pageDc.cancel();
      this.setState({
        pageTransPhase: "start"
      });
      this.pageDc.delay(1, ()=>{
        this.setState({
          currPage: currIndex,
          prevPage: this.props.currPage,
          pageTransPhase: "moving"
        });
      }).delay(1000, ()=>{
        this.setState({
          pageTransPhase: "finish"
        });
      }).delay(1, ()=>{
        this.setState({
          pageTransPhase: null
        });
      })
    }

    if (prevState.pageTransPhase !== this.state.pageTransPhase) {
      switch (this.state.pageTransPhase) {
        case "start":
          $(".page--curr").css({
            "transform": "translateY(" + (-window.scrollY) +"px)"
          });
          window.scrollTo(0, 0);
          return;
        case "finish":
          $(".page--prev").css({
            "transform": "translateY(0px)"
          });
          return
      }
    }
  }

  render() {
    let { pages, menu } = this.props;
    let { introPhase, pageLoaded, currPage, prevPage, pageTransPhase, navOpenPhase, marshmallowPhase, isMobile } = this.state;
    let classnames = ClassNames({
      'main-wrapper': true
    });

    let vw = window.innerWidth;
    let plxLyr1ScrollLeft = scrollLeft * 0.4;
    let scrollLeft = (-currPage * 100) + "vw";

    classnames = classnames + " main-wrapper-intro-phase--" + introPhase;
    classnames = classnames + " main-wrapper-page-phase--" + pageTransPhase;
    classnames = classnames + " main-wrapper-curr--" + currPage;
    classnames = classnames + " main-wrapper-nav--" + navOpenPhase;
    classnames = classnames + " main-wrapper-marshmallow--" + marshmallowPhase;

    return (
      <div className={classnames}>
        <div className="nav-trigger" onClick={this.toggleNav.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>


        <div className="logo-main">
          <a href="/" onClick={this.logoClick.bind(this)}>
            <img src={window.STATIC_URL + '/img/lorax-logo-white.png'} />
          </a>
        </div>
        <Nav navItems={menu.items} pages={pages} navTo={this.navTo.bind(this)} pageIndex={currPage} />
        <Pages isMobile={isMobile} pages={pages} currPage={currPage} prevPage={prevPage} navTo={this.navTo.bind(this)} />
        {

          (introPhase !== null && introPhase !== "finish" && !isMobile) ?
            (
              <div>
                <div className="intro-logo-big">
                  <img src={window.STATIC_URL + '/img/lorax-logo-orange.png'} />
                </div>
                <div className="intro-video">
                  <AutoVideo videoName="lorax-intro-saturated-final" isPlaying={introPhase === "video"}/>
                </div>
                <div className="intro-skip" onClick={this.skipIntro.bind(this)}>
                  <div className="skip-text">Skip Intro</div>
                  <i className="universal-right-arrow"></i>
                </div>
              </div>
            )
          :
            null
        }

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
  isMobile: React.PropTypes.bool,
}


Container.defaultProps = {
  pages: window.SITE_DATA.pages,
  menu: window.SITE_DATA.menu
}


export default withRouter(Container);
