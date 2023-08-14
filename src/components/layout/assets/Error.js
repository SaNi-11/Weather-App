import React, { useState, useEffect } from 'react';

const Error = ({ children }) => {
  const [error, setError] = useState('');

  useEffect(() => {
    setError(children);

    const timer = setTimeout(() => {
      setError('');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [children]);

  return (
    <div>{error && <p className="text-red-500 mt-4 mb-4">{error}</p>}</div>
  );
};

export default Error;
