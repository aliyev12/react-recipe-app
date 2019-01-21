import React, {Component} from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static propTypes = {
    onNewRecipe: PropTypes.func.isRequired,
  };
  static defaultProps = {
    onNewRecipe () {},
  };

  render () {
    return (
      <header className="navbar-wrap">
        <h2><a>Recipe App</a></h2>
        <nav className="nav-links">
          <li>
            <a onClick={this.props.onNewRecipe}>New Recipe</a>
          </li>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </nav>
      </header>
    );
  }
}

export default Navbar;
