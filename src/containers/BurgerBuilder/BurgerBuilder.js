import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  meat: 0.7,
  cheese: 0.9
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5,
    purchasable: false
  }

  updatePurchasable(ingredients) {
    const purchasable = Object.values(ingredients).some( value => !!value)
    this.setState({ purchasable: purchasable });
  }

  addIngredientHandler = (type) => {
    const counter = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = counter
    const price = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: price, ingredients: updatedIngredients });
    this.updatePurchasable(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type]) {
      const counter = this.state.ingredients[type] - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = counter
      const price = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({ totalPrice: price, ingredients: updatedIngredients });
      this.updatePurchasable(updatedIngredients);
    }
  }
  render () {
    const disabledInfo = { ...this.state.ingredients }
    for (const key in disabledInfo) {
      disabledInfo[key] = !disabledInfo[key];
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <Controls add={this.addIngredientHandler}
                  remove={this.removeIngredientHandler}
                  disabled={disabledInfo}
                  currentPrice={this.state.totalPrice}
                  purchasable={this.state.purchasable}/>
      </Aux>
    )
  }
}

export default BurgerBuilder;