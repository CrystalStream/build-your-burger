import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Ingredient from '../../../hoc/Ingredient';
import './BurgerIngrediente.scss';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = (
          <Ingredient>
            <div className="bread-bottom">&nbsp;</div>
          </Ingredient>
        )
        break;

      case 'bread-top':
        ingredient = (
          <Ingredient>
            <div className="bread-top">&nbsp;
              <div className="seeds-1">&nbsp;</div>
              <div className="seeds-2">&nbsp;</div>
            </div>
          </Ingredient>
        )
        break;

      case 'meat':
        ingredient = (
          <Ingredient>
            <div className="meat">&nbsp;</div>
          </Ingredient>
        )
        break;

      case 'cheese':
        ingredient = (
          <Ingredient>
            <div className="cheese">&nbsp;</div>
          </Ingredient>
        )
        break;

      case 'salad':
        ingredient = (
          <Ingredient>
            <div className="salad">&nbsp;</div>
          </Ingredient>
        )
        break;

      case 'bacon':
        ingredient = (
          <Ingredient>
            <div className="bacon">&nbsp;</div>
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