
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';


import PageHome from "./PageHome.js";
import PageCast from "./PageCast.js";
import PageTrailer from "./PageTrailer.js";
import PageGallery from "./PageGallery.js";
import PageVideos from "./PageVideos.js";
import PageTickets from "./PageTickets.js";


const pageComponents = {
  PageHome,
  PageCast,
  PageTrailer,
  PageGallery,
  PageVideos,
  PageTickets
}



export default class Pages extends Component {


  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.currPage !== this.props.currPage) {
      return true;
    }

    return false;
  }

  render() {
    
    let { pages, currPage, navTo, prevPage } = this.props;
    let scrollLeft = (-currPage * 100) + "vw";
    
    return (
      <div className="pages" style={{ left: scrollLeft }}>
        {
          pages.map((page, index) => {
            let pageEl = null;
            if (page.templateName) {
              let pageComponentName = "Page" + page.templateName.charAt(0).toUpperCase() + page.templateName.slice(1);
              let PageComponent = pageComponents[pageComponentName];
              if (!PageComponent) {
                console.log("WARNING: missing page component for " + pageComponentName);
                pageEl = null;
              }
              else {
                pageEl = <PageComponent 
                  pageData={page} 
                  isCurrent={currPage === index}
                  navTo={this.props.navTo}
                  isMobile={this.props.isMobile}
                />;
              }
            }

            let classnames = ClassNames({
              'page': true,
              'page--prev': prevPage === index,
              'page--curr': currPage === index
            })
            return (
              <div className={classnames} key={index}>
                {pageEl}
              </div>
            );
          })
        }
      </div>
    );
  }
}
