import React, { Component } from 'react'

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/Checkout/CheckoutSummary';
import ContactData from './ConctadData/ContactData';

export default class Checkout extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      meat: 1,
      cheese: 1
    },
    totalPrice: 0
  }

  componentWillMount() {
    let query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price;
    for (const param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price })
    
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
        <Route path={this.props.match.url + '/form'} 
            component={(props) => <ContactData {...props} ingredients={this.state.ingredients} price={this.state.totalPrice}/>}/>
      </div>
    )
  }
}
