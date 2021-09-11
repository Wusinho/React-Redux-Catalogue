import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/champs">
          <li>Champs</li>
        </NavLink>
        {loggedIn ? (
          <>
            <NavLink to="/player">
              {currentUser}
            </NavLink>
            <li>
              <button type="button" onClick={handleLogout} className="btn btn-danger">Log Out</button>
            </li>
          </>
        )
          : (
            <div>
              <NavLink to="/registration">
                <li>Registration</li>
              </NavLink>
              <NavLink to="/sign_in">
                <li>Sign in</li>
              </NavLink>
            </div>
          )}
      </ul>
    </nav>
  );
};

export default Nav;
