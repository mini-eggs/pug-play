import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  IndexRedirect,
  IndexRoute
} from 'react-router';
import App from '../components/app';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={App} />
    </Route>
    <Route path="*">
      <IndexRedirect to="/" />
    </Route>
  </Router>
);

export default props => {
  console.log('here');
  console.log(props);

  return routes;
};
