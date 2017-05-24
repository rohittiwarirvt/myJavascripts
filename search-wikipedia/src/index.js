import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/Home';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NoMatch}/>
      </Switch>

    </Router>
  )
};
const NoMatch =({match}) => (
  <div>
    Nothing matched {matched.url}.
    <Link to="/">Go Home Boy </Link>
  </div>
);
ReactDOM.render (
  <Root/>,
  document.getElementById('app')
)