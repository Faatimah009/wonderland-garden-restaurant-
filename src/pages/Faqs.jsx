import React, { useState } from 'react';
import { 
  FaShoppingBag, 
  FaSearch, 
  FaChevronDown, 
  FaChevronUp, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaClock, 
  FaEnvelope, 
  FaStar, 
  FaChevronRight, 
  FaQuestionCircle 
} from 'react-icons/fa';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState(1); // Default open first FAQ
  const [cartCount] = useState(0);

  const categories = ["All", "Ordering Food", "Payments", "Delivery", "Cancellations and Refunds", "Account and Support"];

  const faqs = [
    // Ordering Food
    { id: 1, category: "Ordering Food", question: "1. How do I place an order?", answer: "Browse our menu, select your preferred meals, add them to your cart, review your order, and proceed to checkout. Provide your contact and delivery details and follow the available payment instructions." },
    { id: 2, category: "Ordering Food", question: "2. Can I order more than one meal?", answer: "Yes. You can add multiple meals to your cart and adjust the quantity of each item before completing your order." },
    { id: 3, category: "Ordering Food", question: "3. Can I change my order after placing it?", answer: "Please contact us as soon as possible if you need to change an order. Changes depend on whether preparation or dispatch has already started." },
    { id: 4, category: "Ordering Food", question: "4. Can I request special meal instructions?", answer: "You may include special instructions where the ordering page provides that option. We will make reasonable efforts to accommodate requests, but not every request can be guaranteed." },
    { id: 5, category: "Ordering Food", question: "5. What if a meal is unavailable?", answer: "If a selected meal becomes unavailable, we will try to contact you to discuss an alternative or an appropriate refund." },

    // Payments
    { id: 6, category: "Payments", question: "6. What payment methods do you accept?", answer: "The available payment methods will be displayed during checkout. Please follow the instructions provided when completing your order." },
    { id: 7, category: "Payments", question: "7. When is my payment confirmed?", answer: "Your payment is confirmed when the relevant payment provider or our authorized team verifies the transaction." },
    { id: 8, category: "Payments", question: "8. What should I do if I am charged but my order is not confirmed?", answer: "Keep your transaction reference and contact us with the payment details and approximate transaction time. Please avoid making another payment until the situation has been checked." },

    // Delivery
    { id: 9, category: "Delivery", question: "9. Do you deliver to my location?", answer: "Delivery depends on our service coverage. Enter your address during checkout or contact us to confirm whether delivery is available in your area." },
    { id: 10, category: "Delivery", question: "10. How long does delivery take?", answer: "Delivery times depend on your location, traffic, preparation time, and current order volume. Any estimated time provided should be treated as a guide rather than a guarantee." },
    { id: 11, category: "Delivery", question: "11. How much does delivery cost?", answer: "Delivery fees may depend on your location and order details. Any applicable fee should be shown before you confirm your order." },
    { id: 12, category: "Delivery", question: "12. What happens if I am unavailable when my order arrives?", answer: "Our delivery personnel may attempt to contact you using the details provided. If delivery cannot be completed, we will discuss the available options in line with our delivery policy." },

    // Cancellations and Refunds
    { id: 13, category: "Cancellations and Refunds", question: "13. Can I cancel an order?", answer: "Contact us as quickly as possible. Cancellation may be possible before preparation begins, but it may not be available once the order has been prepared or dispatched." },
    { id: 14, category: "Cancellations and Refunds", question: "14. What if I receive the wrong meal?", answer: "Contact us promptly with your order reference and a description of the problem. Photographs may help us review the issue." },
    { id: 15, category: "Cancellations and Refunds", question: "15. How do I request a refund?", answer: "Contact our support team with your order details and the reason for the request. We will review the circumstances and explain the available resolution." },

    // Account and Support
    { id: 16, category: "Account and Support", question: "16. Do I need an account to order?", answer: "This depends on the ordering options available on our website. If guest checkout is enabled, you may be able to order without registering an account." },
    { id: 17, category: "Account and Support", question: "17. How can I contact WonderLand Cuisine?", answer: "Visit our Contact Us page to find our available contact details and send us an enquiry." },
    { id: 18, category: "Account and Support", question: "18. How can I provide feedback?", answer: "We welcome feedback about our meals, delivery service, and overall customer experience. Please send your comments through our Contact Us page." }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getFaqsByCategory = (catName) => filteredFaqs.filter(faq => faq.category === catName);

  return (
    <div style={{ backgroundColor: '#FAF8F5', color: '#2B2B2B', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
   
      {/* --- HERO SECTION --- */}
      <div className="position-relative text-white py-5" style={{ 
        backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.88), rgba(17, 24, 39, 0.95)), url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container py-4">
          <div className="small text-uppercase mb-2" style={{ color: '#F59E0B', letterSpacing: '1px' }}>
            Home / Frequently Asked Questions
          </div>
          <h1 className="display-4 fw-bold mb-0">Frequently Asked Questions</h1>
        </div>
      </div>

      {/* --- GOLD SUB-BANNER WITH SEARCH AND CATEGORIES --- */}
      <div className="py-4 text-white shadow-sm" style={{ backgroundColor: '#B8860B' }}>
        <div className="container">
          <h2 className="fw-bold mb-1">Frequently Asked Questions</h2>
          <p className="fs-5 mb-3 opacity-90">Everything you need to know about ordering from WonderLand Cuisine</p>

          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white border-0"><FaSearch className="text-secondary" /></span>
                <input 
                  type="text" 
                  className="form-control border-0 shadow-none py-2" 
                  placeholder="Search questions (e.g., delivery, refund, payment)..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`btn btn-sm ${activeCategory === cat ? 'btn-dark' : 'btn-outline-light'}`}
                    style={{ borderRadius: '20px' }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN FAQ CONTENT (2 COLUMNS LAYOUT) --- */}
      <div className="container py-5">
        <div className="row g-4">
          
          {/* LEFT COLUMN */}
          <div className="col-lg-6">
            
            {/* Category: Ordering Food */}
            {(activeCategory === 'All' || activeCategory === 'Ordering Food') && getFaqsByCategory('Ordering Food').length > 0 && (
              <div className="mb-5">
                <h3 className="h4 fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#111827' }}>
                  <FaQuestionCircle style={{ color: '#B8860B' }} /> Ordering Food
                </h3>
                {getFaqsByCategory('Ordering Food').map((faq) => (
                  <div key={faq.id} className="card border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                    <div 
                      className="card-header bg-white py-3 px-4 d-flex align-items-center justify-content-between cursor-pointer"
                      style={{ cursor: 'pointer', borderLeft: openFaq === faq.id ? '4px solid #B8860B' : '4px solid transparent' }}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <h5 className="mb-0 fs-6 fw-bold text-dark">{faq.question}</h5>
                      {openFaq === faq.id ? <FaChevronUp className="text-warning" /> : <FaChevronDown className="text-muted" />}
                    </div>
                    {openFaq === faq.id && (
                      <div className="card-body px-4 py-3 bg-light text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Category: Cancellations and Refunds */}
            {(activeCategory === 'All' || activeCategory === 'Cancellations and Refunds') && getFaqsByCategory('Cancellations and Refunds').length > 0 && (
              <div className="mb-5">
                <h3 className="h4 fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#111827' }}>
                  <FaQuestionCircle style={{ color: '#B8860B' }} /> Cancellations and Refunds
                </h3>
                {getFaqsByCategory('Cancellations and Refunds').map((faq) => (
                  <div key={faq.id} className="card border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                    <div 
                      className="card-header bg-white py-3 px-4 d-flex align-items-center justify-content-between"
                      style={{ cursor: 'pointer', borderLeft: openFaq === faq.id ? '4px solid #B8860B' : '4px solid transparent' }}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <h5 className="mb-0 fs-6 fw-bold text-dark">{faq.question}</h5>
                      {openFaq === faq.id ? <FaChevronUp className="text-warning" /> : <FaChevronDown className="text-muted" />}
                    </div>
                    {openFaq === faq.id && (
                      <div className="card-body px-4 py-3 bg-light text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6">
            
            {/* Category: Payments */}
            {(activeCategory === 'All' || activeCategory === 'Payments') && getFaqsByCategory('Payments').length > 0 && (
              <div className="mb-5">
                <h3 className="h4 fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#111827' }}>
                  <FaQuestionCircle style={{ color: '#B8860B' }} /> Payments
                </h3>
                {getFaqsByCategory('Payments').map((faq) => (
                  <div key={faq.id} className="card border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                    <div 
                      className="card-header bg-white py-3 px-4 d-flex align-items-center justify-content-between"
                      style={{ cursor: 'pointer', borderLeft: openFaq === faq.id ? '4px solid #B8860B' : '4px solid transparent' }}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <h5 className="mb-0 fs-6 fw-bold text-dark">{faq.question}</h5>
                      {openFaq === faq.id ? <FaChevronUp className="text-warning" /> : <FaChevronDown className="text-muted" />}
                    </div>
                    {openFaq === faq.id && (
                      <div className="card-body px-4 py-3 bg-light text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Category: Delivery */}
            {(activeCategory === 'All' || activeCategory === 'Delivery') && getFaqsByCategory('Delivery').length > 0 && (
              <div className="mb-5">
                <h3 className="h4 fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#111827' }}>
                  <FaQuestionCircle style={{ color: '#B8860B' }} /> Delivery
                </h3>
                {getFaqsByCategory('Delivery').map((faq) => (
                  <div key={faq.id} className="card border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                    <div 
                      className="card-header bg-white py-3 px-4 d-flex align-items-center justify-content-between"
                      style={{ cursor: 'pointer', borderLeft: openFaq === faq.id ? '4px solid #B8860B' : '4px solid transparent' }}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <h5 className="mb-0 fs-6 fw-bold text-dark">{faq.question}</h5>
                      {openFaq === faq.id ? <FaChevronUp className="text-warning" /> : <FaChevronDown className="text-muted" />}
                    </div>
                    {openFaq === faq.id && (
                      <div className="card-body px-4 py-3 bg-light text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Category: Account and Support */}
            {(activeCategory === 'All' || activeCategory === 'Account and Support') && getFaqsByCategory('Account and Support').length > 0 && (
              <div className="mb-4">
                <h3 className="h4 fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#111827' }}>
                  <FaQuestionCircle style={{ color: '#B8860B' }} /> Account and Support
                </h3>
                {getFaqsByCategory('Account and Support').map((faq) => (
                  <div key={faq.id} className="card border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                    <div 
                      className="card-header bg-white py-3 px-4 d-flex align-items-center justify-content-between"
                      style={{ cursor: 'pointer', borderLeft: openFaq === faq.id ? '4px solid #B8860B' : '4px solid transparent' }}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <h5 className="mb-0 fs-6 fw-bold text-dark">{faq.question}</h5>
                      {openFaq === faq.id ? <FaChevronUp className="text-warning" /> : <FaChevronDown className="text-muted" />}
                    </div>
                    {openFaq === faq.id && (
                      <div className="card-body px-4 py-3 bg-light text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* --- "STILL HAVE QUESTIONS?" CARD --- */}
            <div className="p-4 rounded-3 text-white shadow-sm mt-4" style={{ backgroundColor: '#B8860B' }}>
              <h4 className="fw-bold mb-2">Still have questions?</h4>
              <p className="mb-3 opacity-90" style={{ fontSize: '0.95rem' }}>
                Our team will be happy to help. Visit our Contact Us page for assistance with your order or any other enquiry.
              </p>
              <a href="#contact" className="btn btn-dark fw-semibold px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2">
                Contact Us <FaChevronRight size={12} />
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

export default FAQPage;