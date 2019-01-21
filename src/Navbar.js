import React, { Component } from 'react'
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <header className="navbar-wrap">
        <h2><a href="#">Recipe App</a></h2>
        <nav className="nav-links">
            <li>
                <a href="#">New Recipe</a>
            </li>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
        </nav>
      </header>
    )
  }
}

export default Navbar
