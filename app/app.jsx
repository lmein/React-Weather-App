const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
// const Route = require('react-router').Route;
// const Router = require('react-router').Router;
// const IndexRoute = require('react-router').IndexRoute;
// const hashHistory = require('react-router').hashHistory;
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

//Load foundations
//css! is from the css-loader that was installed.
//style! is from the style-loader that was installed and tells how to install a css file.
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!sass-loader!applicationStyles');
//starts up foundation
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route exact path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
