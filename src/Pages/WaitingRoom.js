import React from 'react';
import { connect } from 'react-redux';

import PlayerList from '../Components/PlayerList';
import './WaitingRoom.css'

class WaitingRoom extends React.Component {

  toStore = (event) => {
    this.props.saveUserInput({
      [event.target.name]: event.target.value
    });
  }

  copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = this.props.game.id;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  render() {
    const {game} = this.props;
    console.log(game.initiator);
    const numPlayers = game.playerList && game.playerList.length;
    return (
      <div id='waiting-room'>
        <div className='game-info'>
          <img src={`./assets/avatars/${game.initiator.avatar}.png`} alt='user avatar'/>
          <h2><span>Game Initiator</span> {game.initiator.name}</h2>
          <button onClick={this.copyToClipboard}>Copy game id to clipboard</button>
          <p>Share the game id with your friends to let them join.</p>
          <p>{numPlayers} player{numPlayers === 1 ? '' : 's'}, minimum 5</p>
          <button onClick={() => this.props.startGame()} disabled={numPlayers < 5}>Start Game</button>
          <button onClick={() => this.props.leaveGame()}>Leave Game</button>
        </div>
        <PlayerList playerList={game.playerList}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRoom);