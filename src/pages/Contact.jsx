import React, { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import RevealOnScroll from '../components/RevealOnScroll';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us — BEES Export Company';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="contact-page">
      <PageBanner 
        title="Contact Us" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' }
        ]} 
      />

      <RevealOnScroll>
        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Get In Touch</h2>
                <p>Have questions about our sourcing standards, shipping capacities, or sample availability? Get in touch with our relations team.</p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FiMapPin />
                    </div>
                    <div>
                      <h4>Corporate Office</h4>
                      <p>New Delhi, India</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FiPhone />
                    </div>
                    <div>
                      <h4>Phone Communications</h4>
                      <p>+91 94727 92999</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FiMail />
                    </div>
                    <div>
                      <h4>General Inquiries</h4>
                      <p>info@bees.org.in</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FiClock />
                    </div>
                    <div>
                      <h4>Business Hours</h4>
                      <p>Monday - Saturday: 9:00 AM - 6:00 PM (IST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-wrapper">
                <h2>Send a Message</h2>
                {submitted ? (
                  <div className="form-success-alert animated-fade">
                    <FiCheckCircle className="form-success-icon" />
                    <div>
                      <h3 className="form-success-title">Message Transmitted Successfully</h3>
                      <p className="form-success-text">Thank you. Our relations desk has logged your request and will follow up within 12 business hours.</p>
                    </div>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-name">Full Name *</label>
                        <input type="text" id="contact-name" placeholder="John Doe" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-email">Work Email *</label>
                        <input type="email" id="contact-email" placeholder="john@company.com" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-phone">Phone / Mobile</label>
                        <input type="tel" id="contact-phone" placeholder="+1 234 567 890" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-country">Country *</label>
                        <input type="text" id="contact-country" placeholder="United States" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-subject">Subject</label>
                      <input type="text" id="contact-subject" placeholder="Bulk Spices Import Sourcing" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message">Message *</label>
                      <textarea id="contact-message" rows="5" placeholder="Please outline your specifications, target delivery ports, and packaging preferences..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><span className="btn-spinner"></span> Transmitting...</>
                      ) : (
                        <><FiSend /> Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Google Map Embed */}
      <RevealOnScroll>
        <section className="map-section">
          <iframe
            title="BEES Export Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004425885!2d77.06889754725788!3d28.52725803554919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </RevealOnScroll>
    </div>
  );
}

export default Contact;
