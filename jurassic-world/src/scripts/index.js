import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, useRouterHistory, browserHistory, hashHistory } from 'react-router'
import Container from './components/Container.js'
import { createHistory } from 'history'

import PageHome from "./components/PageHome.js";
import PageCast from "./components/PageCast.js";
import PageGallery from "./components/PageGallery.js";
import PageVideos from "./components/PageVideos.js";
import PageTickets from "./components/PageTickets.js";
import PageDinosaurs from "./components/PageDinosaurs.js";






export default function mountSite() {

	const hostname = window.location.host;
	const basename = window.SITE_URL.split(hostname)[1];

	// Replaces browser history below with this 'history' object
	// which has a basename attached
	// https://github.com/ReactTraining/react-router/issues/353#issuecomment-181786502
	const history = useRouterHistory(createHistory)({
	  basename: basename
	});

	const pageComponents = {
	  PageHome,
	  PageCast,
	  PageGallery,
	  PageVideos,
	  PageTickets,
	  PageDinosaurs
	}

	let routeList = window.SITE_DATA.pages.map((page, index)=>{
		let pageComponentName = "Page" + page.templateName.charAt(0).toUpperCase() + page.templateName.slice(1);
        let PageComponent = pageComponents[pageComponentName];
        let pathname =  "/" + page.slug;
        console.log(pathname);
		return <Route path={pathname} component={PageComponent} key={page.slug} />
	});

	render((
		<Router history={history}>
	        <Route path="/" component={Container}>
	          <IndexRoute component={PageHome} />
	          {routeList}
	        </Route>
	    </Router>
	), document.getElementById('container'))
}


