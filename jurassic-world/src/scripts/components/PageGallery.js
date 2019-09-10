
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import PageBase from './PageBase.js';
import GalleryGrid from "./GalleryGrid.js";
import DNA from './DNA';
import { getPageData } from '../lib/pageData.js';

export default class PageGallery extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let imgList = this.props.pageData.gallery;
    return (
      <PageBase
        videoName="Dinosaur_Eye_Final"
        blurb="The feeding shows are not for the faint of heart and may be disturbing for small children."
        isCurrent={this.props.isCurrent}
        title="Gallery"
        iconClass="icon-camera"
        posterSrc={window.STATIC_URL + "/img/Dinosaur_Eye.jpg"}
      >
        <div className="page-gallery">
            <div className="gallery-heading"><span>Posters</span><DNA /></div>
            <GalleryGrid items={imgList} type="4-3" />
            <div className="gallery-heading"><span>Wallpapers</span><DNA /></div>
            <GalleryGrid items={imgList} type="3" />
            <div className="gallery-heading"><span>Fan Art</span><DNA /></div>
            <GalleryGrid items={imgList} type="6" />
        </div>
      </PageBase>
    );
  }
}


PageGallery.defaultProps = {
  pageData: getPageData("gallery")
}
