import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/Checkout/CheckoutSummary';
import ContactData from './ConctadData/ContactData';

class Checkout extends Component {
  
  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/form');
  }

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.props.ings}
            canceled={this.checkoutCancelHandler}
            continue={this.checkoutContinueHandler}/>
        <Route path={this.props.match.url + '/form'} 
            component={ContactData}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    ings: state.ingredients
  }
}


export default connect(mapStateToProps)(Checkout);
