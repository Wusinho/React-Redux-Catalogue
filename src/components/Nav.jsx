import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.scss';

const Nav = () => (
  <nav className="sticky-top navbar">
    <ul className="nav-links">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/champs">
        <li>Champs</li>
      </Link>
      <Link to="/registration">
        <li>Registration</li>
      </Link>
      <Link to="/sign_in">
        <li>Sign in</li>
      </Link>

    </ul>
  </nav>
);

export default Nav;
