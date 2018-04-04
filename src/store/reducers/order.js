import * as orderTypes from '../actions/actionsTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case orderTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      }
    case orderTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      }
    case orderTypes.PURCHASE_BURGER_SUCCESS:
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(Object.assign({}, action.orderData, {id: action.orderId}))
      }
    case orderTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default reducer