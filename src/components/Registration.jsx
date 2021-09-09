import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    password_confirmation: '',
  });
  const [response, setResponse] = useState({});
  const [request, setRequest] = useState('');

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const headers = {
      'Access-Control-Allow-Origin': '*',
    };

    axios.post(
      // 'http://localhost:3000/users',
      'https://lit-ridge-70863.herokuapp.com/users',
      data,
      { headers },
      { mode: 'cors' },
    ).then((response) => {
      setResponse(response.data);
    }).catch((error) => {
      setResponse(error.message);
    });
    e.preventDefault();
  };
  console.log(request);
  console.log(response);
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
        type="text"
        name="request"
        placeholder="server"
        onChange={(e) => setRequest(e.target.value)}
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
