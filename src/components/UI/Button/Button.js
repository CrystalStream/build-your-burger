import React from 'react';

import './Button.scss';

const button = (props) => (
  <button
  className={['Button'].concat(props.btnType).join(' ')}
  onClick={props.clicked}>
    {props.children}
  </button>
)
 
export default button;