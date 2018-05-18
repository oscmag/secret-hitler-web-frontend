import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../redux/actions';

import Modal from '../components/Modal';
import PlayerList from '../components/PlayerList';
import Policy from '../components/Policy';
import Rules from '../components/Rules';
import ShowRoles from '../components/playerActions/ShowRoles';
import ShowFascists from '../components/playerActions/ShowFascists';
import ShowPresident from '../components/playerActions/ShowPresident';
import SuggestChancellor from '../components/playerActions/SuggestChancellor';
import './Board.css';

const playerActions = {
  showRoles: ShowRoles,
  showFascists: ShowFascists,
  showPresident: ShowPresident,
  suggestChancellor: SuggestChancellor,
};

class Board extends React.Component {

  toStore = (event) => {
    this.props.saveUserInput({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { game, modals, user } = this.props;
    if (!game || !game.playerList) return null;
    const PlayerAction = playerActions[game.message];
    const player = game.playerList.find(player => player.user.id === user.id);
    return (
      <div id='board'>
        <div>
          <div className='rules-settings'>
            <button name='rules' onClick={this.props.toggleModal} disabled={modals.rules}>Rules</button>
            <button name='settings' onClick={this.props.toggleModal}>Settings</button>
          </div>
          {game.playerList && <PlayerList playerList={game.playerList} user={user}/>}
        </div>
        <div className="board">
          <div className="liberal-board">
            <h2>Liberals</h2>
            <div className="policies liberal-policies">
              {[...(Array(3))].map((policy, index) => (
                <Policy key={index} faction="liberal"/>
              ))}
            </div>
          </div>
          <div className="election-tracker">
            <div>
              <p>Election</p>
              <p>Tracker</p>
            </div>
            {[...(Array(4))].map((counter, index) => (
              <React.Fragment key={index}>
                <div className={[
                  'election-counter',
                  2 >= index ? 'active' : null,
                ].join(' ')}>{index + 1}</div>
              {index !== 3 && <div>&rarr;</div>}
              </React.Fragment>
            ))}
            <div>
              <p>Force enact</p>
              <p>next policy</p>
            </div>
          </div>
          <div className="fascist-board">
            <h2>Fascists</h2>
            <div className="policies fascist-policies">
              {[...(Array(4))].map((policy, index) => (
                <Policy key={index} faction="fascist"/>
              ))}
            </div>
          </div>
        </div>
        <Modal name='rules' button='okay' closeOnClickOutside>
          <Rules/>
        </Modal>
        <Modal name={game.message}>
          <PlayerAction game={game} player={player} user={user}/>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);