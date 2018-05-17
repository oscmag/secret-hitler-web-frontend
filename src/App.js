import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/Landing';
import WaitingRoom from './pages/WaitingRoom';
import Board from './pages/Board';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import history from './redux/history';

class App extends React.Component {

  componentDidMount() {
    if (window.location.pathname !== '/' && !this.props.game.id) window.location = '/';
  }

  render() {
    return (
      <Router history={history}>
        <div id='app'>
          {(this.props.app.serverError || this.props.app.serverAlert) &&
          <div className='server-alert'>
            {this.props.app.serverError || this.props.app.serverAlert}
          </div>}
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

const mapStateToProps = (state) => {
  return {
    app: state.app,
    game: state.game,
  };
};

export default connect(mapStateToProps)(App);