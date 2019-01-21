import React, {Component} from 'react';
import uuid from 'uuid';

import './RecipeApp.css';
/* COMPONENTS */
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor (props) {
    super (props);

    this.state = {
      recipes: [
        {
          id: uuid (),
          title: 'pasta',
          ingredients: ['flour', 'water'],
          instructions: 'Mix Ingredients',
          img: 'https://source.unsplash.com/400x400/?pasta',
        },
        {
          id: uuid (),
          title: 'bread',
          ingredients: ['flour', 'water'],
          instructions: 'Mix Ingredients',
          img: 'https://source.unsplash.com/400x400/?pasta',
        },
        {
          id: uuid (),
          title: 'rice',
          ingredients: ['flour', 'water'],
          instructions: 'Mix Ingredients',
          img: 'https://source.unsplash.com/400x400/?pasta',
        },
      ],
      nextRecipeId: uuid (),
    };
    // Bind "this" of component scope to methods below
    this.onClose = this.onClose.bind (this);
    this.handleSave = this.handleSave.bind(this);
  }

  onClose (e) {
    e.preventDefault ();
    console.log ('closing...');
  }

  onSave (e) {
    console.log ('saving from RecipeApp');
    console.log (e);
  }

  handleSave (recipe) {
    this.setState((prevState, props) => {
        const newRecipe = {...recipe, id: this.state.nextRecipeId};
        return {
            nextRecipeId: uuid(),
            recipes: [...this.state.recipes, newRecipe]
        }
    });
  }

  render () {
    return (
      <div className="App">
        <Navbar />
        <RecipeInput onClose={this.onClose} onSave={this.handleSave} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
