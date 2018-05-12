import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { socketEvent, userInput } from '../redux/actions';
import './Landing.css'

class LandingPage extends React.Component {

  toStore = (event) => {
    this.props.saveUserInput({
      [event.target.name]: event.target.value
    });
  }
  importAvatars = (require) => {
    return require.keys().map(require);
  }

  render() {
    const avatars = this.importAvatars(require.context('../../public/assets/avatars', false, /\.(png|jpe?g|svg)$/));
    const {user} = this.props;
    return (
      <div id='landing-page'>
        <div className='overlay'>
          <div className='meta-buttons'>
            <div className="avatar-carousel">
              {avatars.map(avatar => {
                return <img src={avatar} alt='user avatar'/>
              })}
            </div>
            <form>
              <input placeholder='User Name' name='name' type='text' onChange={this.toStore} value={user.name}/>
            </form>
            <button onClick={() => this.props.createGame(user)} disabled={!user.name}><Link to='/waiting-room'>Create Game</Link></button>
            <button onClick={() => this.props.createGame(user)} disabled={!user.name}><Link to='/waiting-room'>Join Game</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createGame: (user) => dispatch(socketEvent('createGame', {user})),
  joinGame: (user) => dispatch(socketEvent('joinGame', {user})),
  saveUserInput: (input) => dispatch(userInput(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);