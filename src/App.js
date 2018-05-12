import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/Landing';
import WaitingRoom from './Pages/WaitingRoom';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div id='app'>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/waiting-room' component={WaitingRoom}/>
          </Switch>
        </div>
      </Router>
    );
  }
}