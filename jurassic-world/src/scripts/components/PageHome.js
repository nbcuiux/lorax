import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import AutoVideo from './AutoVideo.js';
import Icon from './Icon';
import $ from "jquery";
import { getPageData } from '../lib/pageData.js';
export default class PageHome extends Component {


  constructor(props) {
    super(props);
  }

  openTrailer() {
    this.context.openGallery([{
      embed_url: "https://www.youtube.com/embed/RFinNxS5KN4"
    }], 0);
  }

  goToTickets() {
    this.context.navTo("get-tickets");
  }

  onArrowClick() {
    let top = $(window).height() - 60;
    $("html,body").animate({
      scrollTop: top
    });
  }

  render() {
    return (
      <div className="page-home">
        <div className="page-home__top">
          <AutoVideo
            posterSrc={window.STATIC_URL + "/img/homepage-fallback.jpg"}
            videoName="homepage-3-final" loop={true} isPlaying={true} />
          <div className="home-hexs">
            <div className="home-hexs__left">
              <svg className="home-hex-1" x="0px" y="0px" viewBox="0 0 394.1 305.9">
                <g className="home-hex__item home-hex__item-1" onClick={this.openTrailer.bind(this)}>
                  <HomeHex points="227.6,287 172.5,193.5 227.6,100 337.8,100 393,193.5 337.8,287" />
                  <path d="M338.4,288H227l-55.7-94.5l0.3-0.5L227,99h111.4l55.7,94.5l-0.3,0.5L338.4,288z M228.2,286
                    h109.1l54.5-92.5L337.3,101H228.2l-54.5,92.5L228.2,286z"/>
                  <g className="home-hex__hex-content" transform="translate(285, -5)">
                    <Icon className="home-hex__icon" x="0" y="130" width="70px" height="70px" iconId="icon-home-eye" />
                    <text className="home-hex__caption-1" width="100px" x="0" y="232" textAnchor="middle">Watch the</text>
                    <text className="home-hex__caption-2" width="100px" x="0" y="260" textAnchor="middle">TRAILER</text>
                  </g>
                </g>
                <g className="home-hex__item home-hex__item-2">
                  <HomeHex points="56.3,188 1.2,94.5 56.3,1 166.5,1 221.7,94.5 166.5,188" />
                  <path d="M167.1,189H55.7L0,94.5L55.7,0h111.4l55.7,94.5l-0.3,0.5L167.1,189z M56.9,187H166l54.5-92.5
                    L166,2H56.9L2.3,94.5L56.9,187z"/>
                </g>
                <g className="home-hex__item home-hex__item-3">
                  <HomeHex points="227.9,91 203.9,50.2 227.9,9.4 276,9.4 300.1,50.2 276,91" />
                  <path d="M276.6,92h-49.2l-24.6-41.8l24.6-41.8h49.2l24.6,41.8L276.6,92z M228.5,90h47l23.5-39.8
                    l-23.5-39.8h-47l-23.5,39.8L228.5,90z"/>
                </g>
                <g className="home-hex__item home-hex__item-4">
                  <HomeHex points="101.2,304.9 69.1,250.4 101.2,196 165.4,196 197.5,250.4 165.4,304.9" />
                  <path d="M165.9,305.9h-65.3l-32.7-55.4l32.7-55.4h65.3l32.7,55.4L165.9,305.9z M101.8,303.9h63
                    l31.5-53.4L164.8,197h-63l-31.5,53.4L101.8,303.9z"/>
                </g>
              </svg>
            </div>
            <div className="home-hexs__right">
              <svg viewBox="0 0 394.5 312">
                <g className="home-hex__item home-hex__item-5" onClick={this.goToTickets.bind(this)}>
                  <HomeHex points="228,213.4 172.8,119.9 228,26.4 338.2,26.4 393.3,119.9 338.2,213.4" />
                  <path d="M338.8,214.4H227.4l-55.7-94.5l0.3-0.5l55.4-94h111.4l55.7,94.5l-0.3,0.5L338.8,214.4z
                     M228.5,212.4h109.1l54.5-92.5l-54.5-92.5H228.5L174,119.9L228.5,212.4z"/>
                  <g className="home-hex__hex-content" transform="translate(283, -76)">
                    <Icon className="home-hex__icon" x="0" y="130" width="70px" height="70px" iconId="icon-tickets-o" />
                    <text className="home-hex__caption-1" width="100px" x="0" y="232" textAnchor="middle">Get the</text>
                    <text className="home-hex__caption-2" width="100px" x="0" y="260" textAnchor="middle">TICKETS</text>
                  </g>
                </g>
                <g className="home-hex__item home-hex__item-6">
                  <HomeHex points="99.2,116.1 65.3,58.5 99.2,1 167.1,1 201,58.5 167.1,116.1" />
                  <path d="M167.6,117.1h-69L64.2,58.5L98.7,0h69l34.5,58.5L167.6,117.1z M99.8,115.1h66.7l33.3-56.5
                    L166.5,2H99.8L66.5,58.5L99.8,115.1z"/>
                </g>
                <g className="home-hex__item home-hex__item-7">
                  <HomeHex points="56.3,311 1.2,217.5 56.3,124.1 166.5,124.1 221.7,217.5 166.5,311" />
                  <path d="M167.1,312H55.7L0,217.5l55.7-94.5h111.4l55.7,94.5l-0.3,0.5L167.1,312z M56.9,310H166
                    l54.5-92.5L166,125.1H56.9L2.3,217.5L56.9,310z"/>
                </g>
                <g className="home-hex__item home-hex__item-8">
                  <HomeHex points="227.2,296.3 205.2,259 227.2,221.6 271.2,221.6 293.2,259 271.2,296.3" />
                  <path d="M271.8,297.3h-45.2L204,259l22.6-38.3h45.2l22.6,38.3L271.8,297.3z M227.7,295.3h42.9l21.4-36.3
                    l-21.4-36.3h-42.9L206.3,259L227.7,295.3z"/>
                </g>
              </svg>


            </div>
          </div>
          <div className="page-down bounce" onClick={this.onArrowClick.bind(this)}>
            <i className="iconcss icon-chevron-down"></i>
          </div>
        </div>
        <HomeGrid />

      </div>
    );
  }
}



