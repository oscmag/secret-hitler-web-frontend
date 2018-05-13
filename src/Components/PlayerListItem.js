import React from 'react';

import './PlayerListItem.css';

export default (props) => {
  const { player, player: { user } } = props;
  const classes = [
    player.president ? 'president' : null,
    player.chancellor ? 'chancellor' : null,
    player.executed ? 'executed' : null,
  ];
  return (
    user && <div className='player-list-item'>
      <img src={`./assets/avatars/${user.avatar}.png`} alt='user avatar'/>
      <div className={classes.join(' ')}>
        <h2>{user.name}</h2>
        {user.games.played && <p><span>Games played</span> {user.games.played}</p>}
        {user.games.won && <p><span>Games won</span> {user.games.won}</p>}
        {user.games.played && user.games.won &&
          <p><span>Ratio</span> {(user.games.won/user.games.played).toFixed(2)}</p>}
      </div>
    </div>
  );
};