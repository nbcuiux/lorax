
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import PageVideoBackground from './PageVideoBackground.js';
import AutoVideo from './AutoVideo.js';
import Tilter from './Tilter';
export default class PageHome extends Component {


  constructor(props) {
    super(props);
  }

  openTrailer() {
    this.context.openGallery([{
      embed_url: "https://www.youtube.com/embed/1bHdzTUNw-4"
    }], 0);
  }

  goToTickets() {
    this.props.navTo("tickets");
  }

  render() {
    return (
      <div className="homepage">
        {
            <AutoVideo
              videoName="Marshmallow_v3_Final"
              posterSrc={window.STATIC_URL + "/img/marshmallows-fallback.jpg"}
              isPlaying={true}
              loop={true}/>
        }

        <div className="">
          <div className="tilting-image marshmallow-1 marshmallow">
            <Tilter xFactor="15" yFactor="-15" rotateFactor="1">
              <img src={window.STATIC_URL + "/img/marshmallow-1.png"}/>
            </Tilter>
          </div>
          <div className="tilting-image marshmallow-2 marshmallow">
            <Tilter xFactor="-15" yFactor="10" rotateFactor="-10">
              <img src={window.STATIC_URL + "/img/marshmallow-2.png"}/>
            </Tilter>
          </div>
          <div className="tilting-image marshmallow-3 marshmallow">
            <Tilter xFactor="10" yFactor="10" rotateFactor="9">
              <img src={window.STATIC_URL + "/img/marshmallow-3.png"}/>
            </Tilter>
          </div>
          <div className="tilting-image marshmallow-4 marshmallow">
            <Tilter xFactor="15" yFactor="15" rotateFactor="4">
              <img src={window.STATIC_URL + "/img/marshmallow-1.png"}/>
            </Tilter>
          </div>
          <div className="tilting-image marshmallow-5 marshmallow">
            <Tilter xFactor="25" yFactor="-25" rotateFactor="10">
              <img src={window.STATIC_URL + "/img/marshmallow-5.png"}/>
            </Tilter>
          </div>
          <div className="tilting-image marshmallow-6 marshmallow">
            <Tilter xFactor="25" yFactor="25" rotateFactor="-10">
              <img src={window.STATIC_URL + "/img/marshmallow-6.png"}/>
            </Tilter>
          </div>
          <div className="tilting-image marshmallow-7 marshmallow">
            <Tilter xFactor="-25" yFactor="25" rotateFactor="5">
              <img src={window.STATIC_URL + "/img/marshmallow-7.png"}/>
            </Tilter>
          </div>
          <div className="tilting-image marshmallow-trailer marshmallow" onClick={this.openTrailer.bind(this)}>
            <Tilter xFactor="30" yFactor="-30" rotateFactor="20">
              <img src={window.STATIC_URL + "/img/marshmallow-trailer.png"}/>
            </Tilter>
          </div>
          <div className="tilting-image marshmallow-tickets marshmallow" onClick={this.goToTickets.bind(this)} >
            <Tilter xFactor="-30" yFactor="30" rotateFactor="-20">
              <img src={window.STATIC_URL + "/img/marshmallow-tickets.png"}/>
            </Tilter>
          </div>
        </div>
      </div>
    );
  }
}



// Open gallery is defined in Container.js
PageHome.contextTypes = {
  openGallery: React.PropTypes.func,
  isMobile: React.PropTypes.bool
};
