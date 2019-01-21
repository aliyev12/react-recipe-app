import React, { Component } from "react";
import PropTypes from "prop-types";
import {recipePropType} from './prop-types/propTypes';

import "./RecipeList.css";
/* COMPONENTS */
import Recipe from "./Recipe";


export class RecipeList extends Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape(recipePropType))
  };

  render() {
    const recipes = this.props.recipes.map((recipe, index) => (
      <Recipe key={index} {...recipe} />
    ));

    return <div className="recipes-container">{recipes}</div>;
  }
}

export default RecipeList;
