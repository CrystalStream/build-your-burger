import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Ingredient from '../../../hoc/Ingredient';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = (
          <Ingredient>
            <div className="bread-bottom"></div>
          </Ingredient>
        )
        break;

      case 'bread-top':
        ingredient = (
          <Ingredient>
            <div className="bread-top">
              <div className="seeds-1"></div>
              <div className="seeds-2"></div>
            </div>
          </Ingredient>
        )
        break;

      case 'meat':
        ingredient = (
          <Ingredient>
            <div className="meat"></div>
          </Ingredient>
        )
        break;

      case 'cheese':
        ingredient = (
          <Ingredient>
            <div className="cheese"></div>
          </Ingredient>
        )
        break;

      case 'salad':
        ingredient = (
          <Ingredient>
            <div className="salad"></div>
          </Ingredient>
        )
        break;

      case 'bacon':
        ingredient = (
          <Ingredient>
            <div className="bacon"></div>
          </Ingredient>
        )
        break;
    
      default:
        ingredient = null;
        break;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;