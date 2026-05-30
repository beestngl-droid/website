import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-left">
            <span><FiPhone /> +91 98765 43210</span>
            <span><FiMail /> info@bees.org.in</span>
          </div>
          <div className="header-top-right">
            <span><FiMapPin /> India</span>
            <span>APEDA Certified Exporter</span>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <Link to="/" className="logo">
            <img src="/assets/logos/Bees_Logo.png" alt="BEES Export Company" />
          </Link>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className={isActive('/about')} onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/products" className={isActive('/products')} onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/contact" className={isActive('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/enquiry" className="btn-enquiry" onClick={() => setMenuOpen(false)}>Get Quote</Link>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
