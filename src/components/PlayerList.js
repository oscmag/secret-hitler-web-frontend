import React from 'react';

import PlayerListItem from './PlayerListItem';
import './PlayerList.css';

export default (props) => {
  if (!props.playerList) return null;
  return (
    props.playerList.length === 0 ?
    <div className='empty-list'><h2>No players to display.</h2></div> :
    <div className='player-list'>
      {props.playerList.map(player =>
        <PlayerListItem key={player.user.id} player={player} {...props}/>
      )}
    </div>
  );
};