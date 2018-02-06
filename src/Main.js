// ./src/Home.js
import React from 'react';
import { NavLink } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/tacos">Tacos</NavLink>
        <NavLink to="/sandwiches">Sandwiches</NavLink>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Main;