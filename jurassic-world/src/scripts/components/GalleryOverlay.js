
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import DelayChain from '../lib/DelayChain';
import Flickity from 'flickity';

export default class GalleryOverlay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      openPhase: "closed"
    }

    this.dc = new DelayChain;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.items !== nextProps.items) {
      if (nextProps.items.length > 0) {
        this.open(nextProps.items);
      }
      else {
        this.close();
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.openPhase === "opening") {
      // Destroy and reinstantiate flickity
      this.setupFlickity();
    }
  }

  setupFlickity() {
    this.flkty = new Flickity( this.refs.list, {
      initialIndex: this.props.initialIndex
    });
    this.refs.container.focus();
  }

  open(items) {
    this.dc.cancel();
    this.setState({
      openPhase: "opening",
      items: items
    });

    this.dc.delay(10, ()=>{
      this.setState({
        openPhase: "open"
      });
    });

    console.log("The container", this.refs.container);
  }

  close() {
    this.dc.cancel();

    this.setState({
      openPhase: "closing"
    });

    this.dc.delay(500, ()=>{
      // Destroyt flickity, then remove the items
      this.flkty.destroy();
      this.setState({
        openPhase: "closed",
        items: []
      });
    })
  }

  onKeyUp(e) {
    if (e.keyCode === 27) {
      this.close();
    }
  }


  render() {

    let items = this.state.items;
    let classnames = ClassNames({
      'gallery-overlay': true
    })

    classnames = classnames + " gallery-overlay--" + this.state.openPhase;

    return (
      <div className={classnames} tabIndex="0" onKeyUp={this.onKeyUp.bind(this)} ref="container">
        <div className="gallery-overlay__close iconcss icon-close" onClick={this.close.bind(this)}></div>
        <div className="gallery-overlay__list" ref="list">
          {
            items.map((item, index) => {
              return (
                <GalleryItem item={item} key={index} index={index} />
              )
            })
          }
        </div>
      </div>
    );
  }
}


class GalleryItem extends Component {

  constructor(props) {
    super(props);
  }

  isImage(item) {
    return typeof item === "string";
  }


  render() {
    let { item } = this.props;
    return (
      <div className="gallery-item">
        {
          this.isImage(item) ?
            <div className="gallery-item--inner">
              <div>
                <img src={item} />
                <a className="standard-cta" href={item} download="jurassic_world" target="_blank">Download</a>
              </div>
            </div>
          :
            <div className="gallery-item__video-wrapper">
              <div className="gallery-item__video">
                <iframe width="100%" height="100%" src={item.embed_url} frameBorder="0" allowFullScreen={true} />
              </div>
            </div>
        }
      </div>
    );
  }
}
