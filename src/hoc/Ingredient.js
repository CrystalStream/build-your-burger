import React from 'react';

const ingredient = (props) => {
  return (
    <div className="burgerIngredient">
      {props.children}
    </div>
  )
};

export default ingredient;
