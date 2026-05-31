import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiAward, FiTruck, FiUsers, FiArrowRight, FiChevronDown } from 'react-icons/fi';
import CategoryCard from '../components/CategoryCard';
import RevealOnScroll from '../components/RevealOnScroll';
import CountUp from '../components/CountUp';
import categories from '../data/categories';
import faqData from '../data/faq';

function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    document.title = 'BEES — Premium Indian Export Company | Spices, Ayurveda, Agricultural Products';
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="home">
      {/* Immersive Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tagline">APEDA Certified Indian Exporter</span>
          <h1 className="animated-fade">
            <span className="gradient-text">Premium Indian Products</span>
            <br />
            For Global Markets
          </h1>
          <p className="animated-slideup">
            Connecting international enterprises with India's finest Spices, Ayurveda, Tea, Cooking Oils, Handicrafts, and Textiles. Sourced with integrity, quality-inspected, and delivered seamlessly.
          </p>
          <div className="hero-buttons animated-slideup">
            <Link to="/products" className="btn btn-gold">
              Explore Products <FiArrowRight />
            </Link>
            <Link to="/enquiry" className="btn btn-outline-white">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-container">
            <div className="stats-grid">
              <div className="stat-item">
                <FiGlobe className="stat-icon" />
                <h3><CountUp end={50} suffix="+" /></h3>
                <p>Countries Served</p>
              </div>
              <div className="stat-item">
                <FiAward className="stat-icon" />
                <h3>APEDA</h3>
                <p>Registered Exporter</p>
              </div>
              <div className="stat-item">
                <FiTruck className="stat-icon" />
                <h3><CountUp end={1000} suffix="+" /></h3>
                <p>Shipments Delivered</p>
              </div>
              <div className="stat-item">
                <FiUsers className="stat-icon" />
                <h3><CountUp end={500} suffix="+" /></h3>
                <p>Global Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <RevealOnScroll>
        <section className="about-preview">
          <div className="container">
            <div className="about-preview-content">
              <div className="about-text">
                <span className="section-badge">Who We Are</span>
                <h2>Your Trusted Global Export Partner</h2>
                <p>
                  BEES is a premier Indian export-import firm specializing in sourcing, packaging, and shipping premium grade items. We bridge the gap between regional Indian farmers, manufacturers, and global buyers.
                </p>
                <p>
                  We maintain rigorous quality standards, ensuring all products comply with international phytosanitary regulations. From field inspections to custom border logistics, we represent excellence at every link of the supply chain.
                </p>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us <FiArrowRight />
                </Link>
              </div>
              <div className="about-image">
                <img 
                  src="/assets/banners/Agro-food-processing-industry.png" 
                  alt="Agro food processing machinery operating in Indian facility" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Sourcing & Export Lifecycle */}
      <RevealOnScroll>
        <section className="sourcing-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge section-badge-gold">Trade Flow</span>
              <h2 className="gradient-text">Our Sourcing &amp; Export Lifecycle</h2>
              <p className="section-header-light">A transparent look at how we secure and deliver top-grade products worldwide</p>
            </div>
            
            <div className="sourcing-grid">
              <RevealOnScroll delay={0}>
                <div className="sourcing-step">
                  <div className="sourcing-number">01</div>
                  <h4>Direct Sourcing</h4>
                  <p>We source directly from APEDA registered farms, certified tea estates, and authentic artisan collectives across India.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <div className="sourcing-step">
                  <div className="sourcing-number">02</div>
                  <h4>Rigorous Quality Testing</h4>
                  <p>Phytosanitary checks, laboratory testing, and moisture analysis are completed to meet country-specific entry codes.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <div className="sourcing-step">
                  <div className="sourcing-number">03</div>
                  <h4>Custom Packaging</h4>
                  <p>Custom labeling, barrier bags, and moisture-controlled packaging preserve product freshness throughout ocean freight transit.</p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <div className="sourcing-step">
                  <div className="sourcing-number">04</div>
                  <h4>End-to-End Shipping</h4>
                  <p>Custom clearance, bill of lading documentation, and multimodal logistics ensure safe CIF/FOB harbor delivery.</p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Product Categories Section */}
      <RevealOnScroll>
        <section className="categories-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Product Catalog</span>
              <h2>Our Primary Export Portfolios</h2>
              <p>Select a category to view individual products and specifications</p>
            </div>
            <div className="categories-grid">
              {categories.slice(0, 6).map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
            <div className="section-footer">
              <Link to="/products" className="btn btn-primary">
                View All {categories.length} Portfolios <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Why Choose Us Section */}
      <RevealOnScroll>
        <section className="why-us">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Enterprise Strengths</span>
              <h2>Why Partners Choose BEES</h2>
              <p>Establishing integrity, transparency, and timely delivery in international trade</p>
            </div>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏅</div>
                <h4>APEDA Certified</h4>
                <p>Government registered exporter with complete certifications for hassle-free custom clearances.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🛡️</div>
                <h4>Quality Guaranteed</h4>
                <p>Strict quality assurance protocols applied at every phase—from harvesting to ship-loading.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🌍</div>
                <h4>Global Logistics Network</h4>
                <p>Comprehensive ocean and air shipping reach across Europe, Americas, Middle East, and Asia.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">💎</div>
                <h4>Direct Pricing</h4>
                <p>Eliminating middlemen by purchasing raw ingredients directly from farmers, saving costs.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📦</div>
                <h4>Custom Labeling</h4>
                <p>White labeling and private brand solutions supported in multi-material packaging designs.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">💬</div>
                <h4>24/7 Account Support</h4>
                <p>Dedicated export specialists providing live order tracking and communication channels.</p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Testimonials / Trust Section */}
      <RevealOnScroll>
        <section className="testimonials-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Client Testimonials</span>
              <h2>Trusted by Global Partners</h2>
              <p>Hear from importers and distributors who rely on BEES for quality Indian exports</p>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"BEES has been our exclusive spice supplier for 3 years. Their quality control is exceptional — every shipment arrives with full COA documentation and zero discrepancies."</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">MH</div>
                  <div>
                    <h4>Marcus Hoffmann</h4>
                    <span>Procurement Director, EuroSpice GmbH — Germany</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"The private labeling service was seamless. From custom packaging design to container shipment, their team handled everything professionally. Highly recommend for bulk Ayurvedic imports."</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">SA</div>
                  <div>
                    <h4>Sarah Al-Rashid</h4>
                    <span>Managing Director, Gulf Wellness Trading — UAE</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"We switched to BEES for our tea procurement and the difference in quality and pricing is remarkable. Their direct sourcing from Assam and Darjeeling estates gives us a true competitive edge."</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">JT</div>
                  <div>
                    <h4>James Thornton</h4>
                    <span>Supply Chain Manager, Pacific Beverages — Australia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Interactive FAQs Accordion */}
      <RevealOnScroll>
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">F.A.Q.</span>
              <h2>Importing Guidelines &amp; Info</h2>
              <p>Quick answers to standard procedures in custom clearance and international trading</p>
            </div>
            
            <div className="faq-wrapper">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={activeFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <FiChevronDown className="faq-toggle" />
                  </button>
                  <div 
                    className="faq-answer" 
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-hidden={activeFaq !== index}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Expand Your Portfolio with Indian Quality</h2>
          <p>Get in touch with our export desks today to receive wholesale price sheets, samples, and shipping quotes.</p>
          <div className="cta-buttons">
            <Link to="/enquiry" className="btn btn-gold">
              Get A Quote <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline-white">
              Contact Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
