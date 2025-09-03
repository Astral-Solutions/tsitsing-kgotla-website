import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Public/images/KgotlhaLogo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src={logo} alt="Kgotla Logo" className="logo-img" />
            Kgotla ya Rakhudu
          </Link>
          <nav>
            <button 
              className="mobile-menu-toggle" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              ☰
            </button>
            <ul id="nav-menu" className={isMobileMenuOpen ? 'mobile-open' : ''}>
              <li>
                <Link 
                  to="/" 
                  className={isActive('/') ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={isActive('/about') ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/heritage" 
                  className={isActive('/heritage') ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Heritage
                </Link>
              </li>
              <li>
                <Link 
                  to="/events" 
                  className={isActive('/events') ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/notices" 
                  className={isActive('/notices') ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Notices
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={isActive('/contact') ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}