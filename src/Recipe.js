import React, { Component } from "react";
import "./Recipe.css";
import PropTypes from "prop-types";
import {recipePropType} from './prop-types/propTypes';

class Recipe extends React.Component {
  static propTypes = {
      ...recipePropType,
      id: PropTypes.string.isRequired,
      onDelete: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: "PropTypes.string.isRequired",
    img: "PropTypes.string.isRequired",
    instructions: "PropTypes.string.isRequired",
    ingredients: ["PropTypes.arrayOf(PropTypes.string).isRequired"]
  };

  render() {
    const { title, img, instructions, id, onDelete } = this.props;
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));
    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients:</h4>
          <ul>{ingredients}</ul>
          <h4>Instructions:</h4>
          <p style={{overflow: "hidden", wordBreak: "break-all"}}>{instructions}</p>
          <button onClick={() => onDelete(id)} type="button">DELETE</button>
        </div>
      </div>
    );
  }
}

export default Recipe;
