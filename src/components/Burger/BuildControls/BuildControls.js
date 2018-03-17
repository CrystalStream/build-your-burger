import React from 'react';

import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = (props) => (
  <div className="BuildControls">
    <div className="controls">
      <p>Current price: <strong>{props.currentPrice.toFixed(2)}</strong></p>
      {controls.map( ctrl => {
        return <BuildControl key={ctrl.label} 
                  label={ctrl.label}
                  type={controls.type}
                  add={() => props.add(ctrl.type)}
                  remove={() => props.remove(ctrl.type)}
                  disabled={props.disabled[ctrl.type]} />
      })}
      <button className="orderButton" disabled={!props.purchasable}>Order Now</button>
    </div>
  </div>
)
 
export default buildControls;