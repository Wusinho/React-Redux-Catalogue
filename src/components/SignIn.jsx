import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn, selectIsLoggedIn } from '../store/sessionSlice';

const SignIn = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    dispatch(signIn(data));
    e.preventDefault();
  };

  if (loggedIn) {
    return <Redirect to="/champs" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sing In</h2>
      <input
        type="text"
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
      <button type="submit">Log In</button>
    </form>
  );
};

export default SignIn;
