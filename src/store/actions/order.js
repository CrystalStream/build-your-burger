import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  }
}

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error
  }
}

export const purchaseBurgerInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
}

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart())
    axios.post('/orders.json?auth=' + token, orderData)
    .then(res => {
      dispatch(purchaseBurgerSuccess(res.data.name, orderData));
    })
    .catch(err => {
      dispatch(purchaseBurgerFail(err));
    })
  }
}

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  }
}

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error
  }
}

export const fetchOrdersInit = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  }
}

export const fetchOrders = (token) => {
  return dispatch => {
    dispatch(fetchOrdersInit());
    axios.get('/orders.json?auth=' + token)
      .then( res => {
        let fetchedOrders = [];
        for (const key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            key: key
          })
        }
        dispatch(fetchOrdersSuccess(fetchedOrders))
      })
      .catch( err => {
        dispatch(fetchOrdersFail(err))
      })
  }
}
