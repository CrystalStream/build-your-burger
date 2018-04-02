import React, { Component } from 'react'
import { connect } from 'react-redux'

import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input'

import './ContactData.scss';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elemType: 'input',
        opts: { type: 'text', placeholder: 'Enter your name', name: 'name', value: ''},
        validation: { required: true },
        valid: false,
        touched: false
      },
      street: {
        elemType: 'input',
        opts: { type: 'text', placeholder: 'Enter you street', name: 'street', value: ''},
        validation: { required: true },
        valid: false,
        touched: false
      },
      zipcode: {
        elemType: '',
        opts: { type: '', placeholder: 'Enter you Zip code', name: 'zipcode', value: ''},
        validation: { required: true, minLength: 3, maxLength: 10 },
        valid: false,
        touched: false
      },
      country: {
        elemType: 'input',
        opts: { type: 'text', placeholder: 'Enter you country', name: 'country', value: ''},
        validation: { required: true },
        valid: false,
        touched: false
      },
      email: {
        elemType: 'email',
        opts: { type: 'email', placeholder: 'Enter you email', name: 'email', value: ''},
        validation: { required: true },
        valid: false,
        touched: false
      },
      deliverymethod: {
        elemType: 'select',
        opts: { type: 'text', options: [
          { value: 'fastest', displayValue: 'Let Flash bring that to me! (he would really like a good tip!)'},
          { value: 'cheapest', displayValue: 'i\'ll be preparing for a movie meanwhile' }
        ], 
        name: 'deliverymethod', 
        value: 'fastest' },
        validation: {},
        valid: true
      }
    },
    validSubmit: false,
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ings,
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

  checkvalidity(value, rules) {
    let valid = true;
    // This is to prevent multiple if's statements to alter an already resolved rule
    if (rules.required) {
      valid = value.trim() !== '' && valid;
    }

    if (rules.minLength) {
      valid = value.length >= rules.minLength && valid;
    }

    if (rules.maxLength) {
      valid = value.length <= rules.maxLength && valid;
    }

    return valid;
  }

  inputFormChangedHanlder = (e, inpId) => {
    const orderForm = { ...this.state.orderForm };
    const elemnt = { ...orderForm[inpId] }
    const configElem = { ...elemnt.opts }
    configElem.value = e.target.value;
    elemnt.opts = configElem
    elemnt.valid = this.checkvalidity(elemnt.opts.value, elemnt.validation);
    elemnt.touched = true;
    orderForm[inpId] = elemnt;

    let properties = Object.entries(this.state.orderForm).map(e => e.pop());
    const formValidity = properties.every( p => p.valid);
    this.setState({ orderForm: orderForm, validSubmit: formValidity })
  }

  render() {
    let inputs = Object.keys(this.state.orderForm)
      .map( i => this.state.orderForm[i])
      .map( (inp, i) => <Input key={inp.opts.name + i} 
          changed={(e) => this.inputFormChangedHanlder(e, inp.opts.name) } 
          elemType={inp.elemType} 
          config={inp.opts}
          valid={inp.valid}
          validatable={inp.validation}
          touched={inp.touched}/>)
    let content = (
      <form action="">
        {inputs}
        <Button btnType="success" clicked={this.orderHandler} disabled={!this.state.validSubmit}>Order</Button>
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

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

export default connect(mapStateToProps)(ContactData);
