import React from 'react';
import { connect } from 'react-redux';

import { socketEmit, toggleModal } from '../../redux/actions';

class SuggestChancellor extends React.Component {

  suggestChancellor = (event) => {
    this.props.socketEmit({
      type: 'suggestChancellor',
      payload: {
        playerId: event.target.name,
        gameId: this.props.game.id,
      }
    });
    this.props.toggleModal();
  };

  importAvatars = (require) => {
    return require.keys().map(require);
  };

  render() {
    const avatars = this.importAvatars(require.context('../../../public/assets/avatars', false, /\.(png|jpe?g|svg)$/));
    const { game, user } = this.props;
    const eligiblePlayers = game.playerList.filter(player => !player.president);
    const isPresident = game.playerList.find(player => player.user.id !== user.id).president;
    if (isPresident) {
      return (
        <React.Fragment>
          <h2>Suggest your chancellor</h2>
          <div className='eligible-players'>
            {eligiblePlayers.map(player => {
              return <div
                key={player.user.id}
                name={player.user.id}
                className='eligible-player'
                onClick={this.suggestChancellor}
              >
                <img src={avatars[player.user.avatar]} alt='User Avatar'/>
                <h3>{player.user.name}</h3>
              </div>
            })}
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <h2>Please wait. The president is choosing the next chancellor.</h2>
      );
    }
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  socketEmit: (data) => dispatch(socketEmit(data)),
  toggleModal: () => dispatch(toggleModal('suggestChancellor'))
});

export default connect(null, mapDispatchToProps)(SuggestChancellor);