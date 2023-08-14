import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Button } from '../components/layout/assets/Button';
import Error from '../components/layout/assets/Error';

const Signup = () => {
  const { signup, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [navigate, isLoggedIn]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length >= 6) {
      signup(formData);
      localStorage.setItem('user', JSON.stringify(formData));
      navigate('/');
    } else {
      setError('Password must be at least 6 characters');
    }
  };

  return (
    <div className="container mx-auto mt-8 text-indigo-700 dark:text-indigo-400">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fname" className="block font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            value={formData.fname}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lname" className="block font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            value={formData.lname}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
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
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
      <Error>{error}</Error>
      <p className="mt-4">
        Already have an account?{' '}
        <Link className="underline" to="/login">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
