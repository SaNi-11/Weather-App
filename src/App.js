import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Singup';
import About from './pages/About';
import ThemeToggleButton from './components/layout/assets/ThemToggleButton';
import LogoutButton from './components/layout/assets/LogoutButton';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Router>
      <div className="flex flex-col h-screen ">
        <Navbar />
        <main className="h-full self-auto bg-gray-400 transition ease-in-out delay-550 dark:bg-gray-800">
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<Signup />} />
          </Routes>
        </main>
        <div className="bg-gray-400 pl-10 transition ease-in-out delay-550 dark:bg-gray-800">
          <ThemeToggleButton />
          {isLoggedIn ? <LogoutButton /> : null}
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
