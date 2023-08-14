import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Button } from '../components/layout/assets/Button';
import Error from '../components/layout/assets/Error';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      if (
        formData.email === storedUser.email &&
        formData.password === storedUser.password
      ) {
        login();
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } else {
      setError('User not found');
    }
  };

  return (
    <div className="container mx-auto mt-8 text-indigo-700 dark:text-indigo-400">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-96"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-96"
            required
          />
        </div>
        <Button type="submit">Log in</Button>
      </form>
      <Error>{error}</Error>
      <p className="mt-4">
        Don't have an account?{' '}
        <Link className="underline" to="/singup">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
