import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-400 transition ease-in-out delay-550 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex text-indigo-700  items-center font-medium dark:text-indigo-400 ">
        <div className="pr-4  transition ease-in-out delay-550 hover:text-white font-bold mb-2 ">
          <Link to={'/'}>Home</Link>
        </div>
        <div className="transition ease-in-out delay-550 hover:text-white font-bold mb-2">
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
