import React from 'react'

import './Order.scss'
export default (props) => {
  console.log('props: ', props);
  const ingredients = [];
  for (const key in props.order.ingredients) {
    ingredients.push(
      <span key={key}>{key} ({props.order.ingredients[key]})</span>
    );
  }
  console.log('ingredients: ', ingredients);
  return (
    <div className="Order">
      <p>Ingredients: {ingredients}</p>
      <p><strong>Price: ${props.order.price}</strong></p>
    </div>
  )
}