// Open gallery is defined in Container.js
PageHome.contextTypes = {
  openGallery: React.PropTypes.func,
  navTo: React.PropTypes.func
};


class HomeHex extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <g className="home-hex__outer">
        <polygon className="home-hex__shadow" points={this.props.points}/>
        <polygon className="home-hex__flash" points={this.props.points}/>
        <polygon className="home-hex__hex" points={this.props.points}/>
      </g>
    );
  }

}




class HomeGrid extends Component {
  render () {
    return (
      <div className="homepage-grid">
        <HomeGridItem>
          <HomeTileYoutube
            embedUrl="https://www.youtube.com/embed/l9EkK8yjFGU"
            imgSrc={window.STATIC_URL + "/img/lego-trailer.jpg"}
            iconClass="icon-security-camera"
            caption="Lego Jurassic World: The Indominus Escape"
          />
        </HomeGridItem>
        <HomeGridItem>
          <HomeTileLink
            internal="dinosaurs"
            href="https://www.fi.edu/exhibit/jurassic-world"
            caption="See the dinosaurs"
            imgSrc={window.STATIC_URL + "/img/dino-tile.jpg"}
            iconClass="icon-egg"
          />
        </HomeGridItem>
        <HomeGridItem>
          <HomeTileVideo videoName="roar" />
          <HomeTileFact
            backgroundColor="#637BF7"
            content="Pterodactyl is the common term for the winged reptiles properly called pterosaurs."
            iconClass="icon-pterodactyl"
          />
        </HomeGridItem>
        <HomeGridItem>
          <HomeTileLinkWithLogoInTopRight
            logoImgSrc={window.STATIC_URL + "/img/franklin-logo.png"}
            href="https://www.fi.edu/exhibit/jurassic-world"
            imgSrc={window.STATIC_URL + "/img/dinosaurs.jpg"}
            caption="Jurassic World: The Exhibition"
            description="This immersive Jurassic experience will make its U.S. debut this November."
            iconClass="icon-link"
          />
        </HomeGridItem>
        <HomeGridItem>
          <HomeTileFact
            backgroundColor="#e9ab00"
            content="Triceratops were plant eaters (herbivores) which grazed in large herds together."
            iconClass="icon-triceratops"
          />
          <img className="grid-image" src={window.STATIC_URL + "/img/quote-1.jpg"} />
        </HomeGridItem>

        <HomeGridItem>
          <HomeTileLink
            href="http://www.lego.com/en-us/jurassicworld/games/videogames/"
            caption="LEGO Jurassic World Mobile Game"
            imgSrc={window.STATIC_URL + "/img/lego-game.jpg"}
            iconClass="icon-link"
            description="Experience the excitement of all Jurassic films in one mobile game for the first time!"
          />
        </HomeGridItem>
        <HomeGridItem>
          <HomeTileYoutube
            embedUrl="https://www.youtube.com/embed/dCWOTZA1V2o"
            imgSrc={window.STATIC_URL + "/img/train.jpg"}
            iconClass="icon-security-camera"
            caption="See Jurassic World then Dare to Ride It!"
          />
        </HomeGridItem>
        <HomeGridItem>
          <HomeTileFact
            backgroundColor="#e78034"
            content="Parasaurolophus lived in the late Cretaceous Period, around 75 million years ago."
            iconClass="icon-parasaurolophus"
          />
          <img className="grid-image" src={window.STATIC_URL + "/img/quote-2.jpg"} />
        </HomeGridItem>
        <HomeGridItem>
          <HomeTileLink
            href="https://www.instagram.com/p/BEClBnmweQa/?hl=en"
            caption="Instagram"
            imgSrc={window.STATIC_URL + "/img/award.jpg"}
            iconClass="icon-insta"
          />
        </HomeGridItem>
        <HomeGridItem>
          <HomeTileLink
            href="http://sweepstakes-jurassic-world.nbcuxlab.com/"
            caption="Enter the Jurassic World Sweepstakes!"
            imgSrc={window.STATIC_URL + "/img/sweepstakes.jpg"}
            iconClass="icon-link"
          />
          <HomeTileFact
            backgroundColor="#68AA50"
            content="The Brachiosaurus is a type of dinosaur known for reaching incredible sizes."
            iconClass="icon-brachiosaurus"
          />
        </HomeGridItem>
      </div>
    )
  }
}



