import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' ? 'active' : '';
    }
    return location.pathname.startsWith(path) ? 'active' : '';
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-top">
        <div className="container">
          <div className="header-top-left">
            <span><FiPhone /> +91 94727 92999</span>
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
          <Link to="/" className="logo" aria-label="BEES Home">
            <img 
              src={scrolled ? "/assets/logos/Bees_Logo.png" : "/assets/logos/website_logo_transparent_background.png"} 
              alt="BEES Export Company" 
            />
          </Link>

          {/* Mobile nav backdrop overlay */}
          <div 
            className={`nav-overlay ${menuOpen ? 'nav-overlay-visible' : ''}`} 
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className={isActive('/about')} onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/products" className={isActive('/products')} onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/contact" className={isActive('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/enquiry" className="btn-enquiry" onClick={() => setMenuOpen(false)}>Get Quote</Link>
          </nav>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
