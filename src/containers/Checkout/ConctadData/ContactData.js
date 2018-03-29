import React, { Component } from 'react'

import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input'

import './ContactData.scss';

export default class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elemType: 'input',
        opts: { type: 'text', placeholder: 'Enter your name', name: 'name', value: ''}
      },
      street: {
        elemType: 'input',
        opts: { type: 'text', placeholder: 'Enter you street', name: 'street', value: ''}
      },
      zipcode: {
        elemType: '',
        opts: { type: '', placeholder: 'Enter you Zip code', name: 'zipcode', value: ''}
      },
      country: {
        elemType: 'input',
        opts: { type: 'text', placeholder: 'Enter you country', name: 'country', value: ''}
      },
      email: {
        elemType: 'email',
        opts: { type: 'email', placeholder: 'Enter you email', name: 'email', value: ''}
      },
      deliverymethod: {
        elemType: 'select',
        opts: { type: 'text', options: [
          { value: 'fastest', displayValue: 'Let Flash bring that to me! (he would really like a good tip!)'},
          { value: 'cheapest', displayValue: 'i\'ll be preparing for a movie meanwhile' }
        ], 
        name: 'deliverymethod', 
        value: 'fastest' }
      }
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      contactInfo: {
        name: this.state.orderForm.name.opts.value,
        email: this.state.orderForm.email.opts.value,
        deliveryMethod: this.state.orderForm.deliverymethod.opts.value,
        address: {
          street: this.state.orderForm.street.opts.value,
          zipCode: this.state.orderForm.zipcode.opts.value,
          country: this.state.orderForm.country.opts.value,
        }
      }
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

  inputFormChangedHanlder = (e, inpId) => {
    const orderForm = { ...this.state.orderForm };
    const elemnt = { ...orderForm[inpId] }
    const configElem = { ...elemnt.opts }
    configElem.value = e.target.value;
    elemnt.opts = configElem
    orderForm[inpId] = elemnt;
    this.setState({ orderForm: orderForm })
  }

  render() {
    let inputs = Object.keys(this.state.orderForm)
      .map( i => this.state.orderForm[i])
      .map( (inp, i) => <Input key={inp.opts.name + i} 
          changed={(e) => this.inputFormChangedHanlder(e, inp.opts.name) } 
          elemType={inp.elemType} 
          config={inp.opts}/>)
    let content = (
      <form action="">
        {inputs}
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
