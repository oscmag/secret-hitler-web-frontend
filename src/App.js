import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/Landing';
import WaitingRoom from './Pages/WaitingRoom';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    if (window.location.pathname !== '/' && !this.props.game.id) window.location = '/';
  }

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

const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
};

export default connect(mapStateToProps)(App);