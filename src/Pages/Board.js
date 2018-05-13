import React from 'react';
import { connect } from 'react-redux';
import { showRules } from '../redux/actions';

import PlayerList from '../Components/PlayerList';
import Policy from '../Components/Policy';
import Rules from '../Components/Rules';
import './Board.css'

class Board extends React.Component {

  toStore = (event) => {
    this.props.saveUserInput({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { game } = this.props;
    return (
      <div id='board'>
        {game.playerList && <PlayerList playerList={game.playerList}/>}
        <div className="board">
          <div className="board-liberal">
            <h2>Liberals</h2>
            <div className="policies">
              {[...(Array(3))].map((policy, index) => (
                <Policy key={index} faction="liberal"/>
              ))}
            </div>
          </div>
          <div className="board-fascist">
            <h2>Fascists</h2>
            <div className="policies">
              {[...(Array(4))].map((policy, index) => (
                <Policy key={index} faction="fascist"/>
              ))}
            </div>
          </div>
        </div>
        <Rules/>
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
  showRules: () => dispatch(showRules()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);