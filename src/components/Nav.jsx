import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.scss';

const Nav = () => (
  <nav className="sticky-top navbar">
    <ul className="nav-links">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
