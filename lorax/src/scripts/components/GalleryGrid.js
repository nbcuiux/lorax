
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';

export default class GalleryGrid extends Component {


  constructor(props) {
    super(props);
  }

  openGallery(index) {
    this.context.openGallery(this.props.items, index);
  }

  render() {
    let items = this.props.items;
    let type = this.props.type;

    switch (type) {
      case "4-3":
        items = items.slice(0,7);
        break;
      case "3":
        items = items.slice(0,6);
        break;

      case "6":
        items = items.slice(0,12);
        break;
    }
    return (
      <div className={"gallery-grid gallery-grid--" + type}>
        {
          items.map((item, index) => {
            return (
              <GalleryGridItem item={item} key={index} index={index} openGallery={this.openGallery.bind(this)} />
            )
          })
        }
      </div>
    );
  }
}

// Open gallery is defined in Container.js
GalleryGrid.contextTypes = {
  openGallery: React.PropTypes.func
};







let galleryItemZIndex = 0;

class GalleryGridItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      hover: false,
      zIndex: galleryItemZIndex
    }
  }

  onMouseEnter() {
    let newZIndex = galleryItemZIndex++;
    this.setState({
      zIndex: newZIndex
    })
  }

  openGallery() {
    this.props.openGallery(this.props.index);
  }

  render() {
    let { item, index } = this.props;
    let isImage = (typeof item === "string");
    let classnames = ClassNames({
      'gallery-grid__item': true,
      'gallery-grid__item--video': !isImage,
      'gallery-grid__item--image': isImage
    })
    return (
      <div
        className={classnames}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave}
        onClick={this.openGallery.bind(this, index)}
      >
        <div className="gallery-grid__item-inner">
          <div className="gallery-grid__item-cta-image">
          <div className="gallery-icon universal-gallery"></div>
          <div className="gallery-cta-text">View Gallery</div>
          </div>
          <div className="gallery-grid__item-cta-video">
            <div className="gallery-icon universal-video"></div>
            <div className="gallery-video-type">Trailer</div>
            <div className="gallery-cta-text">Watch Video</div>
          </div>
          {
            isImage ?
              <img src={item} />
            :
              <img src={item.thumbnail.url} />
          }
        </div>
      </div>
    );
  }
}
