import React, { useState } from 'react';
import { 
  FaShoppingBag, 
  FaSearch, 
  FaPrint, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaClock, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaStar, 
  FaChevronRight 
} from 'react-icons/fa';

const TermsAndConditions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount] = useState(0);

  const sections = [
    {
      id: 1,
      title: "1. Introduction",
      content: `Welcome to WonderLand Cuisine. These Terms & Conditions govern your use of our website and the services we provide, including browsing our menu, placing food orders, and arranging deliveries.

By accessing our website or placing an order, you agree to these terms. If you do not agree with any part of these terms, please discontinue using our ordering services.`
    },
    {
      id: 2,
      title: "2. About Our Services",
      content: `WonderLand Cuisine provides food ordering and delivery services, offering a selection of freshly prepared meals, beverages, and other menu items.

We aim to provide quality meals and reliable service. However, menu availability, preparation times, and delivery times may vary depending on demand, location, and operational conditions.`
    },
    {
      id: 3,
      title: "3. Placing an Order",
      content: `Customers are responsible for providing accurate information when placing an order, including their name, telephone number, delivery address, and any relevant delivery instructions.

Please review your order carefully before submitting it. Once an order has been confirmed and preparation has started, changes or cancellations may not be possible.

WonderLand Cuisine reserves the right to decline or cancel an order where necessary, including situations involving unavailable items, incorrect pricing, suspected fraudulent activity, or operational difficulties.`
    },
    {
      id: 4,
      title: "4. Menu, Prices, and Availability",
      content: `All meals and prices displayed on our website are subject to change without prior notice.

Although we make reasonable efforts to ensure that menu descriptions and photographs are accurate, the appearance of a meal may vary slightly depending on preparation and presentation.

If an item becomes unavailable after an order has been placed, we will make reasonable efforts to inform the customer and discuss an appropriate alternative or refund where applicable.`
    },
    {
      id: 5,
      title: "5. Payments",
      content: `Customers must pay the applicable order total using the payment methods made available by WonderLand Cuisine.

Where payment is required before preparation or delivery, the order may not be processed until payment has been confirmed.

Customers should not share their payment PINs, passwords, or other confidential banking credentials with anyone claiming to represent WonderLand Cuisine.`
    },
    {
      id: 6,
      title: "6. Delivery",
      content: `Delivery availability depends on the customer's location and our delivery coverage.

Estimated delivery times are provided as a guide and may be affected by traffic, weather, high order volumes, or other circumstances beyond our reasonable control.

Customers should provide a valid delivery address and remain reachable by telephone where necessary. Additional arrangements or charges may apply if delivery cannot be completed because the information provided is incorrect or the recipient is unavailable.`
    },
    {
      id: 7,
      title: "7. Cancellations and Refunds",
      content: `Cancellation requests should be submitted as soon as possible through our official contact channels.

Orders that have already been prepared or dispatched may not be eligible for cancellation, except where required by applicable law or our stated policies.

If an order is incorrect, incomplete, or arrives in an unacceptable condition, please contact us promptly with your order details. Eligible cases will be reviewed and may qualify for a replacement, refund, or another appropriate resolution.

Please refer to our Cancellation & Refund Policy for further details.`
    },
    {
      id: 8,
      title: "8. Customer Conduct",
      content: `Customers are expected to provide truthful information and communicate respectfully with our staff and delivery personnel.

Misuse of our website, fraudulent orders, abusive conduct, or attempts to interfere with our services may result in restrictions on access to our ordering services, subject to applicable law.`
    },
    {
      id: 9,
      title: "9. Website Content and Intellectual Property",
      content: `Unless otherwise stated, the text, branding, photographs, graphics, and other materials displayed on the WonderLand Cuisine website are owned by or used with permission by the business.

You may not reproduce, distribute, modify, or commercially exploit protected website content without the necessary authorization.`
    },
    {
      id: 10,
      title: "10. Privacy",
      content: `We may collect information needed to process orders, arrange deliveries, respond to enquiries, and improve our services.

Our handling of personal information is explained in our Privacy Policy.`
    },
    {
      id: 11,
      title: "11. Service Limitations",
      content: `We make reasonable efforts to keep our website available and accurate. However, temporary interruptions, technical issues, or errors may occur.

To the extent permitted by applicable law, WonderLand Cuisine will not be responsible for losses arising from circumstances beyond its reasonable control. Nothing in these terms excludes liability that cannot lawfully be excluded.`
    },
    {
      id: 12,
      title: "12. Changes to These Terms",
      content: `We may update these Terms & Conditions when our services, business practices, or legal requirements change.

Updated terms will be published on this page, together with a revised update date where appropriate.`
    },
    {
      id: 13,
      title: "13. Contact Us",
      content: `If you have questions about these Terms & Conditions, please contact WonderLand Cuisine through the details provided on our Contact Us page.

Thank you for choosing WonderLand Cuisine. We appreciate your trust and look forward to serving you.`
    }
  ];

  const filteredSections = sections.filter(sec => 
    sec.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    sec.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const leftColSections = filteredSections.filter(sec => sec.id <= 7);
  const rightColSections = filteredSections.filter(sec => sec.id > 7);

  return (
    <div style={{ backgroundColor: '#FAF8F5', color: '#2B2B2B', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
   
      {/* HERO BANNER */}
      <div className="position-relative text-white py-5" style={{ 
        backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.95)), url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container py-4">
          <div className="small text-uppercase mb-2" style={{ color: '#F59E0B', letterSpacing: '1px' }}>
            Home / Terms & Conditions
          </div>
          <h1 className="display-4 fw-bold mb-2">Terms & Conditions</h1>
          <p className="lead" style={{ color: '#D1D5DB' }}>Last Updated: October 2026</p>
        </div>
      </div>

      {/* SEARCH AND PRINT BAR */}
      <div className="bg-white border-bottom py-3 shadow-sm">
        <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
          <div className="input-group" style={{ maxWidth: '400px' }}>
            <span className="input-group-text bg-light"><FaSearch className="text-muted" /></span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search terms or section..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2" onClick={() => window.print()}>
            <FaPrint /> Print Document
          </button>
        </div>
      </div>

      {/* TWO COLUMN TERMS CONTENT */}
      <div className="container py-5">
        <div className="row g-4">
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

          <div className="col-lg-6">
            {rightColSections.map((sec) => (
              <div key={sec.id} className="bg-white p-4 rounded-3 shadow-sm mb-4 border-start border-4" style={{ borderColor: '#B8860B' }}>
                <h3 className="h5 fw-bold mb-3" style={{ color: '#9A6E1D' }}>{sec.title}</h3>
                <div className="text-secondary" style={{ whiteSpace: 'pre-line', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {sec.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DISPUTE & ASSISTANCE BANNER */}
      <div className="py-5 text-white" style={{ backgroundColor: '#B8860B' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-1">Need Assistance or Have a Dispute?</h2>
          <p className="opacity-75 mb-4">Find Us & Connect</p>

          <div className="row g-4 justify-content-center text-start">
            <div className="col-md-4">
              <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}>
                <div className="d-flex align-items-center mb-3">
                  <FaMapMarkerAlt className="fs-4 me-3 text-warning" />
                  <h5 className="mb-0 fw-bold">Kitchen & Dispatch Hub</h5>
                </div>
                <p className="small mb-1 opacity-90">Kitchen & Dispatch Central</p>
                <p className="small mb-1 opacity-90">Lagos, Rd. WonderLand Road, Lagos, Nigeria</p>
                <hr className="my-2 opacity-25" />
                <p className="small mb-0">Dispatch Hotline: +234 800 000 0000</p>
                <p className="small mb-0">Support: +234 801 111 1111</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}>
                <div className="d-flex align-items-center mb-3">
                  <FaClock className="fs-4 me-3 text-warning" />
                  <h5 className="mb-0 fw-bold">Opening Hours</h5>
                </div>
                <div className="d-flex justify-content-between small mb-2">
                  <span>Mon - Sat</span>
                  <span className="fw-bold">9 AM - 10 PM</span>
                </div>
                <div className="d-flex justify-content-between small">
                  <span>Sun</span>
                  <span className="fw-bold">11 AM - 8 PM</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}>
                <div className="d-flex align-items-center mb-3">
                  <FaPhoneAlt className="fs-4 me-3 text-warning" />
                  <h5 className="mb-0 fw-bold">Connect With Us</h5>
                </div>
                <div className="d-flex flex-column gap-2 small">
                  <a href="#facebook" className="text-white text-decoration-none d-flex align-items-center gap-2">
                    <FaFacebookF /> @wonderlandcuisine
                  </a>
                  <a href="#instagram" className="text-white text-decoration-none d-flex align-items-center gap-2">
                    <FaInstagram /> @wonderlandcuisine
                  </a>
                  <a href="#twitter" className="text-white text-decoration-none d-flex align-items-center gap-2">
                    <FaTwitter /> @wonderlandcuisine
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BANNER */}
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

export default TermsAndConditions;