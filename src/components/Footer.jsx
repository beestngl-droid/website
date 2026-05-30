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
              <img src="/assets/logos/Bees_Logo.png" alt="BEES" className="footer-logo" />
              <p>Leading Indian export company specializing in agricultural products, spices, ayurveda, handicrafts, and more. APEDA certified exporter serving global markets.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FiFacebook /></a>
                <a href="#" aria-label="Twitter"><FiTwitter /></a>
                <a href="#" aria-label="Instagram"><FiInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
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
              <h4>Contact Info</h4>
              <ul className="contact-list">
                <li><FiMapPin /> <span>India</span></li>
                <li><FiPhone /> <span>+91 98765 43210</span></li>
                <li><FiMail /> <span>info@bees.org.in</span></li>
              </ul>
              <div className="certification-badge">
                <img src="/assets/certifications/AGRICULTURAL-PROCESSED-FOOD-PRODUCTS-EXPORT-DEVELOPMENT-AUTHORITY-APEDA-1.jpg" alt="APEDA Certified" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 BEES Export Company. All rights reserved. | APEDA Registered Exporter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
