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
      nextRecipeId: uuid()
    };

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
      console.log('closing...');
  }
  
  render () {
    return (
      <div className="App">
        <Navbar />
        <RecipeInput onClose={this.onClose} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
