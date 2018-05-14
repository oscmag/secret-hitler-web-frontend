import React from 'react';

import FascistPolicy from './Material/policy-fascist.svg';
import LiberalPolicy from './Material/policy-liberal.svg';
import './Policy.css';

export default (props) => {
  return (
    <div className={'policy policy-' + props.faction}>
      <img src={props.faction === 'fascist' ? FascistPolicy : LiberalPolicy} alt={props.faction + ' policy'}/>
    </div>
  );
};