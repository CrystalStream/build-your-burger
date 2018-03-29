import React, { Component } from 'react'

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import errorHandler from '../../hoc/withErrorHandler/withErrorHanlder'

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  
  componentDidMount() {
    axios.get('/orders.json')
      .then( res => {
        let fetchedOrders = [];
        for (const key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            key: key
          })
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch( err => {
        this.setState({ loading: false });
      })
  }

  render() {
    let orders = this.state.orders.map( o => <Order key={o.key} order={o} />);
    console.log('orders: ', orders);
    return (
      <div>
        {orders}
      </div>
    )
  }
}

export default errorHandler(Orders, axios);