import React, { Component } from 'react';
import axios from '../../axios-orders';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Ordersummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHanlder';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  meat: 0.7,
  cheese: 0.9
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 5,
    purchasable: false,
    goCheckout: false,
    loading: false
  }

  componentDidMount = () => {
    axios.get('https://build-your-burger-3bcff.firebaseio.com/ingredients.json')
      .then( res => {
        this.setState({ ingredients: res.data})
      })
      .catch( err => {})
  }
  

  updatePurchasable(ingredients) {
    const purchasable = Object.values(ingredients).some( value => !!value)
    this.setState({ purchasable: purchasable });
  }

  purchaseHandler = () => {
    this.setState({ goCheckout: true });
  }
  
  purchaseCancelHandler = () => {
    this.setState({ goCheckout: false });
  }

  purchaseContinueHandler = () => {
    const queryParams = Object.keys(this.state.ingredients)
      .map( key => key + '=' + this.state.ingredients[key]);
      queryParams.push('price=' + this.state.totalPrice.toFixed(2))
      this.props.history.push({
        pathname: '/checkout',
      search: '?' + queryParams.join('&')
    });
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
    let modalContent = null;
    
    let content = <Spinner />

    if (this.state.ingredients) {
      content = (
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <Controls add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    currentPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    checkout={this.purchaseHandler}/>
        </Aux>
      )

      modalContent = <Ordersummary ingredients={this.state.ingredients}
      cancel={this.purchaseCancelHandler}
      continue={this.purchaseContinueHandler}
      price={this.state.totalPrice}/>
    }
    if (this.state.loading) {
      modalContent = <Spinner />
    }

    return (
      <Aux>
        <Modal show={this.state.goCheckout} closeModal={this.purchaseCancelHandler}>
          {modalContent}
        </Modal>
        {content}
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios);