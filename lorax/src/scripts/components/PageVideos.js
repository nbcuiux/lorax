
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import PageBase from './PageBase.js';
import GalleryGrid from './GalleryGrid.js';

export default class PageVideos extends Component {


  constructor(props) {
    super(props);
  }


  render() {
    let vidList = this.props.pageData.videos;
    return (
      <PageBase
        videoName="Sewer_v2_Final"
        posterSrc={window.STATIC_URL + "/img/sewer-fallback.jpg"}
        blurb="You won’t see the Once-ler Don’t knock at his door He stays in his Lurkim on top of his store"
        isCurrent={this.props.isCurrent}
        title="videos"
        iconClass="universal-video"
      >
        <div className="page-videos">
          <GalleryGrid items={vidList} type="1" />
        </div>
      </PageBase>
    );
  }
}
