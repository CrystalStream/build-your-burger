import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom';

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
    let checkoutContent = <Redirect to="/" />
    if(this.props.ings) {
      const purchased = this.props.purchased ? <Redirect to="/" /> : null;
      checkoutContent = (
        <div>
          {purchased}
          <CheckoutSummary ingredients={this.props.ings}
            canceled={this.checkoutCancelHandler}
            continue={this.checkoutContinueHandler}/>
          <Route path={this.props.match.url + '/form'} 
              component={ContactData}/>
        </div>
      )
    }
    return checkoutContent;
  }
}


const mapStateToProps = state => {
  return {
    ings: state.br.ingredients,
    purchased: state.or.purchased
  }
}

export default connect(mapStateToProps)(Checkout);
