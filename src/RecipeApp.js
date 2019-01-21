import React, {Component} from 'react';

import './RecipeApp.css';
/* COMPONENTS */
import Navbar from './Navbar';
import RecipeList from './RecipeList';

class RecipeApp extends Component {
  constructor (props) {
    super (props);

    this.state = {
      recipes: [
        {
          title: 'pasta',
          ingredients: ['flour', 'water'],
          instructions: 'Mix Ingredients',
          img: 'https://source.unsplash.com/400x400/?pasta',
        },
        {
          title: 'bread',
          ingredients: ['flour', 'water'],
          instructions: 'Mix Ingredients',
          img: 'https://source.unsplash.com/400x400/?pasta',
        },
        {
          title: 'rice',
          ingredients: ['flour', 'water'],
          instructions: 'Mix Ingredients',
          img: 'https://source.unsplash.com/400x400/?pasta',
        },
      ],
    };
  }
  render () {
    return (
      <div className="App">
        <Navbar />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
