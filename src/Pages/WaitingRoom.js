import React from 'react';
import { connect } from 'react-redux';
import { showRules, socketEvent } from '../redux/actions';

import PlayerList from '../Components/PlayerList';
import Rules from '../Components/Rules';
import './WaitingRoom.css'

class WaitingRoom extends React.Component {

  toStore = (event) => {
    this.props.saveUserInput({
      [event.target.name]: event.target.value
    });
  };

  copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = this.props.game.id;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  handleMetaClick = (event) => {
    const { user, game } = this.props;
    this.props.socketEvent(event.target.name + 'Game', {user, gameId: game.id});
    if (event.target.name === 'start') this.props.history.push('/board');
    if (event.target.name === 'leave') this.props.history.push('/');
  };

  render() {
    const { game } = this.props;
    const numPlayers = game.playerList && game.playerList.length;
    return (
      <div id='waiting-room'>
        <div className='game-info'>
          {game.initiator && <img src={`./assets/avatars/${game.initiator.avatar}.png`} alt='user avatar'/>}
          {game.initiator && <h2>Game Initiator {game.initiator.name}</h2>}
          <button onClick={this.copyToClipboard} disabled={!game.id}>Copy game id to clipboard</button>
          <p>Share the game id with your friends so they can join.</p>
          {numPlayers && <p>{numPlayers} player{numPlayers === 1 ? '' : 's'}, minimum 5</p>}
          <button name='start' onClick={this.handleMetaClick} disabled={!numPlayers || numPlayers < 5}>Start Game</button>
          <button name='leave' onClick={this.handleMetaClick}>Leave Game</button>
          <button onClick={this.props.showRules}>Rules</button>
        </div>
        {game.playerList && <PlayerList playerList={game.playerList}/>}
        <Rules/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  showRules: () => dispatch(showRules()),
  socketEvent: (message, payload) => dispatch(socketEvent(message, payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRoom);