import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENT } from '../actions/actionsTypes';

const intialState = {
  ingredients: null,
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

    case SET_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...action.ingredients
        },
        totalPrice: 0
      };

    default: 
      return state;
  }
};

export default reducer;