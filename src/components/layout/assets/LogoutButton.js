import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

function LogoutButton() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <div>
      {isLoggedIn && (
        <div>
          <button
            className="border-2 border-red-500 bg-red-500 text-white py-1 w-20 rounded-md transition ease-in-out delay-550 hover:bg-white hover:text-red-500 font-semibold mb-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default LogoutButton;
