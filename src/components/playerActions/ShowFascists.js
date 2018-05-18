import React from 'react';
import { connect } from 'react-redux';

import { socketEmit, toggleModal } from '../../redux/actions';
import './ShowFascists.css';

class ShowFascists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {countdown: 10};
  }

  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => this.setState({countdown: this.state.countdown - 1}), 1000),
      timeOutId: setTimeout(() => this.handleClick(), this.state.countdown * 1000),
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    clearInterval(this.state.timeOutId);
  }

  handleClick = () => {
    this.props.socketEmit({
      type: 'acknowledge',
      payload: {
        message: 'acknowledgeFascists',
        countName: 'fascists',
        gameId: this.props.game.id,
      }
    });
    this.props.toggleModal();
  }

  importAvatars = (require) => {
    return require.keys().map(require);
  };

  render() {
    const avatars = this.importAvatars(require.context('../../../public/assets/avatars', false, /\.(png|jpe?g|svg)$/));
    const { game, player, user } = this.props;
    const fascists = game.playerList.filter(player => {
      return player.faction === 'fascist' && player.user.id !== user.id;
    });
    if (player.faction === 'fascist') {
      return (
        <React.Fragment>
          <h2>These are your fellow fascists</h2>
          <div className='fascists'>
            {fascists.map(fascist => {
              return <div key={fascist.user.id} className='fascist'>
                <img src={avatars[fascist.user.avatar]} alt='User Avatar'/>
                <h3>{fascist.user.name}</h3>
              </div>
            })}
          </div>
          <p>This window will disppear in {this.state.countdown} seconds.</p>
          <button onClick={this.handleClick}>Okay</button>
        </React.Fragment>
      )
    } else {
      return (
        <h2>Please wait for {this.state.countdown} seconds.</h2>
      );
    }
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  socketEmit: (data) => dispatch(socketEmit(data)),
  toggleModal: () => dispatch(toggleModal('showFascists'))
});

export default connect(null, mapDispatchToProps)(ShowFascists);