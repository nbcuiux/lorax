


// Sample code to set up React and JQuery
var $         = require('jQuery');
var React     = window.React = require('react');
import ReactDOM from 'react-dom';
window.ReactDOM = ReactDOM;
window.$ = $;

import Container from "./components/Container.js";
import mountSite from "./index.js";

window.components = {
	Container
}

window.mountSite = mountSite;