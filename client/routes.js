import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Menu from './components/menu'
import Resources from './components/resources';
import Research from './components/research'
export default function Routes(store, req) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Menu}>
        <Route path="resources" component={Resources}/>
        <Route path="research" component={Research}/>
      </Route>

  </Router>
  );
}
