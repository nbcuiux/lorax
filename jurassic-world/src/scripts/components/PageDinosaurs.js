
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import PageBase from './PageBase.js';
import GalleryGrid from "./GalleryGrid.js";
import $ from "jquery";
import DelayChain from "../lib/DelayChain";
import objectFitImages from 'object-fit-images';
import { getPageData } from '../lib/pageData.js';

let dinoItems = [

  {
    title: "Tyrannosaurus Rex",
    content: "Among the largest carnivores to have ever stalked the planet, Tyrannosaurus was one fearsome dinosaur. Tyrannosaurus fossils have shown toothmarks that could have only been made by their own kind, though we’ve never seen a T. rex family feud at Jurassic World!",
    iconClass: "icon-trex",
    imgClass: "trex"
  },


  {
    title: "Pteranodon",
    content: " The Pteranodon is our Jurassic World’s biggest pterosaur, or flying reptile. With a wider wingspan than any known bird, it’s primarily a fish eater, though Pteranodon is very aggressive.",
    iconClass: "icon-pteranodon",
    imgClass: "pteranodon"
  },


  {
    title: "Velociraptor",
    content: "Safety First! The Velociraptor is our park’s most intelligent dinosaur. Always on the hunt, they are not yet trained for public display.",
    iconClass: "icon-raptor",
    imgClass: "raptor"
  },

  {
    title: "Stegosaurus",
    content: "Stegosaurus is one of the most elaborately-ornamented dinosaurs. This Jurassic herbivore is decked with 17 broad bony plates from its neck down its back, with the tip of its tail bearing four long spikes. When threatened, Stegosaurus will turn its head back to look over its shoulder, to better aim the swing of its dangerous tail.",
    iconClass: "icon-stegosaurus",
    imgClass: "stegosaurus"
  }

]




export default class PageDinosaurs extends Component {


  constructor(props) {
    super(props);

    this.state = {
      scrolledDown: false,
      dinoItems: dinoItems,
      curr: null,
      nextIndex: null,
      navPhase: null
    }

    this.onScroll = (e) => {
      if ($(window).scrollTop() >= $(this.refs.top).offset().top - 100) {
        $(document).off("scroll", this.onScroll);
        this.navTo(0);
      }
    }
    this.navTo = this.navTo.bind(this);
  }


  componentDidMount() {
    $(document).on("scroll", this.onScroll);
    this.dc = new DelayChain();
  }

  componentWillUnmount() {
    $(document).off("scroll", this.onScroll);
  }

  navTo(index) {

    if (this.state.curr === index) {
      return;
    }

    this.dc.cancel();

    this.dc.delay(1, ()=>{
      this.setState({
        navPhase: "start",
        nextIndex: index
      });
    }).delay(10, ()=> {
      this.setState({
        navPhase: "transitioning",
      });
    }).delay(2500, ()=>{
      this.setState({
        navPhase: "finish",
      });
    }).delay(1, ()=>{
      this.setState({
        navPhase: null,
        nextIndex: null,
        curr: index
      });
    })

  }

  render() {
    let imgList = this.props.pageData.gallery;
    let { dinoItems, navPhase, nextIndex, curr } = this.state;
    let classnames = ClassNames({
      'page-dinosaurs': true,
      'page-dinosaurs--has-scrolled': this.state.scrolledDown
    });

    classnames = classnames + " page-dinosaurs--nav-phase-" + navPhase;
    return (
      <PageBase
        videoName="Large_Dinosaur_Eye_Final"
        blurb="Dinosaurs are both hot- and cold-blooded. Usually carnivores are hot; herbivores run cold."
        isCurrent={this.props.isCurrent}
        title="Dinosaurs"
        iconClass="icon-egg"
        posterSrc={window.STATIC_URL + "/img/Large_Dinosaur_Eye.jpg"}
      >
        <div className={classnames} ref="top">
          <div className="dino-list">
            {
              dinoItems.map((item, index)=>{
                return (
                  <DinoItem
                    navTo={this.navTo}
                    item={item}
                    allItems={dinoItems}
                    isCurrent={curr===index}
                    isNext={nextIndex===index}
                    navPhase={navPhase}
                    key={index}
                    thisIndex={index}
                  />)
              })
            }
          </div>
        </div>
      </PageBase>
    );
  }
}


