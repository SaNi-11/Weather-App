import React, { useContext, useState, useEffect } from 'react';
import { Button } from '../components/layout/assets/Button';
import { AuthContext } from '../context/AuthContext';
import Error from '../components/layout/assets/Error';

const About = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    password: user.password,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (editing) {
      return;
    }
    const updatedUser = { ...user, ...formData };
    window.localStorage.setItem('user', JSON.stringify(updatedUser));
  }, [editing, formData, user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSave = () => {
    if (formData.password.length >= 6) {
      updateUser({ ...user, ...formData });
      setEditing(false);
    } else {
      setError('Password must be at least 6 characters');
    }
  };

  return (
    <div className="bg-gray-400 transition ease-in-out delay-550 dark:bg-gray-800  h-full grid place-items-center ">
      <div className="container mx-auto mt-8 text-indigo-700 dark:text-indigo-400">
        <h2 className="text-2xl font-bold mb-8">About Me</h2>
        {editing ? (
          <div>
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
              />
            </div>
            <Error>{error}</Error>
            <Button onClick={handleSave}>Save</Button>
          </div>
        ) : (
          <div>
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
                disabled={!editing}
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
                disabled={!editing}
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
                disabled={!editing}
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
                disabled={!editing}
              />
            </div>
            <Button onClick={() => setEditing(true)}>Edit</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
