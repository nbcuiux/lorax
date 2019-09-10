
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';


import PageHome from "./PageHome.js";
import PageCast from "./PageCast.js";
import PageGallery from "./PageGallery.js";
import PageVideos from "./PageVideos.js";
import PageTickets from "./PageTickets.js";
import PageDinosaurs from "./PageDinosaurs.js";

const pageComponents = {
  PageHome,
  PageCast,
  PageGallery,
  PageVideos,
  PageTickets,
  PageDinosaurs
}



export default class Pages extends Component {


  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return true;
  }

  render() {
    
    let { pages, currPage, navTo, prevPage, nextPage } = this.props;
    console.log("The next page in pages", nextPage);
    return (
      <div className="pages">
        {
          pages.map((page, index) => {
            console.log(page);
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
                />;
              }
            }

            let classnames = ClassNames({
              'page': true,
              'page--prev': prevPage === index,
              'page--curr': currPage === index,
              'page--next': nextPage === index
            })
            if (currPage === index || nextPage === index) {
              return (<div className={classnames} key={index}>{pageEl}</div>);
            }
          })
        }
      </div>
    );
  }
}
