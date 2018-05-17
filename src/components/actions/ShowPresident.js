import React from 'react';
import { connect } from 'react-redux';

import { socketEmit, toggleModal } from '../../redux/actions';
import './ShowPresident.css';

class ShowPresident extends React.Component {
  constructor(props) {
    super(props);
    this.state = {countdown: 5};
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
        message: 'acknowledgePresident',
        countName: 'president',
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
    const { user } = this.props;
    // if (!playerList) return null;
    return (
      <React.Fragment>
        <h2>The current president is:</h2>
        <div className='president'>
          <img src={avatars[user.avatar]} alt='User Avatar'/>
          <h3>{user.name}</h3>
        </div>
        <p>This window will disappear in {this.state.countdown} seconds.</p>
        <button onClick={this.handleClick}>Okay</button>
      </React.Fragment>
    );
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  socketEmit: (data) => dispatch(socketEmit(data)),
  toggleModal: () => dispatch(toggleModal('showPresident'))
});

export default connect(null, mapDispatchToProps)(ShowPresident);