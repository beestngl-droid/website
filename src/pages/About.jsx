import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiGlobe, FiCheckCircle, FiClock, FiArrowRight } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import RevealOnScroll from '../components/RevealOnScroll';

function About() {
  useEffect(() => {
    document.title = 'About Us — BEES Export Company';
  }, []);

  return (
    <div className="about-page">
      <PageBanner 
        title="Our Enterprise Story" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' }
        ]} 
      />

      <RevealOnScroll>
        <section className="about-content">
          <div className="container">
            <div className="about-intro">
              <div className="about-intro-text">
                <span className="section-badge">Our Legacy</span>
                <h2>India's Leading Export House</h2>
                <p>
                  BEES is a premier Indian export-import corporation, recognized globally for sourcing, inspecting, and transporting gold-standard agricultural commodities, organic spices, hand-woven carpets, and industrial materials.
                </p>
                <p>
                  We collaborate directly with micro-farming clusters, local cooperatives, and certified manufacturers across India. By bypassing middlemen, we guarantee visual transparency, ethical wages, and highly competitive pricing for our international client base.
                </p>
                <p>
                  Whether managing container shipments of cold-pressed oils or dispatching air-freight custom teas, we execute custom logistics with absolute precision, complying with global standards.
                </p>
              </div>
              <div className="about-intro-image">
                <img 
                  src="/assets/banners/Agro-food-processing-industry-1.png" 
                  alt="Agro-food processing facility sorting raw materials" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="certifications">
          <div className="container">
            <span className="section-badge">Quality Credentials</span>
            <h2>Certified Trade Integrity</h2>
            <p>We hold active registrations with governmental agricultural and product regulatory chambers in India</p>
            <div className="cert-grid">
              <div className="cert-item">
                <img 
                  src="/assets/certifications/AGRICULTURAL-PROCESSED-FOOD-PRODUCTS-EXPORT-DEVELOPMENT-AUTHORITY-APEDA-1.jpg" 
                  alt="APEDA registration official certificate seal" 
                  loading="lazy"
                />
                <h4>APEDA Registered</h4>
                <p>Agricultural &amp; Processed Food Products Export Development Authority (Government of India)</p>
              </div>
              <div className="cert-item">
                <img 
                  src="/assets/certifications/FullColor_1280x1024_72dpi.jpg" 
                  alt="ISO Certification seal representing international trade standards" 
                  loading="lazy"
                />
                <h4>Quality Compliant</h4>
                <p>ISO standard compliance audits for phytosanitary checks and export-import operations</p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="our-values">
          <div className="container">
            <span className="section-badge">Core Pillars</span>
            <h2>Enterprise Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-item-header">
                  <FiShield className="value-item-icon" />
                  <h4>Absolute Quality Sourcing</h4>
                </div>
                <p>Every shipment undergoes multiple pre-shipment laboratory inspections, ensuring zero pesticide residue and strict conformance to food safety norms.</p>
              </div>
              <div className="value-item">
                <div className="value-item-header">
                  <FiGlobe className="value-item-icon" />
                  <h4>Global Transparency</h4>
                </div>
                <p>We follow ethical, honest trading structures. From direct price calculations to container shipping logs, our partners receive absolute trace-ability.</p>
              </div>
              <div className="value-item">
                <div className="value-item-header">
                  <FiCheckCircle className="value-item-icon" />
                  <h4>Ecological Sourcing</h4>
                </div>
                <p>We actively incentivize bio-organic farming models, clean water conservation practices, and biodegradable recycled shipping materials.</p>
              </div>
              <div className="value-item">
                <div className="value-item-header">
                  <FiClock className="value-item-icon" />
                  <h4>On-Schedule Transit</h4>
                </div>
                <p>We respect client market schedules. With locked ocean line bookings and automated custom documentation, we deliver cargo on time, every time.</p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <section className="cta-section">
        <div className="container">
          <h2>Establish A Trustworthy Supply Route</h2>
          <p>Request certification documents, lab reports, company profile sheets, or custom product samples from our desk.</p>
          <Link to="/enquiry" className="btn btn-gold">
            Submit Trade Enquiry <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
