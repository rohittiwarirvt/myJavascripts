import React from 'react';
import ReactDOM from 'react-dom';
import {
        BrowserRouter as Router,
         Switch,
         Route,
         Link } from 'react-router-dom';
import { createHashHistory } from 'history';

import Detail from './pages/Detail';
import List from './pages/List';

const NoMatch = ({match}) => (
  <div>
    Nothing matched {match.url}.
    <Link to="/"> Go home </Link>
  </div>
  );

const Root = () => {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={List}/>
        <Route exact path="/detail" component={Detail}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
    );
  };
ReactDOM.render(
  <Root />,
  document.getElementById('app')
)
