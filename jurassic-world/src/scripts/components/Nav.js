
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import DelayChain from '../lib/DelayChain';
import { getPoints, getPolygonPoints } from '../lib/hexagon';
import Icon from "./Icon";
export default class Nav extends Component {


  constructor(props) {
    super(props);
    this.state={
      isRicketing: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.isOpen !== nextProps.isOpen ||
        this.props.currRoute !== nextProps.currRoute) {
      return true;
    }

    return false;
  }

  render() {
    let {navItems, isOpen, pages, pageIndex } = this.props;
    let classnames = ClassNames({
      'nav': true,
      'nav--open': isOpen,
      'nav--ricketing': this.state.isRicketing
    });

    let hexHeight = 150;
    let hexWidth = hexHeight / (Math.sqrt(3)/2);
    let hexPoints = getPoints(hexHeight, hexWidth);

    let fullWidth = "500";
    let fullHeight = "500";

    let svgTranslateX = (fullWidth/2) - (hexWidth/2);
    let svgTranslateY = (fullHeight/2) - (hexHeight/2);
    let svgTransform = "translate(" + svgTranslateX + "," + svgTranslateY + ")";
    
    let logoHtml = '<image class="nav__logo" x="25.980762113533164" y="17" width="121.24355652982142px"' +
                   ' height="105px" xlink:href="' + STATIC_URL + '/img/flat-logo-white.png' + '"></image>';

    return (
      <div className={classnames}>
        <div className="nav-mask"></div>
        <div className="nav-inner" onClick={this.props.closeNav}>
          <div className="nav-list">
            <svg id="color-fill" width={fullWidth} height={fullHeight}>


              <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="red"/>
                <stop offset="50%" stopColor="black" stopOpacity="0"/>
                <stop offset="100%" stopColor="blue"/>
              </linearGradient>


              <defs>
                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="10 10" result="glow"/>
                  <feMerge>
                  <feMergeNode in="glow"/>
                  <feMergeNode in="glow"/>
                  <feMergeNode in="glow"/>
                  </feMerge>
                </filter>
                <pattern id="menuLogo" patternUnits="userSpaceOnUse" width="100%" height="100%">
                  <image href={ STATIC_URL + "/img/flat-logo-white.png" } x={hexWidth*0.15} y={17} width={hexWidth*0.7} height={hexHeight*0.7} />
                </pattern>
              </defs>
              <g className="nav-list__g">
                <g transform={svgTransform}>
                  {

                    pages.map((item, index)=>{
                      let isCurrent = (item.slug === this.props.currRoute ||
                          item.slug === "home" && this.props.currRoute=== "");
                      return <NavItem 
                        hexWidth={hexWidth} 
                        hexHeight={hexHeight} 
                        item={item} key={index} 
                        index={index}
                        slug={item.slug}
                        onClick={ this.props.navTo } 
                        currPageIndex={pageIndex}
                        isCurrent={isCurrent} />
                    })
                  }
                  <g ref="logo" dangerouslySetInnerHTML={{__html: logoHtml}}>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}



class NavItem extends Component {


  constructor(props) {
    super(props);
    this.dc = new DelayChain;
    this.state = {
      isRicketing: false,
      size: 0.3
    }
  }

  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.onClick(this.props.slug);
  }

  onMouseEnter(e) {
    this.setState({
      isRicketing: true
    })

    this.dc.cancel();

    this.dc.delay(900, ()=>{
      this.setState({
        isRicketing: false
      });
    });

  }

  render() {
    let {item, currPageIndex, index, hexWidth, hexHeight, isCurrent } = this.props;

    let hexPoints = getPoints(hexHeight, hexWidth);
    let classnames= ClassNames('nav-item--' + item.templateName, {
      'nav-item': true,
      'nav-hex': true,
      'nav-item--before': index < currPageIndex,
      'nav-item--curr': isCurrent,
      'nav-item--after': index > currPageIndex,
      'nav-item--ricketing': this.state.isRicketing
    });

    let iconId;
    switch (item.templateName) {
      case "home":
        iconId="icon-home-o"
        break;
      case "videos":
        iconId="icon-video-o"
        break;
      case "gallery":
        iconId="icon-gallery-o"
        break;
      case "cast":
        iconId="icon-cast-o"
        break;
      case "dinosaurs":
        iconId="icon-dinosaurs-o"
        break;
      case "tickets":
        iconId="icon-tickets-o"
        break;
    }

    let angle = this.props.index * 60;
    let hexTransform="rotate(" + angle + ") translate(0," + (-hexHeight-10) + ") rotate(" + (-angle) + ")";

    return (
      <g transform={hexTransform} className={classnames} width={hexWidth} height={hexHeight} onClick={this.onClick.bind(this)}>
        <polygon className="nav-item__glow" points={getPolygonPoints(hexPoints)}></polygon>
        <polygon className="nav-item__hexagon" fill="url(#Gradient2)" points={getPolygonPoints(hexPoints)}></polygon>
        <svg className="nav-item__inner" width={hexWidth} height={hexHeight} x="0" y="0" viewBox="0 0 100 100">
          <text className="nav-item__caption" x={50} y={75} textAnchor="middle">{item.post_title}</text>
          <Icon className="nav-item__icon" width={30} height={30} x={50} y={22} iconId={iconId}  />
        </svg>
      </g>
    );
  }
}
