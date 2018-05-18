import React from 'react';

import './PlayerListItem.css';

const importAvatars = (require) => {
  return require.keys().map(require);
};

export default (props) => {
  const { player, user } = props;
  const classes = [
    player.president ? 'president' : null,
    player.chancellor ? 'chancellor' : null,
    player.executed ? 'executed' : null,
  ];
  const avatars = importAvatars(require.context('../../public/assets/avatars', false, /\.(png|jpe?g|svg)$/));
  return (
    player && <div className='player-list-item'>
      <img src={avatars[player.user.avatar]} alt='User Avatar'/>
      <div className={classes.join(' ')}>
        {player.user && user && player.user.id === user.id && <p>You</p>}
        <h2>{player.user.name}</h2>
        {player.faction === 'fascist' && <p>{player.faction}</p>}
        {/* {user.games.played && <p><span>Games played</span> {user.games.played}</p>}
        {user.games.won && <p><span>Games won</span> {user.games.won}</p>}
        {user.games.played && user.games.won &&
          <p><span>Ratio</span> {(user.games.won/user.games.played).toFixed(2)}</p>} */}
      </div>
    </div>
  );
};