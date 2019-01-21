import React, { Component } from "react";
import Recipe from "./Recipe";
import "./RecipeList.css";
import PropTypes from "prop-types";

export class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "pasta",
        ingredients: ["flour", "water"],
        instructions: "Mix Ingredients",
        img: "https://source.unsplash.com/400x400/?pasta"
      },
      {
        title: "bread",
        ingredients: ["flour", "water"],
        instructions: "Mix Ingredients",
        img: "https://source.unsplash.com/400x400/?pasta"
      },
      {
        title: "rice",
        ingredients: ["flour", "water"],
        instructions: "Mix Ingredients",
        img: "https://source.unsplash.com/400x400/?pasta"
      }
    ]
  };

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));

    return <div className="recipes-container">{recipes}</div>;
  }
}

export default RecipeList;
