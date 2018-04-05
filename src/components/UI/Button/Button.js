import React from 'react';

import './Button.scss';

const button = (props) => (
  <button
  className={['Button'].concat(props.btnType).join(' ')}
  disabled={props.disabled}
  onClick={props.clicked}
  type={props.submit ? 'submit' : 'button'}>
    {props.children}
  </button>
)
 
export default button;