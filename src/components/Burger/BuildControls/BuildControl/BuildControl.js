import React from 'react';

import './BuildControl.scss';

const buildControl = (props) => (
  <div className="BuildControl">
    <div className="control">
      <div className="label">{props.label}</div>
      <button className="less" onClick={props.remove} disabled={props.disabled}>Less</button>
      <button className="more" onClick={props.add}>More</button>
    </div>
  </div>
)

export default buildControl;