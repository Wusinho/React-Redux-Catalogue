import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentUser,
  logOut,
  selectIsLoggedIn,
  loadcoach,
  selectCurrentUserToken,
} from '../store/sessionSlice';

import '../style/Nav.scss';

const Nav = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentUserToken);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logOut());
    e.preventDefault();
  };
  useEffect(() => {
    if (loggedIn) {
      dispatch(loadcoach(token));
    }
  });

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
              <li>{currentUser.user}</li>
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
