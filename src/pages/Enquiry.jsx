import React, { useState, useEffect } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import RevealOnScroll from '../components/RevealOnScroll';
import categories from '../data/categories';

function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Request a Quote — BEES Export Company';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="enquiry-page">
      <PageBanner 
        title="Request a Quote" 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Enquiry' }
        ]} 
      />

      <RevealOnScroll>
        <section className="enquiry-content">
          <div className="container">
            <div className="enquiry-intro">
              <h2>Specify Your Cargo Details</h2>
              <p>Complete the procurement checklist below. Our commodity traders and logistics officers will draft an official quote (FOB/CIF) within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="form-success-alert animated-fade form-success-centered">
                <FiCheckCircle className="form-success-icon" />
                <div>
                  <h3 className="form-success-title">R.F.Q. Checklist Received</h3>
                  <p className="form-success-text">
                    Thank you. We have logged your Request for Quote (RFQ). A sales agent and an export customs officer have been assigned to verify sourcing routes and freight rates. A quote sheet will be delivered to your registered email shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form className="enquiry-form" onSubmit={handleSubmit}>
                <div className="form-section">
                  <h3>Your Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="enquiry-company">Company Name *</label>
                      <input type="text" id="enquiry-company" placeholder="e.g. Global Foods Trading Corp" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="enquiry-name">Contact Person *</label>
                      <input type="text" id="enquiry-name" placeholder="e.g. Jane Smith" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="enquiry-email">Work Email *</label>
                      <input type="email" id="enquiry-email" placeholder="trade@company.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="enquiry-phone">Phone / WhatsApp *</label>
                      <input type="tel" id="enquiry-phone" placeholder="+1 555-0199" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="enquiry-country">Target Country *</label>
                      <input type="text" id="enquiry-country" placeholder="e.g. Germany" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="enquiry-city">Target Discharge City</label>
                      <input type="text" id="enquiry-city" placeholder="e.g. Hamburg" />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Commodity Specifications</h3>
                  <div className="form-group">
                    <label htmlFor="enquiry-category">Export Portfolio *</label>
                    <select id="enquiry-category" required>
                      <option value="">Select a trade portfolio</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="enquiry-quantity">Required Metric Volume</label>
                      <input type="text" id="enquiry-quantity" placeholder="e.g. 10 Metric Tons (MT)" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="enquiry-frequency">Order Frequency</label>
                      <select id="enquiry-frequency">
                        <option value="">Select supply schedule</option>
                        <option value="one-time">One-time shipment</option>
                        <option value="monthly">Monthly contract</option>
                        <option value="quarterly">Quarterly contract</option>
                        <option value="yearly">Yearly contract</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="enquiry-details">Product Specifications &amp; Grades</label>
                    <textarea id="enquiry-details" rows="4" placeholder="Detail moisture percentages, packaging preferences (e.g. 25kg PP bags, custom retail cartons), organic certificates needed..."></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="enquiry-delivery">Preferred Delivery Terms (Incoterms)</label>
                    <select id="enquiry-delivery">
                      <option value="">Select Incoterm</option>
                      <option value="fob">FOB (Free on Board - Departure Port)</option>
                      <option value="cif">CIF (Cost, Insurance &amp; Freight - Destination Port)</option>
                      <option value="exw">EXW (Ex Works - Sourcing Facility)</option>
                      <option value="ddp">DDP (Delivered Duty Paid - Your Warehouse)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="enquiry-additional">Additional Trade Notes</label>
                    <textarea id="enquiry-additional" rows="3" placeholder="Target price, inspection agency requirements (SGS, etc.), payment terms (LC, TT)..."></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><span className="btn-spinner"></span> Processing R.F.Q...</>
                  ) : (
                    <><FiSend /> Submit Procurement Enquiry</>
                  )}
                </button>
                <p className="form-note">* Quote sheets include estimated ocean freight timelines. For instant pricing updates, please dial our trade desk directly.</p>
              </form>
            )}
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}

export default Enquiry;
