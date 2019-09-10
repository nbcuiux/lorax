
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import PageBase from './PageBase.js';
import Flickity from 'flickity';
import $ from "jquery";
import Tilter from "./Tilter.js";

export default class PageCast extends Component {


  constructor(props) {
    console.log("mounting page casr");
    super(props);

    this.state = {
      scrolledToCast: false,
      voiceCardOpen: true
    }

    this.onScroll = (e) => {
      console.log("WHAAT???");
      console.log("scrolling", $(window).scrollTop() );
      if (this.props.isCurrent) {
        if ($(window).scrollTop() >= $(".page-cast").offset().top) {
          window.removeEventListener("scroll", this.onScroll);
          this.setState({
            scrolledToCast: true
          });
        }
      }
    }
  }

  componentDidMount() {
    /*
    this.flkty = new Flickity( this.refs.list, {
      pageDots: false
    });
    */
    console.log("adding event listener...");
    window.addEventListener("scroll", this.onScroll);
  }

  openVoiceCard() {
    this.setState({
      voiceCardOpen: true
    })
  }

  render() {
    let classnames = ClassNames({
      "page-cast": true,
      "page-cast--has-scrolled": this.state.scrolledToCast
    })

    return (
      <PageBase
        videoName="Audrey_Final"
        posterSrc={window.STATIC_URL + "/img/audrey-fallback.jpg"}
        blurb="Way back in the days when the grass was still green and the pond was still wet and the clouds were still clean..."
        isCurrent={this.props.isCurrent}
        title="Characters"
        iconClass="universal-characters"
      >
      <div className={classnames}>
        <Slider>
          <PageCastItem
            characterName="The Lorax"
            characterDescription="Lorax is extremely protective of the Truffula Trees, and constantly warns the Onceler about what is happening to the surrounding area. As the Once-ler puts it he was 'shortish, and brownish, and oldish, and mossy, and he spoke with a voice that was sharpish and bossy.'"
            voiceName="Danny Devito"
            voiceDescription="Danny DeVito is an American actor, whose fame started to rise on the TV show Taxi. Since then, he's starred in feature films such as Twins and Ruthless People, and on the popular show It's Always Sunny in Philadelphia."
          >
            <img src={window.STATIC_URL + "/img/lorax-character-bg.jpg"} className="cast-bg" />
            <div className="cast-character lorax">
              <Tilter xFactor="-50" yFactor="-50" rotateFactor="2">
                <img src={window.STATIC_URL + "/img/lorax.png"}  />
              </Tilter>
            </div>
          </PageCastItem>

          <PageCastItem
            characterName="The Once-ler"
            characterDescription="The Once-ler was a greedy industrialist who cut down all of the beautiful, multi-coloured Truffula Trees to make a peculiar garment known as a thneed, 'a Fine-Something-That-All-People-Need'."
            voiceName="Ed Helms"
            voiceDescription="Ed Helms is an actor, comedian, singer and musician known for his work on The Daily Show, The Office and The Hangover films. Helms is also a guitarist/banjo player who presents an annual bluegrass festival."
          >
            <img src={window.STATIC_URL + "/img/onceler-character-bg.jpg"} className="cast-bg" />
            <div className="cast-character onceler">
              <Tilter xFactor="-50" yFactor="-50" rotateFactor="2">
                <img src={window.STATIC_URL + "/img/onceler.png"}  />
              </Tilter>
            </div>
          </PageCastItem>

          <PageCastItem
            characterName="Ted"
            characterDescription="Ted is a 12-year old boy and he comes to The Once-ler to hear about Truffula Trees so he can win the heart of Audrey."
            voiceName="Zac Efron"
            voiceDescription="Zac Efron is a Hollywood heartthrob who appears in films and on television, most notably in the High School Musical films."
          >
            <img src={window.STATIC_URL + "/img/ted-character-bg.jpg"} className="cast-bg" />
            <div className="cast-character ted">
              <Tilter xFactor="-50" yFactor="-50" rotateFactor="2">
                <img src={window.STATIC_URL + "/img/ted.png"}  />
              </Tilter>
            </div>
          </PageCastItem>

          <PageCastItem
            characterName="Audrey"
            characterDescription="Audrey is the neighbor of Ted. The back of her house has Truffula trees painted on it but her wish is to see a real one. Audrey is shown to be bright, friendly, and seems to be aware a little bit of Ted's crush on her. She's also very good at school."
            voiceName="Taylor Swift"
            voiceDescription="Taylor Swift is a Grammy-winning singer/songwriter. She is one of pop's top recording artists, having had roots in the world of country music."
          >
            <img src={window.STATIC_URL + "/img/audrey-character-bg.jpg"} className="cast-bg" />
            <div className="cast-character audrey">
              <Tilter xFactor="-50" yFactor="-50" rotateFactor="2">
                <img src={window.STATIC_URL + "/img/audrey.png"}  />
              </Tilter>
            </div>
          </PageCastItem>

          <PageCastItem
            characterName="Mr. O'Hare"
            characterDescription="Mr. O'Hare is The Mayor of Thneedville, who is also the Once-ler's successor of business. As early as late teenhood (when he still had braces), he found success after looking for 'the next best thing' after the thneed factory had to shut down for good."
            voiceName="Rob Riggle"
            voiceDescription="Rob Riggle is an American actor, comedian and retired United States Marine Corps Reserve officer. He is best known for his work as a correspondent on Comedy Central's The Daily Show from 2006 to 2008, as a cast member on Saturday Night Live from 2004 to 2005."
          >
            <img src={window.STATIC_URL + "/img/ohare-character-bg.jpg"} className="cast-bg" />
            <div className="cast-character ohare">
              <Tilter xFactor="-50" yFactor="-50" rotateFactor="2">
                <img src={window.STATIC_URL + "/img/ohare.png"}  />
              </Tilter>
            </div>
          </PageCastItem>

        </Slider>
      </div>
      </PageBase>
    );
  }
}

class Slider extends Component {

  componentDidMount() {
    this.flkty = new Flickity( this.refs.container, {
      pageDots: false
    });
  }

  render() {
    return (
      <div ref="container">
        { this.props.children }
      </div>
    );
  }

}


class PageCastItem extends Component {

  constructor(props) {
    super(props);
    this.state={
      voiceCardOpen: false
    }
  }

  openVoiceCard(e) {
    this.setState({
      voiceCardOpen: true
    })
  }

  closeVoiceCard(e) {
    e.stopPropagation();
    this.setState({
      voiceCardOpen: false
    })
  }

  render() {

    let classnames = ClassNames({
      'cast-item': true,
      'cast-item--voice-open': this.state.voiceCardOpen
    });

    return (
      <div>
        <div className={classnames}>
          {this.props.children}
          <div className="cast-card">
            <div className="character-name">{this.props.characterName}</div>
            <div className="character-description">{this.props.characterDescription}</div>
          </div>
          <div className="cast-voice-card-wrapper" onClick={ this.openVoiceCard.bind(this) }>
            <div className="cast-voice-card">
              <div className="voice-close" onClick={this.closeVoiceCard.bind(this)}>
                <i className="universal-close"></i>
              </div>
              <div className="voice-title">As Voiced By</div>
              <div className="voice-more">
                <div className="voice-name">{this.props.voiceName}</div>
                <div className="voice-description">{this.props.voiceDescription}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
