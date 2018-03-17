import React from 'react';

import './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const burgerIngredients = Object.keys(props.ingredients)
    .map( key => {
      return [...Array(props.ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key + i} type={key}/>
      })
    })
  
  return (
    <div id="BurgerContainer">
      <div className="burger">
      <BurgerIngredient type="bread-top"/>
      {burgerIngredients}
      <BurgerIngredient type="bread-bottom"/>
      </div>
    </div>
  )
}

export default burger;