import React from 'react';
import { connect } from 'react-redux';

import { socketEmit, toggleModal } from '../../redux/actions';
import { capitalize } from '../../utils';
import fascistCard from '../material/secret-role-fascist.svg';
import liberalCard from '../material/secret-role-liberal.svg';
import hitlerCard from '../material/secret-role-hitler.svg';

class ShowRoles extends React.Component {
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
        message: 'acknowledgePlayerRole',
        countName: 'playerRole',
        gameId: this.props.game.id,
      }
    });
    this.props.toggleModal();
  }

  render() {
    const { faction, hitler } = this.props.player;
    if (!faction) return null;
    const src = (hitler && hitlerCard) || (faction === 'fascist' && fascistCard) || liberalCard;
    return (
      <React.Fragment>
        <img src={src} alt={capitalize(hitler ? 'hitler' : faction)}/>
        {hitler ? <h1>You are hitler.</h1> : <h1>You are a {faction}.</h1>}
        <p>This window will disppear in {this.state.countdown} seconds.</p>
        <button onClick={this.handleClick}>Okay</button>
      </React.Fragment>
    );
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  socketEmit: (data) => dispatch(socketEmit(data)),
  toggleModal: () => dispatch(toggleModal('showRoles'))
});

export default connect(null, mapDispatchToProps)(ShowRoles);