
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import PageBase from './PageBase.js';
import Flickity from 'flickity';
import $ from "jquery";
import Tilter from "./Tilter.js";
import AutoVideo from "./AutoVideo";
import { getPageData } from '../lib/pageData.js';

export default class PageCast extends Component {


  constructor(props) {
    super(props);

    this.state = {
      scrolledToCast: false,
      voiceCardOpen: true
    }

    this.onScroll = (e) => {
      if ($(window).scrollTop() >= $(".page-cast").offset().top - 100) {
        window.removeEventListener("scroll", this.onScroll);
        this.setState({
          scrolledToCast: true
        });
      }
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
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
        videoName="Tour_Ball_Final"
        posterSrc={window.STATIC_URL + "/img/Tour_Ball.jpg"}
        blurb="The Stegosaurus’ brain is about the size of a walnut."
        isCurrent={this.props.isCurrent}
        title="Cast & Crew"
        iconClass="icon-cast-crew"
      >
      <div className={classnames}>
        <Slider>

          <PageCastItem
            characterName="Owen"
            characterDescription="Owen Grady, prior to his occupation in Jurassic World, was a member of the U.S. Navy. For an unstated number of years he was an active service member before ending his term of service and being hired by Jurassic World to train and research the behaviors of the park's Velociraptor pack in that consisted of Blue, Charlie, Delta, and Echo."
            voiceName="Chris Pratt"
            voiceDescription="Christopher Michael Pratt is an American film and television actor. He came to prominence from his television roles, including Bright Abbott in Everwood (2002), Ché in The O.C. (2003), and Andy Dwyer and Parks and Recreation (2009), and notable film roles in Moneyball (2011), The Five-Year Engagement (2012), Zero Dark Thirty (2012), Delivery Man (2013), and Her (2013)."
            videoName="Owen_Breathing_Final"
            posterSrc={window.STATIC_URL + "/img/Owen_Breathing.jpg"}
          >
          </PageCastItem>
          <PageCastItem
            characterName="Claire Dearing"
            characterDescription="Claire Dearing is the park operations manager of Jurassic World, the younger sister of Karen Mitchell, the sister-in-law of Scott Mitchell and the aunt of Zach and Gray. At some point in her life and before or after Jurassic World's opening, she was hired to be senior assets manager for the titular dinosaur park."
            voiceName="Bryce Dallas Howard"
            voiceDescription="Bryce Dallas Howard was born on March 2, 1981, in Los Angeles, California. She was conceived in Dallas, Texas (the reason for her middle name). Her father, Ron Howard, is a former actor turned Oscar-winning director. Her mother is actress and writer Cheryl Howard (née Alley)."
            videoName="Claire_Flare_Final"
            posterSrc={window.STATIC_URL + "/img/Claire_Flare.jpg"}
          >
          </PageCastItem>
          <PageCastItem
            characterName="Dr. Henry Wu"
            characterDescription="Wu was the chief geneticist in Jurassic Park and head of the team that created the dinosaurs. In the film he reveals that all the dinosaurs on the island are female. In the novel, Wu has a much larger part; he proposes genetically altering further saurian creations to make them more manageable, something that Hammond opposes."
            voiceName="BD Wong"
            voiceDescription="BD Wong was born and raised in San Francisco, California. He made his Broadway debut in 'M. Butterfly.' He is the only actor to be honored with the Tony Award, Drama Desk Award, Outer Critics Circle Award, Clarence Derwent Award, and Theater World Award for the same performance."
            videoName="Henry_Wu_Final"
            posterSrc={window.STATIC_URL + "/img/Henry_Wu.jpg"}
          >
          </PageCastItem>

        </Slider>
      </div>

      <div className="page-crew">

        <svg  viewBox="0 0 359.9 415.6">
        <polygon className="crew-hexagon" points="359.4,311.4 180,415.1 0.5,311.4 0.5,104.2 180,0.6 359.4,104.2 "/>
        </svg>

      <div className="crew-copy">
        <div className="crew-member">
          <div className="crew-title">Directed by</div>
          <div className="crew-name">Colin Trevorrow</div>
        </div>

        <div className="crew-member">
          <div className="crew-title">Produced by</div>
          <div className="crew-name">Patrick Crowley &amp; Frank Marshall</div>
        </div>

        <div className="crew-member">
          <div className="crew-title">Screenplay by</div>
          <div className="crew-name">Rick Jaffa &amp; Amanda Silver</div>
        </div>

        <div className="crew-member">
          <div className="crew-title">Music by</div>
          <div className="crew-name">Michael Giacchino</div>
        </div>

        <div className="crew-member">
          <div className="crew-title">Casting by</div>
          <div className="crew-name">John Papsidera</div>
        </div>


      </div>

      </div>
      </PageBase>
    );
  }
}

PageCast.defaultProps = {
  pageData: getPageData("cast")
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

    console.log("The poster src in PageCastItem", this.props.posterSrc);

    return (
      <div>
        <div className={classnames}>
          <AutoVideo
            videoName={this.props.videoName}
            posterSrc={this.props.posterSrc}
            loop={true}
            isPlaying={true} />
          <div className="cast-character-wrapper">
            {this.props.children}
          </div>
          <div className="cast-card-wrapper">
            <div className="cast-flipper">
              <div className="cast-card">
                <div className="cast-card-bg">
                  <svg width="100%" height="100%" viewBox="0 0 359.95 415.633">
                    <polygon id="XMLID_81_" points="359.4,311.4 180,415.1 0.5,311.4 0.5,104.2 180,0.6 359.4,104.2 "/>
                  </svg>
                </div>
                <div className="cast-card__content">
                  <div className="character-name">{this.props.characterName}</div>
                  <div className="character-description">{this.props.characterDescription}</div>
                  <div className="cast-flip-trigger" onClick={ this.openVoiceCard.bind(this) }>
                    <i className="iconcss icon-actor"></i>
                    <div className="cast-flip-text">Actor bio</div>
                  </div>
                </div>
              </div>
              <div className="cast-voice-card">
                <div className="cast-card-bg">
                  <svg width="100%" height="100%" viewBox="0 0 359.95 415.633">
                    <polygon id="XMLID_81_" points="359.4,311.4 180,415.1 0.5,311.4 0.5,104.2 180,0.6 359.4,104.2 "/>
                  </svg>
                </div>
                <div className="cast-card__content">
                  <div className="voice-name">{this.props.voiceName}</div>
                  <div className="voice-description">{this.props.voiceDescription}</div>
                  <div className="cast-flip-trigger" onClick={ this.closeVoiceCard.bind(this) }>
                    <i className="iconcss icon-actor"></i>
                    <div className="cast-flip-text">Character Info</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
