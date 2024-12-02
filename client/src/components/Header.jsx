import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <nav className="flex justify-between items-center relative">
        
        <h1 className="text-xl font-bold cursor-pointer">
          <Link to="/" onClick={closeMenu}>Contact Manager</Link>
        </h1>

        
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

       
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700">
            Home
          </Link>
          <Link to="/create-contact" className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700">
            Create Contact
          </Link>
          <Link to="/view-contacts" className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700">
            View Contacts
          </Link>
          {!token ? (
            <>
              <Link to="/register" className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700">
                Register
              </Link>
              <Link to="/login" className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700">
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </div>

        
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-blue-600 md:hidden">
            <div className="flex flex-col items-center space-y-4 p-4">
              <Link to="/" className="w-full text-center py-2 hover:bg-blue-500" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/create-contact" className="w-full text-center py-2 hover:bg-blue-500" onClick={closeMenu}>
                Create Contact
              </Link>
              <Link to="/view-contacts" className="w-full text-center py-2 hover:bg-blue-500" onClick={closeMenu}>
                View Contacts
              </Link>
              {!token ? (
                <>
                  <Link to="/register" className="w-full text-center py-2 hover:bg-blue-500" onClick={closeMenu}>
                    Register
                  </Link>
                  <Link to="/login" className="w-full text-center py-2 hover:bg-blue-500" onClick={closeMenu}>
                    Login
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full py-2 bg-red-600 hover:bg-red-700"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;