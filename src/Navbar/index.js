import React from 'react';
import { Link }from 'react-router-dom';
import './index.css';

export default() => (
  <ul className="navbar">
    <li className="navbarLink">
      <Link to="/"><p>Home</p></Link>
    </li>
    <li className="navbarLink">
      <Link to="/manage"><p>Manage</p></Link>
    </li>
  </ul>
)
