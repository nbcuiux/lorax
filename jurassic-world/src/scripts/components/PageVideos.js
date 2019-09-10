
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import PageBase from './PageBase.js';
import GalleryGrid from './GalleryGrid.js';
import { getPageData } from '../lib/pageData.js';
export default class PageVideos extends Component {


  constructor(props) {
    super(props);
  }


  render() {
    let vidList = this.props.pageData.videos;
    return (
      <PageBase
        videoName="Raptor_Breathing_Final"
        blurb="It would take a raptor 20 minutes to run across Isla Nublar at its widest."
        isCurrent={this.props.isCurrent}
        title="videos"
        iconClass="icon-security-camera"
        posterSrc={window.STATIC_URL + "/img/Raptor_Breathing.jpg"}
      >
        <div className="page-videos">
          <GalleryGrid items={vidList} type="1" />
        </div>
      </PageBase>
    );
  }
}

PageVideos.defaultProps = {
  pageData: getPageData("videos")
}