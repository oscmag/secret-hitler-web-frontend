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
        <div>
          <Rules/>
          <div className='rules-settings'>
            <button onClick={this.props.showRules}>Rules</button>
            <button onClick={this.props.showRules}>Settings</button>
          </div>
          {game.playerList && <PlayerList playerList={game.playerList}/>}
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
              ].join(' ')}></div>
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