import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      <section className="page-banner">
        <h1>About BEES</h1>
        <p>Home / About Us</p>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-text">
              <h2>India's Leading Export Company</h2>
              <p>BEES is a premier Indian export company dedicated to connecting the finest Indian products with international markets. With years of experience in global trade, we specialize in exporting agricultural products, spices, ayurvedic goods, handicrafts, textiles, and much more.</p>
              <p>Our mission is to bring the richness of Indian products to the world while maintaining the highest standards of quality, reliability, and customer satisfaction.</p>
              <p>We work directly with farmers, manufacturers, and artisans across India to source authentic, premium-quality products that meet international standards and certifications.</p>
            </div>
            <div className="about-intro-image">
              <img src="/assets/banners/Agro-food-processing-industry-1.png" alt="Agro Food Processing" />
            </div>
          </div>
        </div>
      </section>

      <section className="certifications">
        <div className="container">
          <h2>Our Certifications</h2>
          <p>We are registered and certified by leading Indian export authorities</p>
          <div className="cert-grid">
            <div className="cert-item">
              <img src="/assets/certifications/AGRICULTURAL-PROCESSED-FOOD-PRODUCTS-EXPORT-DEVELOPMENT-AUTHORITY-APEDA-1.jpg" alt="APEDA Certification" />
              <h4>APEDA Registered</h4>
              <p>Agricultural & Processed Food Products Export Development Authority</p>
            </div>
            <div className="cert-item">
              <img src="/assets/certifications/FullColor_1280x1024_72dpi.jpg" alt="Certification" />
              <h4>Quality Certified</h4>
              <p>International quality standards compliance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>🎯 Quality First</h4>
              <p>Every product goes through rigorous quality checks before export. We never compromise on quality.</p>
            </div>
            <div className="value-item">
              <h4>🤝 Trust & Transparency</h4>
              <p>We believe in building long-term relationships with our clients through honest and transparent business practices.</p>
            </div>
            <div className="value-item">
              <h4>🌱 Sustainability</h4>
              <p>We promote sustainable sourcing and eco-friendly packaging to minimize environmental impact.</p>
            </div>
            <div className="value-item">
              <h4>⚡ Timely Delivery</h4>
              <p>We understand the importance of timelines in international trade and ensure on-time delivery every time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Want to Partner With Us?</h2>
          <p>We are always looking for new business opportunities and partnerships worldwide.</p>
          <Link to="/enquiry" className="btn btn-primary">Send an Enquiry</Link>
        </div>
      </section>
    </div>
  );
}

export default About;
