import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register, selectIsLoggedIn } from '../store/sessionSlice';

const Registration = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    password_confirmation: '',
  });
  const loggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  if (loggedIn) {
    return <Redirect to="/champs" />;
  }

  const handleSubmit = (e) => {
    dispatch(register(data));
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <input
        type="username"
        name="username"
        placeholder="username"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password_confirmation"
        placeholder="Password confirmation"
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
