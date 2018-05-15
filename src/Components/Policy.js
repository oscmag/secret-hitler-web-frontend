import React from 'react';

import FascistPolicy from './material/policy-fascist.svg';
import LiberalPolicy from './material/policy-liberal.svg';
import './Policy.css';

export default (props) => {
  return (
    <div className={'policy policy-' + props.faction}>
      <img src={props.faction === 'fascist' ? FascistPolicy : LiberalPolicy} alt={props.faction + ' policy'}/>
    </div>
  );
};