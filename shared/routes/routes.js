import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  IndexRedirect,
  IndexRoute
} from 'react-router';
import Item from '../containers/item'
import Blogs from '../containers/blogs'
import Container from '../containers/container'

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Container} >
      <IndexRedirect to="/home" />
      <Route path="/blog" component={Blogs} />
      <Route path="/:item" component={Item} />
    </Route>
    <Route path="*">
      <IndexRedirect to="/" />
    </Route>
  </Router>
);

export default props => {
  return routes;
};
