import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import './CheckoutSummary.scss';

export default (props) => {
  return (
    <div className="Checkout">
      <h1>Hope it taste good!</h1>
      <div style={{ width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="danger" clicked={props.canceled}>Cancel</Button>
      <Button btnType="success" clicked={props.continue}>Continue</Button>
    </div>
  )
}
