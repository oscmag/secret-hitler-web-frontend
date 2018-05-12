import React from 'react';

import './PlayerListItem.css';

export default (props) => {
  const { user } = props.player;
  return (
    user && <div className='player-list-item'>
      <img src={`./assets/avatars/${user.avatar}.png`} alt='user avatar'/>
      <div>
        <h2>{user.name}</h2>
        <p><span>Games played</span> {user.games.played}</p>
        <p><span>Games won</span> {user.games.won}</p>
        <p><span>Ratio</span> {(user.games.won/user.games.played).toFixed(2)}</p>
      </div>
    </div>
  );
};