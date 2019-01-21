import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './RecipeInput.css';

export class RecipeInput extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };
  static defaultProps = {
    onClose () {
      console.log ('closing...');
    },
  };

  constructor (props) {
    super (props);

    this.state = {
      title: '',
      instructions: '',
      ingredients: [''],
      img: '',
    };
    // Bind the "this" for RecipeInput class to each method below
    this.handleChange = this.handleChange.bind (this);
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
  }

  // Handle input change
  handleChange (e) {
    // Using existing names for input fields, determine which key within the state to update using []
    this.setState ({
      [e.target.name]: e.target.value,
    });
  }

  // Handle adding new ingredients
  handleNewIngredient() {
      // Deconstruct ingredients property from state into another variable
      const {ingredients} = this.state;
      // Pick up ingredient property within state
      // Then spread the ingredients array, and push a new empty string into that array
      this.setState({ingredients: [...ingredients, '']});
  }

  // Hangle change of each engredient
  handleChangeIng(e) {
      // Extract the index of element that will be modifies from the name of the input field
      // Split the name of event target (input) and get the second element with index 1, 
      // aka the actual index of the ingredient set in the inputs array under render()
      const index = Number(e.target.name.split('-')[1]);
      // Set ingredients be equal to a new array returned by map() where if index of ingredient currently
      // in the state matches the extracted index above, then that element will be whatever the event.target.value is
      const ingredients = this.state.ingredients.map((ing, i) => (
          i === index ? e.target.value : ing
      ));
      // Set ingredients property of the state to be equal to the ingredients array created above with map()
      this.setState({ingredients});
  }

  render () {
    const {title, instructions, ingredients, img} = this.state;
    const {onClose} = this.props;
    // Create JSX inputs array that will contain input fields for each ingredient currently within ingredients property of the state
    let inputs = ingredients.map ((ingredient, i) => (
      <div className="recipe-form-line" key={`ingredient-${i}`}>
        <label>{i + 1}.
          <input
            type="text"
            name={`ingredient-${i}`} /*Very Important! This name will be later used to identify the index of the ingredient that needs to be modified */
            size={45}
            autoComplete="off"
            placeholder="Ingredient"
            onChange={this.handleChangeIng}
          />
        </label>
      </div>
    ));
    return (
      <div className="recipe-form-container">
        <form
          className="recipe-form"
          onSubmit={() => {
            /*this.hangleSubmit*/
          }}
        >
          <button className="close-button" type="button" onClick={onClose}>
            X
          </button>
          <div className="recipe-form-line">
            <label htmlFor="recipe-title-input">Title</label>
            <input
              type="text"
              id="recipe-title-input"
              key="title"
              name="title"
              value={title}
              size={42}
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
          <label htmlFor="recipe-instructions-input" style={{marginTop: '5px'}}>
            Instructions
          </label>
          <textarea
            key="instructions"
            name="instructions"
            type="Instructions"
            id="recipe-instructions-input"
            cols="50"
            rows="8"
            autoComplete="off"
            value={instructions}
            onChange={this.handleChange}
          />
          <p>Ingredients:</p>
          {inputs}
          <button
            className="buttons"
            type="button"
            onClick={this.handleNewIngredient}
          >
            +
          </button>
          <div className="recipe-form-line">
            <label htmlFor="recipe-img-input">Image URL</label>
            <input
              type="text"
              id="recipe-img-input"
              placeholder=""
              name="img"
              value={img}
              size={36}
              autoComplete="off"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="buttons"
              style={{alignSelf: 'flex-end', marginRight: 0}}
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RecipeInput;
