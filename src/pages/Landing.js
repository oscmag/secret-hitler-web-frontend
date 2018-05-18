import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { socketEmit, updateGameId, updateUser } from '../redux/actions';
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

  handleCreateClick = () => {
    this.props.socketEmit({
      type: 'createGame',
      payload: { user: this.props.user }
    });
  };

  handleJoinClick = () => {
    const { app, user } = this.props;
    this.props.socketEmit({
      type: 'joinGame',
      payload: { user, gameId: app.gameId }
    });
  };

  render() {
    const avatars = this.importAvatars(require.context('../../public/assets/avatars', false, /\.(png|jpe?g|svg)$/));
    const { app, user } = this.props;
    const disabled = user.name.length < 3 || !user.avatar;
    return (
      <div id='landing-page'>
        <form>
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
          <div className="buttons">
            <input
              placeholder='User Name'
              name='name'
              type='text'
              onChange={this.updateUser}
              value={user.name}
            />
            <button type='button' onClick={this.handleCreateClick} disabled={disabled}>
              Create Game
            </button>
            <input
              placeholder='Game ID'
              name='gameId'
              type='text'
              onChange={this.updateGameId}
              value={app.gameId}
            />
            <button type='button' onClick={this.handleJoinClick}
              disabled={!app.gameId || app.gameId.length !== 20 || disabled}>
              Join Game
            </button>
          </div>
        </form>
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
  socketEmit: (data) => dispatch(socketEmit(data)),
  updateGameId: (input) => dispatch(updateGameId(input)),
  updateUser: (input) => dispatch(updateUser(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);