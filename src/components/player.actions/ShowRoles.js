import React from 'react';

import fascist from '../material/secret-role-fascist.svg';
import liberal from '../material/secret-role-liberal.svg';
import hitler from '../material/secret-role-hitler.svg';
import { capitalize } from '../../utils';

// import './PlayerList.css';

export default (props) => {
  const { player } = props;
  if (!player) return null;
  const { faction } = player;
  const svgs = {fascist, liberal, hitler};
  return (
    <React.Fragment>
      <img src={svgs[faction]} alt={capitalize(faction)}/>
      <h1>You are a {faction}.</h1>
    </React.Fragment>
  );
};