// ./src/Home.js
import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import Bus from './Bus'
import Cart from './Cart'

const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><NavLink to="/tacos/bus">Bus</NavLink></li>
      <li><NavLink to="/tacos/cart">Cart</NavLink></li>
    </ul>
    <Route
      path="/tacos/bus"
      exact
      render={() => <Bus />}
    />
    <Route
      path="/tacos/cart"
      exact
      render={() => <Cart />}
    />
  </div>
)

export default Tacos;