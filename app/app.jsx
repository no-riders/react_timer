import React from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Main from 'Main';

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