PageDinosaurs.defaultProps = {
  pageData: getPageData("dinosaurs")
}


function startdecrypt(encrypted, decrypted) {
    // Original text, split into an array and reversed (for faster pop())
    var originalText = decrypted.textContent.split('').reverse();
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
      if(i++ % 10 === 0) decryptedText += originalText.pop();

      // Display
      decrypted.textContent = decryptedText;
      encrypted.textContent = shuffledText;

      // Stop when done
      if(!shuffledText.length) clearInterval(shuffleInterval);

    // 50ms looks more dramatic
    },50);
}



class DinoItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hoveredIcon: null
    }
  }

  componentDidMount() {
    /*
    objectFitImages([
      this.refs.img1,
      this.refs.img2,
      this.refs.img3
    ])
    */
  }

  iconHover(index) {
    this.setState({
      hoveredIcon: index
    });
  }

  iconHoverOff() {
    this.setState({
      hoveredIcon: null
    });
  }

  render() {

    let { item, allItems, isCurrent, isNext, navPhase, thisIndex } = this.props;

    let classnames = ClassNames({
      'dino-item': true,
      'dino-item--enter-start': isNext && navPhase === "start",
      'dino-item--enter-active': isNext && navPhase === "transitioning" || navPhase === "finish",
      'dino-item--curr': isCurrent && navPhase === null,
      'dino-item--leave-start': isCurrent && navPhase === "start",
      'dino-item--leave-active': isCurrent && navPhase === "transitioning",
    })

    classnames = classnames + " " + item.imgClass;

    return (
      <div className={classnames}>
        <div className="dino-item__graphic">
          <div className="dino-item__hex">
            <svg className="dino-item__hex-svg" viewBox="0 0 838 911.6" preserveAspectRatio="xMaxYMid slice" width="100%" height="100%">
              <polyline className="dino-item__hex-main" points="-1259,2.1 572.1,2.1 834,455.6 572.1,909.1 -1259,909.1 "/>
              <polyline className="dino-item__hex-beam" points="-1259,2.1 572.1,2.1 834,455.6 572.1,909.1 -1259,909.1 "/>
            </svg>
          </div>
          <div className="dino-item__imgs">
            <img ref="img1" src={window.STATIC_URL + "/img/" + item.imgClass + "-1.png"} />
            <img ref="img2" src={window.STATIC_URL + "/img/" + item.imgClass + "-2.png"} />
            <img ref="img3" src={window.STATIC_URL + "/img/" + item.imgClass + "-3.png"} />
          </div>
        </div>
        <div className="dino-item__info">
          <div className="dino-item__info-inner" >
            <i className={ "iconcss " + item.iconClass }>
            </i>
            <div className="dino-item__heading">
              <span ref="decrypted">{ item.title }</span>
              <span ref="encrypted"></span>
            </div>
            <div className="dino-item__content">
              { item.content }
            </div>
            <div className="dino-item__links">
              {
                allItems.map((item, index)=> {
                  let classnames = ClassNames(
                    item.iconClass,
                    {
                      'iconcss': true,
                      'disabled': index === thisIndex
                    }
                  )
                  return (
                    <i
                      key={index}
                      className={ classnames }
                      onClick={this.props.navTo.bind(this, index)}
                      onMouseEnter={this.iconHover.bind(this,index)}
                      onMouseLeave={this.iconHoverOff.bind(this)}
                    >
                    </i>
                  );
                })
              }
            </div>
            <div className="dino-item__select">
              {
                (this.state.hoveredIcon === null) ?
                  "SELECT YOUR DINOSAUR"
                :
                  allItems[this.state.hoveredIcon].title
              }
            </div>
          </div>
        </div>
      </div>
    )

  }

}
