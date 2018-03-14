import React from 'react';

import './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  return (
    <div id="BurgerContainer">
      <div className="burger">
        <BurgerIngredient type="bread-top"/>
        <BurgerIngredient type="cheese"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="salad"/>
        <BurgerIngredient type="bacon"/>
        <BurgerIngredient type="bread-bottom"/>
      </div>
    </div>
  )
}

export default burger;