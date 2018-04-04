import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../actions/actionsTypes';

const intialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 0
};


const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  meat: 0.7,
  cheese: 0.9
}


const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient]
      };
  
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredient]
      };
    default: 
      return state;
  }
};

export default reducer;