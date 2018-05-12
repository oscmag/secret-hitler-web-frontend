import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div id='app'>
          <Switch>
          </Switch>
      </div>
      </Router>
    );
  }
}