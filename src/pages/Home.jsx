import React from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiAward, FiTruck, FiUsers } from 'react-icons/fi';
import CategoryCard from '../components/CategoryCard';
import categories from '../data/categories';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Premium Indian Products<br />For Global Markets</h1>
          <p>Leading exporter of Spices, Ayurveda, Agricultural Products, Handicrafts & more. APEDA Certified.</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Explore Products</Link>
            <Link to="/enquiry" className="btn btn-outline">Request Quote</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <FiGlobe className="stat-icon" />
              <h3>50+</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-item">
              <FiAward className="stat-icon" />
              <h3>APEDA</h3>
              <p>Certified Exporter</p>
            </div>
            <div className="stat-item">
              <FiTruck className="stat-icon" />
              <h3>1000+</h3>
              <p>Shipments Delivered</p>
            </div>
            <div className="stat-item">
              <FiUsers className="stat-icon" />
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-text">
              <h2>India's Trusted Export Partner</h2>
              <p>BEES is a leading Indian export company specializing in agricultural products, spices, ayurvedic products, handicrafts, textiles, and more. We connect Indian manufacturers with international buyers, ensuring premium quality and timely delivery.</p>
              <p>Registered with APEDA (Agricultural & Processed Food Products Export Development Authority), we maintain the highest standards of quality and compliance for international trade.</p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="about-image">
              <img src="/assets/banners/Agro-food-processing-industry.png" alt="Indian Export Industry" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Export Categories</h2>
            <p>We export a wide range of premium Indian products to markets worldwide</p>
          </div>
          <div className="categories-grid">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/products" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose BEES?</h2>
            <p>Your reliable partner for Indian exports</p>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">🏅</div>
              <h4>APEDA Certified</h4>
              <p>Government registered exporter with all necessary certifications for international trade.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">✅</div>
              <h4>Quality Assured</h4>
              <p>Strict quality control at every stage — from sourcing to packaging to delivery.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🌍</div>
              <h4>Global Shipping</h4>
              <p>We ship to 50+ countries with reliable logistics partners and on-time delivery.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">💰</div>
              <h4>Competitive Pricing</h4>
              <p>Direct sourcing from manufacturers ensures the best prices for bulk orders.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📦</div>
              <h4>Custom Packaging</h4>
              <p>Private labeling and custom packaging available for all products.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🤝</div>
              <h4>Dedicated Support</h4>
              <p>Personal account manager for every client. 24/7 communication support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Import Premium Indian Products?</h2>
          <p>Get in touch with us for pricing, samples, and bulk order inquiries.</p>
          <div className="cta-buttons">
            <Link to="/enquiry" className="btn btn-primary">Request a Quote</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
