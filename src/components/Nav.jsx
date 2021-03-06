import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  logOut,
  selectIsLoggedIn,
  loadcoach,
  selectCurrentUserToken,
} from '../store/sessionSlice';
import '../style/Nav.scss';

const Nav = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectCurrentUserToken);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logOut());
    e.preventDefault();
  };
  useEffect(() => {
    if (loggedIn && token) {
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
              <li>Appointments</li>
            </NavLink>
            <NavLink to="">
              <button type="button" onClick={handleLogout} className="button">
                Log Out
              </button>
            </NavLink>
          </>
        ) : (
          <NavLink to="/sign_in">
            <li>Sign in</li>
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
