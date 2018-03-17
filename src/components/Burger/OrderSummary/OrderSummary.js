import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map( key => <li key={key} ><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>);
  return (
    <Aux>
      <h3>Order Summary</h3>
      <p>A delicious burger with this ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <Button btnType="danger" clicked={props.cancel}>
        Cancel
      </Button>
      <Button btnType="success" clicked={props.continue}>
        Continue
      </Button>
    </Aux>
  )
}
 
export default orderSummary;