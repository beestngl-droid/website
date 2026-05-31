import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img src="/assets/logos/website_logo_transparent_background.png" alt="BEES Export logo" className="footer-logo" />
              <p>Connecting Indian organic agricultural products, premium spices, and handcrafted heritage with global markets. APEDA registered, gold-standard quality assured partner.</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FiFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Our Products</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/enquiry">Request Quote</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Export Categories</h4>
              <ul>
                <li><Link to="/products/spices-masala">Spices & Masala</Link></li>
                <li><Link to="/products/ayurveda">Ayurveda & Herbal</Link></li>
                <li><Link to="/products/tea-coffee">Tea & Coffee</Link></li>
                <li><Link to="/products/agricultural">Agricultural Products</Link></li>
                <li><Link to="/products/handicrafts">Handicrafts</Link></li>
                <li><Link to="/products/carpets">Carpets & Rugs</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Global Trade Info</h4>
              <ul className="contact-list">
                <li><FiMapPin /> <span>New Delhi, India</span></li>
                <li><FiPhone /> <span>+91 94727 92999</span></li>
                <li><FiMail /> <span>info@bees.org.in</span></li>
              </ul>
              
              <div className="certification-badge">
                <img 
                  src="/assets/certifications/AGRICULTURAL-PROCESSED-FOOD-PRODUCTS-EXPORT-DEVELOPMENT-AUTHORITY-APEDA-1.jpg" 
                  alt="APEDA Certified Exporter logo" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Est. 2015 · &copy; {new Date().getFullYear()} BEES Export Company. All rights reserved. | APEDA Registered Exporter | ISO 9001:2015 Compliant</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
