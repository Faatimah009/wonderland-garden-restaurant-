import React, { useState } from 'react';
import { 
  FaShoppingBag, 
  FaSearch, 
  FaTruck, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaClock, 
  FaEnvelope, 
  FaStar, 
  FaChevronRight, 
  FaUtensils, 
  FaClipboardList, 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaUsers 
} from 'react-icons/fa';

const Delivery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount] = useState(0);

  const steps = [
    {
      num: "Step 1",
      title: "Choose Your Meals",
      desc: "Browse our menu and add your preferred dishes to your cart.",
      icon: <FaUtensils />
    },
    {
      num: "Step 2",
      title: "Provide Your Details",
      desc: "Enter your name, telephone number, delivery address, and any helpful directions needed to locate you.",
      icon: <FaMapMarkerAlt />
    },
    {
      num: "Step 3",
      title: "Review Your Order",
      desc: "Check your selected meals, quantities, prices, and delivery fee before confirming your order.",
      icon: <FaClipboardList />
    },
    {
      num: "Step 4",
      title: "Prepare and Deliver",
      desc: "Once your order has been accepted, we will arrange preparation and delivery. Where order updates are available, we will communicate relevant information to you.",
      icon: <FaTruck />
    }
  ];

  const sections = [
    {
      id: 1,
      title: "Delivery Areas",
      content: `Delivery availability depends on our current service locations and operational capacity.

Please provide your full address during checkout or contact us before ordering if you are unsure whether we deliver to your area.`
    },
    {
      id: 2,
      title: "Delivery Times",
      content: `Delivery times vary depending on the distance to your location, meal preparation requirements, traffic conditions, weather, and the number of orders being processed.

Any estimated delivery time displayed during ordering is a guide and may change due to unforeseen circumstances.`
    },
    {
      id: 3,
      title: "Delivery Fees",
      content: `Applicable delivery charges will be communicated before you complete your order.

The fee may depend on your location, delivery distance, or other stated conditions. Please review your order summary carefully before confirming payment.`
    },
    {
      id: 4,
      title: "Receiving Your Order",
      content: `To help us complete your delivery successfully:

• Provide a correct and complete delivery address.
• Include useful directions or landmarks where necessary.
• Keep your phone available in case the delivery team needs to contact you.
• Ensure someone is available to receive the order at the stated address.`
    },
    {
      id: 5,
      title: "Delays and Delivery Problems",
      content: `Although we aim to deliver orders as promptly as possible, delays may occasionally occur.

If your order is significantly delayed, please contact us with your order reference so we can check its status.

If your order arrives incomplete, incorrect, or damaged, notify us promptly so we can review the issue and discuss an appropriate resolution.`
    },
    {
      id: 6,
      title: "Large and Special Orders",
      content: `For family gatherings, office lunches, celebrations, and other large orders, please contact us in advance to discuss meal availability, quantities, preparation time, and delivery arrangements.

Special arrangements should be confirmed with our team before you rely on them.`
    }
  ];

  const filteredSections = sections.filter(sec => 
    sec.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    sec.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const leftColSections = filteredSections.filter(sec => sec.id <= 3);
  const rightColSections = filteredSections.filter(sec => sec.id > 3);

  return (
    <div style={{ backgroundColor: '#FAF8F5', color: '#2B2B2B', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* --- NAVBAR --- */}
      <nav className="navbar navbar-expand-lg sticky-top py-3" style={{ backgroundColor: '#111827', borderBottom: '1px solid #2D3748' }}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center text-white fw-bold" href="#home">
            <div className="rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: 40, height: 40, backgroundColor: '#D97706' }}>
              <span className="fs-5">👨‍🍳</span>
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', lineHeight: 1 }}>WonderLand</div>
              <small style={{ color: '#D97706', fontSize: '0.75rem', letterSpacing: '2px' }}>CUISINE</small>
            </div>
          </a>

          <div className="d-flex align-items-center gap-4">
            <div className="d-none d-md-flex gap-4">
              <a href="#menu" className="text-white-50 text-decoration-none fw-semibold">MENU ▾</a>
              <a href="#about" className="text-white-50 text-decoration-none fw-semibold">ABOUT</a>
              <a href="#contact" className="text-white-50 text-decoration-none fw-semibold">CONTACT</a>
            </div>
            <button className="btn btn-sm btn-outline-warning text-white d-flex align-items-center gap-2 position-relative" style={{ borderColor: '#D97706' }}>
              <FaShoppingBag style={{ color: '#D97706' }} />
              <span>CART</span>
              <span className="badge rounded-pill bg-danger">{cartCount}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO BANNER --- */}
      <div className="position-relative text-white py-5" style={{ 
        backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.88), rgba(17, 24, 39, 0.95)), url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container py-4">
          <div className="small text-uppercase mb-2" style={{ color: '#F59E0B', letterSpacing: '1px' }}>
            Home / Delivery Information
          </div>
          <h1 className="display-4 fw-bold mb-2">Delivery Information</h1>
          <p className="lead mb-0" style={{ color: '#D1D5DB' }}>Fresh Meals, Delivered with Care</p>
        </div>
      </div>

      {/* --- SUB-BANNER INTRO --- */}
      <div className="py-3 text-white" style={{ backgroundColor: '#B8860B' }}>
        <div className="container d-flex align-items-center gap-3">
          <FaTruck className="fs-3 flex-shrink-0" />
          <div>
            <p className="mb-0 fw-medium">
              At WonderLand Cuisine, we want you to enjoy your favourite meals with as little hassle as possible. Our delivery service is designed to make ordering convenient, whether you are at home, at work, or meeting friends.
            </p>
          </div>
        </div>
      </div>

      {/* --- HOW OUR DELIVERY WORKS (4 STEPS) --- */}
      <div className="bg-white py-5 border-bottom shadow-sm">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{ color: '#111827' }}>How Our Delivery Works</h2>
          <div className="row g-4">
            {steps.map((s, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="p-4 rounded-3 h-100 border text-center position-relative bg-light">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3" style={{ width: 50, height: 50, backgroundColor: '#B8860B', fontSize: '1.25rem' }}>
                    {s.icon}
                  </div>
                  <div className="badge bg-warning text-dark mb-2 d-block mx-auto" style={{ width: 'max-content' }}>{s.num}</div>
                  <h5 className="fw-bold mb-2 text-dark">{s.title}</h5>
                  <p className="small text-secondary mb-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SEARCH TOOLBAR --- */}
      <div className="bg-white border-bottom py-3">
        <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
          <div className="input-group" style={{ maxWidth: '400px' }}>
            <span className="input-group-text bg-light"><FaSearch className="text-muted" /></span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search delivery info (fees, delays, times)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* --- TWO COLUMN DELIVERY CONTENT --- */}
      <div className="container py-5">
        <div className="row g-4">
          
          {/* Left Column (Sections 1 to 3) */}
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

          {/* Right Column (Sections 4 to 6) */}
          <div className="col-lg-6">
            {rightColSections.map((sec) => (
              <div key={sec.id} className="bg-white p-4 rounded-3 shadow-sm mb-4 border-start border-4" style={{ borderColor: '#B8860B' }}>
                <h3 className="h5 fw-bold mb-3" style={{ color: '#9A6E1D' }}>{sec.title}</h3>
                <div className="text-secondary" style={{ whiteSpace: 'pre-line', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {sec.content}
                </div>
              </div>
            ))}

            {/* CONTACT US CALLOUT CARD */}
            <div className="p-4 rounded-3 text-white shadow-sm mt-4" style={{ backgroundColor: '#B8860B' }}>
              <h4 className="fw-bold mb-2 d-flex align-items-center gap-2">
                <FaPhoneAlt /> Contact Us
              </h4>
              <p className="mb-3 opacity-90" style={{ fontSize: '0.95rem' }}>
                Need help with a delivery or want to confirm whether we serve your area? Visit our Contact Us page and provide your order reference, where applicable. We will do our best to assist you.
              </p>
              <a href="#contact" className="btn btn-dark fw-semibold px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2">
                Get In Touch <FaChevronRight size={12} />
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

export default Delivery;