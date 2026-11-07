import React, { useState } from 'react';
import { 
  FaShoppingBag, 
  FaSearch, 
  FaPrint, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaClock, 
  FaEnvelope, 
  FaStar, 
  FaChevronRight, 
  FaUndo, 
  FaExclamationTriangle, 
  FaCheckCircle 
} from 'react-icons/fa';

const Refund = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount] = useState(0);

  const sections = [
    {
      id: 1,
      title: "1. Order Cancellations",
      content: `If you need to cancel an order, contact us as soon as possible through our official contact channels.
We will consider the order's current status when reviewing your request:

• Before preparation begins: We will make reasonable efforts to cancel the order where possible.
• During preparation: Cancellation may no longer be possible because ingredients and resources may already have been committed to the order.
• After dispatch: Cancellation may not be possible once the order is with the delivery team.

These conditions do not remove any cancellation or refund rights you may have under applicable law.`
    },
    {
      id: 2,
      title: "2. Incorrect or Incomplete Orders",
      content: `If you receive a meal that differs from your confirmed order or discover that an item is missing, please contact us promptly.

Provide your order reference, describe the issue, and include photographs where helpful.

After reviewing the details, we may offer an appropriate solution, such as delivering a missing item, replacing an incorrect meal, or issuing a refund where warranted.`
    },
    {
      id: 3,
      title: "3. Damaged or Unsatisfactory Deliveries",
      content: `If your order arrives damaged, appears to have been mishandled, or raises a legitimate food-quality concern, notify us as soon as possible.

Please explain the problem and provide supporting information where available. We will assess the circumstances and determine an appropriate resolution.

For food-safety concerns, please avoid consuming food that appears unsafe.`
    },
    {
      id: 4,
      title: "4. Refund Eligibility",
      content: `Refund requests are assessed individually. Depending on the circumstances, a refund may be appropriate when:

• An order has been cancelled and qualifies for a refund.
• A payment was received but the order was not fulfilled.
• An incorrect or missing order item cannot reasonably be replaced.
• A delivery or food-quality issue warrants a refund.
• A duplicate payment or other verified payment error has occurred.
• A refund is required by applicable law.

A refund will not be denied where applicable law requires it, even if a general policy condition would otherwise suggest a restriction.`
    },
    {
      id: 5,
      title: "5. How to Request a Refund",
      content: `To help us process your request, please provide:
1. Your name and contact information.
2. Your order reference, if available.
3. The date and approximate time of the order.
4. A clear explanation of the issue.
5. Supporting photographs or payment references, where relevant.

Submit your request through our Contact Us page or the official support channel provided by WonderLand Cuisine.

Please do not send your payment PIN, account password, or other confidential banking credentials.`
    },
    {
      id: 6,
      title: "6. Refund Processing",
      content: `Once a refund has been approved, the time required for the funds to reach you may depend on the original payment method and the payment provider's processing procedures.

We will communicate any relevant next steps where possible.`
    },
    {
      id: 7,
      title: "7. Delivery Charges",
      content: `Whether delivery charges are refundable depends on the circumstances, the service provided, and applicable law.

Where a delivery fee is charged for a service that was not provided, the refund request will be assessed accordingly.`
    },
    {
      id: 8,
      title: "8. Duplicate or Failed Payments",
      content: `If you believe you have been charged more than once, or payment was deducted without an order confirmation, contact us with the relevant transaction references.

We will investigate the payment status before determining whether a refund or another resolution is necessary.`
    },
    {
      id: 9,
      title: "9. Contact and Resolution",
      content: `We aim to review complaints fairly and communicate clearly with customers.

If you are dissatisfied with the outcome of a request, please contact us again with your order reference and any additional information that may help us reconsider the matter.

Nothing in this policy limits your rights under applicable consumer protection law.`
    },
    {
      id: 10,
      title: "10. Policy Updates",
      content: `We may update this policy to reflect changes in our ordering process, payment arrangements, or legal obligations. The latest version will be published on this page.

Thank you for giving WonderLand Cuisine the opportunity to resolve any concerns and serve you better.`
    }
  ];

  const filteredSections = sections.filter(sec => 
    sec.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    sec.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const leftColSections = filteredSections.filter(sec => sec.id <= 5);
  const rightColSections = filteredSections.filter(sec => sec.id > 5);

  return (
    <div style={{ backgroundColor: '#FAF8F5', color: '#2B2B2B', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
  
      {/* --- HERO BANNER --- */}
      <div className="position-relative text-white py-5" style={{ 
        backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.88), rgba(17, 24, 39, 0.95)), url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container py-4">
          <div className="small text-uppercase mb-2" style={{ color: '#F59E0B', letterSpacing: '1px' }}>
            Home / Cancellation & Refund Policy
          </div>
          <h1 className="display-4 fw-bold mb-2">Cancellation & Refund Policy</h1>
          <p className="lead mb-0" style={{ color: '#D1D5DB' }}>Last Updated: October 2026</p>
        </div>
      </div>

      {/* --- SUB-BANNER NOTE --- */}
      <div className="py-3 text-white" style={{ backgroundColor: '#B8860B' }}>
        <div className="container d-flex align-items-center gap-3">
          <FaUndo className="fs-3 flex-shrink-0" />
          <div>
            <p className="mb-0 fw-medium">
              At WonderLand Cuisine, we want every customer to have a positive ordering experience. This policy explains how to request an order cancellation, report a problem, and seek a refund where appropriate.
            </p>
          </div>
        </div>
      </div>

      {/* --- SEARCH & PRINT TOOLBAR --- */}
      <div className="bg-white border-bottom py-3 shadow-sm">
        <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
          <div className="input-group" style={{ maxWidth: '400px' }}>
            <span className="input-group-text bg-light"><FaSearch className="text-muted" /></span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search policy sections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2" onClick={() => window.print()}>
            <FaPrint /> Print Policy Document
          </button>
        </div>
      </div>

      {/* --- TWO COLUMN POLICY CONTENT --- */}
      <div className="container py-5">
        <div className="row g-4">
          
          {/* Left Column (Sections 1 to 5) */}
          <div className="col-lg-6">
            {leftColSections.map((sec) => (
              <div key={sec.id} className="bg-white p-4 rounded-3 shadow-sm mb-4 border-start border-4" style={{ borderColor: '#B8860B' }}>
                <h3 className="h5 fw-bold mb-3" style={{ color: '#9A6E1D' }}>{sec.title}</h3>
                <div className="text-secondary" style={{ whiteSpace: 'pre-line', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {sec.content}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Sections 6 to 10) */}
          <div className="col-lg-6">
            {rightColSections.map((sec) => (
              <div key={sec.id} className="bg-white p-4 rounded-3 shadow-sm mb-4 border-start border-4" style={{ borderColor: '#B8860B' }}>
                <h3 className="h5 fw-bold mb-3" style={{ color: '#9A6E1D' }}>{sec.title}</h3>
                <div className="text-secondary" style={{ whiteSpace: 'pre-line', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {sec.content}
                </div>
              </div>
            ))}

            {/* NEED SUPPORT CALLOUT */}
            <div className="p-4 rounded-3 text-white shadow-sm mt-4" style={{ backgroundColor: '#B8860B' }}>
              <h4 className="fw-bold mb-2 d-flex align-items-center gap-2">
                <FaExclamationTriangle /> Have an Issue With an Order?
              </h4>
              <p className="mb-3 opacity-90" style={{ fontSize: '0.95rem' }}>
                Submit your refund or cancellation request promptly through our official support channel with your order reference.
              </p>
              <a href="#contact" className="btn btn-dark fw-semibold px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2">
                Submit Support Request <FaChevronRight size={12} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* --- PRE-FOOTER BANNER --- */}
      <div className="py-4 text-white" style={{ backgroundColor: '#0B0F17', borderBottom: '1px solid #1F2937' }}>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">
          <div>
            <blockquote className="fst-italic mb-1" style={{ fontSize: '0.9rem', color: '#D1D5DB' }}>
              "The food is always fresh, tasty and arrives on time, I love WonderLand Cuisine"
            </blockquote>
            <div className="text-warning small">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span className="text-white-50 ms-2">- A Happy Customer</span>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="font-monospace fs-5 text-warning fw-bold">Good Food Brings People Together ♡</span>
            <a href="#order" className="btn btn-warning font-monospace fw-bold px-4 rounded-pill d-flex align-items-center gap-2">
              Order Now <FaChevronRight size={12} />
            </a>
          </div>
        </div>
      </div>

  

    </div>
  );
};

export default Refund;