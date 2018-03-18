import React from 'react';

import './ToogleButton.scss';

const toggleButton = (props) => (
  <div className="ToogleButton">
    <button onClick={props.clicked}>
      <div className="icon">&nbsp;</div>
      <div className="icon">&nbsp;</div>
      <div className="icon">&nbsp;</div>
    </button>
  </div>
)
 
export default toggleButton;