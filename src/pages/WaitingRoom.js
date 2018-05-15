import React from 'react';
import { connect } from 'react-redux';
import { toggleModal, socketEvent } from '../redux/actions';

import PlayerList from '../components/PlayerList';
import Rules from '../components/Rules';
import Modal from '../components/Modal';
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
    const { user, game, socketEvent, history } = this.props;
    socketEvent({
      type: event.target.name + 'Game',
      payload: {user, gameId: game.id}
    });
    if (event.target.name === 'start') history.push('/board');
    else if (event.target.name === 'leave') history.push('/');
  };

  render() {
    const { game, modals, user } = this.props;
    const numPlayers = game.playerList && game.playerList.length;
    return (
      <div id='waiting-room'>
        <div className='game-info'>
          {game.initiator && <img src={`./assets/avatars/${game.initiator.avatar}.png`} alt='User Avatar'/>}
          {game.initiator && <h2>Game Initiator {game.initiator.name}</h2>}
          <button onClick={this.copyToClipboard} disabled={!game.id}>Copy game id to clipboard</button>
          <p>Share the game id with your friends so they can join.</p>
          {numPlayers && <p>{numPlayers} player{numPlayers === 1 ? '' : 's'}, minimum 5</p>}
          {user.id === game.initiator.id &&
            <button name='start' onClick={this.handleMetaClick}
              disabled={!numPlayers || numPlayers < 5}
            >Start Game</button>}
          <button name='leave' onClick={this.handleMetaClick}>Leave Game</button>
          <button name='rules' onClick={this.props.toggleModal} disabled={modals.rules}>Rules</button>
        </div>
        {game.playerList && <PlayerList playerList={game.playerList}/>}
        <Modal name='rules' closeButton>
          <Rules/>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
    modals: state.app.modals,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (event) => dispatch(toggleModal(event.target.name)),
  socketEvent: (data) => dispatch(socketEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRoom);