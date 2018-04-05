import React, { Component } from 'react'
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import errorHandler from '../../hoc/withErrorHandler/withErrorHanlder';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as orderActions from '../../store/actions';

class Orders extends Component {
  
  componentDidMount() {
    this.props.onFetchOrders(this.props.token);
  }

  render() {
    let orders = this.props.orders.map( o => <Order key={o.key} order={o} />);
    if (this.props.loading) {
      orders = <Spinner />
    }
    console.log('orders: ', orders);
    return (
      <div>
        {orders}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.or.orders,
    loading: state.or.loading,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token) => dispatch(orderActions.fetchOrders(token))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Orders, axios));