
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import PageBase from './PageBase.js';
import GalleryGrid from "./GalleryGrid.js";

export default class PageGallery extends Component {


  constructor(props) {
    super(props);
  }


  render() {
    let imgList = this.props.pageData.gallery;
    return (
      <PageBase
        videoName="Thneedville_Final"
        posterSrc={window.STATIC_URL + "/img/ohare-fallback.jpg"}
        blurb="He was shortish and oldish and brownish and mossy And he spoke with a voice that was sharpish and bossy"
        isCurrent={this.props.isCurrent}
        title="Gallery"
        iconClass="universal-gallery"
      >
        <div className="page-gallery">
            <div className="gallery-heading">Posters</div>
            <GalleryGrid items={imgList} type="4-3" />
            <div className="gallery-heading">Wallpapers</div>
            <GalleryGrid items={imgList} type="3" />
            <div className="gallery-heading">Fan Art</div>
            <GalleryGrid items={imgList} type="6" />
        </div>
      </PageBase>
    );
  }
}
