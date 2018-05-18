import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/Landing';
import WaitingRoom from './pages/WaitingRoom';
import Board from './pages/Board';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import history from './redux/history';

export default class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <div id='app'>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/waiting-room' component={WaitingRoom}/>
            <Route path='/board' component={Board}/>
            <Route path="/*" component={PageNotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}