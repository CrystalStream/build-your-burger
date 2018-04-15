import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredient: name
  }
}

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredient: name
  }
}

export const setIngredient = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENT,
    ingredients: ingredients
  }
}


export const initIngredients = () => {
  return dispatch => {
    axios.get('/ingredients.json')
    .then( res => {
      dispatch(setIngredient(res.data))
    })
    .catch( err => {
      
    })
  }
}
