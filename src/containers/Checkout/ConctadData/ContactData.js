import React, { Component } from 'react'

import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'

import './ContactData.scss';

export default class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
    }
    axios.post('/orders.json', order)
    .then(res => {
      this.setState({ loading: false });
      this.props.history.replace('/');
      console.log(res)
    })
    .catch(err => {
      this.setState({ loading: false });      
      console.log(err);
    })
  }

  render() {
    let content = (
      <form action="">
        <input type="text" name="name" placeholder="Enter your name"/>
        <input type="email" name="email" placeholder="Enter your email"/>
        <input type="text" name="street" placeholder="Enter your street"/>
        <input type="text" name="postalCode" placeholder="Enter your postal code"/>

        <Button btnType="success" clicked={this.orderHandler}>Order</Button>
      </form>
    );

    if (this.state.loading) {
      content = <Spinner />
    }
    return (
      <div className="ContactData">
        <h4>Enter your Data</h4>
        {content}
      </div>
    );
  }
}
