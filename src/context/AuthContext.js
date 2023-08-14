import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem('isLoggedIn') === 'true'
  );
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem('user')) || {}
  );

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const login = () => {
    setIsLoggedIn(true);
    window.localStorage.setItem('isLoggedIn', 'true');
  };

  const signup = (newUser) => {
    setUser(newUser);
    setIsLoggedIn(true);
    window.localStorage.setItem('user', JSON.stringify(newUser));
    window.localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    window.localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        updateUser,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
