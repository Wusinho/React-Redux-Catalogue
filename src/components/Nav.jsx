import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to="/">
      <h1>Home</h1>
    </Link>
    <ul className="nav-links">
      <Link to="/shop">
        <li>Shop</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
