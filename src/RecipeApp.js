import React, { Component } from "react";
import "./RecipeApp.css";
import Navbar from "./Navbar";
import RecipeList from "./RecipeList";

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;



// {/* < Recipe
// title={`pasta`}
// ingredients={['flour', 'water']}
// instructions="Mix Ingredients"
// img='https://source.unsplash.com/400x400/?pasta'
// />*/}

// import React, { Component } from 'react';
// import './RecipeApp.css';
// import Recipe from './Recipe';
// import Navbar from './Navbar';

// class RecipeApp extends Component {
//   render() {
//     return (

//         <div className="App">
//             < Navbar />
//             <div className="recipes-container">
//                 < Recipe
//                 title={`pasta`}
//                 ingredients={['flour', 'water']}
//                 instructions="Mix Ingredients"
//                 img='https://source.unsplash.com/400x400/?pasta'
//                 />
//                 < Recipe
//                 title="pasta"
//                 ingredients={['flour', 'water']}
//                 instructions="Mix Ingredients"
//                 img='https://source.unsplash.com/400x400/?pasta'
//                 />
//                 < Recipe
//                 title="pasta"
//                 ingredients={['flour', 'water']}
//                 instructions="Mix Ingredients"
//                 img='https://source.unsplash.com/400x400/?pasta'
//                 />
//             </div>

//         </div>
//     )
//   }
// }

// export default RecipeApp;
