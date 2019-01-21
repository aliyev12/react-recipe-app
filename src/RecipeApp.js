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
      showForm: true,
    };
    // Bind "this" of component scope to methods below
    this.handleSave = this.handleSave.bind (this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave (recipe) {
    this.setState ((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: uuid (),
        recipes: [...this.state.recipes, newRecipe],
        showForm: false,
      };
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(recipe => recipe.id !== id);
    this.setState({recipes});
  }

  render () {
    // Destructure showForm into separate variable from the RecipeInput state
    // It will be used later to determine whether to show or not the form
    const {showForm} = this.state;
    return (
      <div className="App">
        {/* Pass onNewRecipe callback function to Navbar component so that when "New Recipe" link is clicked, 
        this callback will set showForm within the state to true; therefore, the form will show up */}
        <Navbar onNewRecipe={() => this.setState ({showForm: true})} />

        {/* If showForm is true then render the RecipeInput component (the form) , else -> do nothing*/}
            <div>
              {showForm
                ? <RecipeInput
                    onClose={() => this.setState ({showForm: false})}
                    onSave={this.handleSave}
                  />
                : null}
            </div>
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
