import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/Landing';
import WaitingRoom from './pages/WaitingRoom';
import Board from './pages/Board';
import PageNotFound from './pages/PageNotFound';
import history from './redux/history';
import './App.css';

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