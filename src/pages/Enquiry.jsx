import React from 'react';
import categories from '../data/categories';

function Enquiry() {
  return (
    <div className="enquiry-page">
      <section className="page-banner">
        <h1>Request a Quote</h1>
        <p>Home / Enquiry</p>
      </section>

      <section className="enquiry-content">
        <div className="container">
          <div className="enquiry-intro">
            <h2>Tell Us Your Requirements</h2>
            <p>Fill out the form below and our export team will get back to you within 24 hours with pricing, availability, and shipping details.</p>
          </div>

          <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-section">
              <h3>Your Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input type="text" id="company" placeholder="Your Company" required />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Contact Person *</label>
                  <input type="text" id="name" placeholder="Full Name" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" placeholder="+1 234 567 890" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <input type="text" id="country" placeholder="Your Country" required />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" placeholder="Your City" />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Product Requirements</h3>
              <div className="form-group">
                <label htmlFor="category">Product Category *</label>
                <select id="category" required>
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quantity">Quantity Required</label>
                  <input type="text" id="quantity" placeholder="e.g., 500 kg, 1000 units" />
                </div>
                <div className="form-group">
                  <label htmlFor="frequency">Order Frequency</label>
                  <select id="frequency">
                    <option value="">Select frequency</option>
                    <option value="one-time">One-time Order</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly Contract</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="details">Product Details & Specifications</label>
                <textarea id="details" rows="4" placeholder="Describe the specific products you need, quality requirements, packaging preferences, etc."></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="delivery">Preferred Delivery Terms</label>
                <select id="delivery">
                  <option value="">Select delivery terms</option>
                  <option value="fob">FOB (Free on Board)</option>
                  <option value="cif">CIF (Cost, Insurance & Freight)</option>
                  <option value="exw">EXW (Ex Works)</option>
                  <option value="ddp">DDP (Delivered Duty Paid)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="additional">Additional Notes</label>
                <textarea id="additional" rows="3" placeholder="Any other requirements or questions..."></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-full">Submit Enquiry</button>
            <p className="form-note">* We typically respond within 24 business hours. For urgent inquiries, please call us directly.</p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Enquiry;
