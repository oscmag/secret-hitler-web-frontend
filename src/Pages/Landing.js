import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { socketEvent, updateGameId, updateUser } from '../redux/actions';
import './Landing.css'

class LandingPage extends React.Component {

  componentDidMount() {
    this.props.updateUser({
      id: uuid()
    });
  };

  updateUser = (event) => {
    this.props.updateUser({
      [event.target.name]: event.target.value || event.target.alt
    });
  };

  updateGameId = (event) => {
    this.props.updateGameId({
      [event.target.name]: event.target.value
    });
  };

  importAvatars = (require) => {
    return require.keys().map(require);
  };

  handleMetaClick = (event) => {
    const { app, user } = this.props;
    this.props.socketEvent({
      type: event.target.name + 'Game',
      payload: {user, gameId: app.gameId}
    });
    this.props.history.push('/waiting-room');
  };

  render() {
    const avatars = this.importAvatars(require.context('../../public/assets/avatars', false, /\.(png|jpe?g|svg)$/));
    const { app, user } = this.props;
    const disabled = user.name.length < 3 || !user.avatar;
    return (
      <div id='landing-page'>
        <div className='background-overlay'>
          <div className='meta-buttons'>
          <h2>Pick your avatar and user name</h2>
          <div className="avatar-carousel">
            {avatars.map((avatar, index) => (
              <div key={index}
                className={['avatar', user.avatar === String(index) ? 'active' : null].join(' ')}>
                <img
                  src={avatar}
                  alt={index}
                  name='avatar'
                  onClick={this.updateUser}
                />
              </div>
            ))}
          </div>
            <input
              placeholder='User Name'
              name='name'
              type='text'
              onChange={this.updateUser}
              value={user.name}
            />
            <button name='create' onClick={this.handleMetaClick} disabled={disabled}>
              Create Game
            </button>
            <input
              placeholder='Game ID'
              name='gameId'
              type='text'
              onChange={this.updateGameId}
              value={app.gameId}
            />
            <button name='join' onClick={this.handleMetaClick}
              disabled={!app.gameId || app.gameId.length !== 20 || disabled}>
              Join Game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    user: state.user,
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => ({
  socketEvent: (data) => dispatch(socketEvent(data)),
  updateGameId: (input) => dispatch(updateGameId(input)),
  updateUser: (input) => dispatch(updateUser(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);