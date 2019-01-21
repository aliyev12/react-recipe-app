import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {recipePropType} from './prop-types/propTypes';

import './RecipeList.css';
/* COMPONENTS */
import Recipe from './Recipe';

export class RecipeList extends Component {
  // Declare prop types
  static propTypes = {
    recipes: PropTypes.arrayOf (PropTypes.shape (recipePropType)),
  };

  render () {
    // Loop through recipes array received through props and for each recipe call Recipe component
    const recipes = this.props.recipes.map (
      recipe => // Pss recipe id and the entire recipe object to Recipe component
      <Recipe key={recipe.id} {...recipe} />
    );

    return <div className="recipes-container">{recipes}</div>;
  }
}

export default RecipeList;
