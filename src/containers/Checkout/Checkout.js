import React, { Component } from 'react'

import CheckoutSummary from '../../components/Order/Checkout/CheckoutSummary';

export default class Checkout extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      meat: 1,
      cheese: 1
    }
  }

  componentDidMount() {
    let query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (const param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients })
    
  }
  
  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/form');
  }

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients}
            canceled={this.checkoutCancelHandler}
            continue={this.checkoutContinueHandler}/>
      </div>
    )
  }
}