class HomeGridItem extends Component {
  render() {
    return (
      <div className="homepage-grid__item">
          {
            React.Children.map(this.props.children, (child, i) => {
              return (
                <div className="homepage-grid__item-inner">
                  { child }
                </div>
              )
            })
          }
      </div>
    )
  }
}


class HomeTileLink extends Component {

  onClick(e) {
    if (this.props.internal) {
      e.preventDefault();
      this.context.navTo(this.props.internal);
    }
  }

  render () {
    return (
      <a className="homepage-tile__link"
        href={this.props.href}
        onClick={this.onClick.bind(this)}
        target="_blank"
      >
        <img className="homepage-tile__link-bg-img" src={this.props.imgSrc} />
        <div className="homepage-tile__link-hover">
          <div className="homepage-tile__link-icon hexIcon">
             <i className={"iconcss " + this.props.iconClass }></i>
          </div>
          <div className="homepage-tile__link-caption">{ this.props.caption}</div>
          {
            this.props.description ?
              <div className="homepage-tile__link-desc">{ this.props.description}</div>
            :
              null
          }
        </div>
      </a>
    )
  }
}

// Open gallery is defined in Container.js
HomeTileLink.contextTypes = {
  navTo: React.PropTypes.func
};

class HomeTileLinkWithLogoInTopRight extends Component {

  onClick(e) {
    if (this.props.internal) {
      e.preventDefault();
      this.context.navTo(this.props.internal);
    }
  }

  render () {
    return (
      <a className="homepage-tile__link"
        href={this.props.href}
        onClick={this.onClick.bind(this)}
        target="_blank"
      >
        <img className="homepage-tile__link-bg-img" src={this.props.imgSrc} />
        <img className="homepage-tile__link-logo" src={this.props.logoImgSrc} />
        <div className="homepage-tile__link-hover">
          <div className="homepage-tile__link-icon hexIcon">
             <i className={"iconcss " + this.props.iconClass }></i>
          </div>
          <div className="homepage-tile__link-caption">{ this.props.caption}</div>
          {
            this.props.description ?
              <div className="homepage-tile__link-desc">{ this.props.description}</div>
            :
              null
          }
        </div>
      </a>
    )
  }
}






class HomeTileFact extends Component {
  render () {
    return (
      <div className="homepage-tile__fact" style={{ backgroundColor: this.props.backgroundColor }}>
        <i className={"homepage-tile__fact-icon iconcss " + this.props.iconClass}></i>
        <div className="homepage-tile__fact-question">Dino-fact:</div>
        <div className="homepage-tile__fact-fact">{this.props.content}</div>
      </div>
    )
  }
}



class HomeTileYoutube extends Component {
  constructor(props) {
    super(props);
    this.state= {
      isPlaying: false
    }
  }

  onClick() {
    this.setState({
      isPlaying: true
    });
  }

  render () {
    let classnames = ClassNames({
      'homepage-tile__youtube': true,
      'homepage-tile__youtube--playing': this.state.isPlaying
    });

    return (
      <div className={classnames}>
          <div
            className="homepage-tile__youtube-cover"
            style={{ backgroundImage: "url(" + this.props.imgSrc + ")" }}
            onClick={this.onClick.bind(this)}
          >
        </div>
        <div className="homepage-tile__link-hover">
          <div className="homepage-tile__link-icon hexIcon">
             <i className={"iconcss " + this.props.iconClass }></i>
          </div>
          <div className="homepage-tile__link-caption">{ this.props.caption}</div>
        </div>
        {
          this.state.isPlaying ?
            <iframe id="ytplayer" type="text/html" width="100%" height="100%"
              src={this.props.embedUrl + "?modestbranding=1&autohide=0&showinfo=0&controls=1&autoplay=1" }
              frameBorder="0">
            </iframe>
          :
            null
        }
      </div>
    )
  }
}


class HomeTileVideo extends Component {
  onClick() {
    this.refs.theVideo.play();
  }

  render () {
    return (
      <div className="homepage-tile__video" onClick={this.onClick.bind(this)}>
        <video ref="theVideo" ref="theVideo" poster={ window.STATIC_URL + "/img/roar.jpg" }>
          <source src={window.STATIC_URL + "/video/" + this.props.videoName + ".mp4"} type="video/mp4" />
          <source src={window.STATIC_URL + "/video/" + this.props.videoName + ".ogv"} type="video/ogg" />
          <source src={window.STATIC_URL + "/video/" + this.props.videoName + ".webm"} type="video/webm" />
        </video>
      </div>
    )
  }

}



PageHome.defaultProps = {
  pageData: getPageData("home")
}
