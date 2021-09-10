import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentUser,
  logOut,
  selectIsLoggedIn,
} from '../store/sessionSlice';

import '../style/Nav.scss';

const Nav = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logOut());
    e.preventDefault();
  };

  return (
    <nav className="sticky-top navbar">
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/champs">
          <li>Champs</li>
        </Link>
        {loggedIn ? (
          <>
            <li>
              {currentUser}
              {/* 'hello' */}
            </li>
            <li>
              <button type="button" onClick={handleLogout} className="btn btn-danger">Log Out</button>
            </li>
          </>
        )
          : (
            <>
              <Link to="/registration">
                <li>Registration</li>
              </Link>
              <Link to="/sign_in">
                <li>Sign in</li>
              </Link>
            </>
          )}
      </ul>
    </nav>
  );
};

export default Nav;
