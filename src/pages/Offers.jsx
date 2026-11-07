import React, { useState } from 'react';
import { 
  FaShoppingBag, 
  FaSearch, 
  FaTag, 
  FaUtensils, 
  FaUsers, 
  FaCalendarAlt, 
  FaCheckCircle, 
  FaExclamationCircle, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaClock, 
  FaEnvelope, 
  FaStar, 
  FaChevronRight 
} from 'react-icons/fa';

const OffersPromotions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount] = useState(0);

  const steps = [
    { num: "1", text: "Browse the available promotions." },
    { num: "2", text: "Select your preferred meal or combination." },
    { num: "3", text: "Check the listed price and any applicable conditions." },
    { num: "4", text: "Add eligible items to your cart." },
    { num: "5", text: "Review your order and complete checkout." }
  ];

  const categories = [
    {
      id: 1,
      title: "Special Offers",
      icon: <FaTag className="text-warning fs-4" />,
      content: "Discover selected meals and special combinations at promotional prices. Check this page regularly to see which offers are available."
    },
    {
      id: 2,
      title: "Meal Combos",
      icon: <FaUtensils className="text-warning fs-4" />,
      content: `Make mealtime easier with delicious combinations of selected dishes and accompaniments.

Whether you are enjoying lunch at work, sharing a meal with family, or treating yourself after a busy day, our meal combinations offer a convenient way to enjoy your favourites together.`
    },
    {
      id: 3,
      title: "Family and Group Orders",
      icon: <FaUsers className="text-warning fs-4" />,
      content: `Planning a family gathering, office lunch, or get-together with friends?

Explore our menu for meals suitable for sharing. For larger orders or special arrangements, contact our team to discuss availability and pricing.`
    },
    {
      id: 4,
      title: "Seasonal Promotions",
      icon: <FaCalendarAlt className="text-warning fs-4" />,
      content: `Look out for special offers during festive periods, holidays, celebrations, and other promotional events.

Follow our official communication channels, where available, for announcements about upcoming deals.`
    }
  ];

  const termsList = [
    "Promotions are available only during their stated validity periods.",
    "Some offers may apply only to selected meals or locations.",
    "Discounts cannot be assumed to apply to every item.",
    "Minimum order requirements may apply where stated.",
    "Offers cannot be combined unless the promotion explicitly permits it.",
    "Promotional items are subject to availability.",
    "Any applicable restrictions will be communicated with the relevant offer."
  ];

  const filteredCategories = categories.filter(cat => 
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cat.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            Home / Offers & Promotions
          </div>
          <h1 className="display-4 fw-bold mb-2">Offers & Promotions</h1>
          <p className="lead mb-0" style={{ color: '#D1D5DB' }}>Good Food. Great Deals. More Reasons to Enjoy Every Bite.</p>
        </div>
      </div>

      {/* --- SUB-BANNER INTRO --- */}
      <div className="py-3 text-white" style={{ backgroundColor: '#B8860B' }}>
        <div className="container d-flex align-items-center gap-3">
          <FaTag className="fs-3 flex-shrink-0" />
          <div>
            <p className="mb-0 fw-medium">
              At WonderLand Cuisine, we believe that enjoying delicious meals should feel even better when you get great value. Explore our special offers, meal combinations, and promotions designed to make every order more enjoyable.
            </p>
          </div>
        </div>
      </div>

      {/* --- SEARCH TOOLBAR --- */}
      <div className="bg-white border-bottom py-3 shadow-sm">
        <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
          <div className="input-group" style={{ maxWidth: '400px' }}>
            <span className="input-group-text bg-light"><FaSearch className="text-muted" /></span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search promotions or combos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <a href="#menu" className="btn btn-warning text-dark font-monospace fw-bold px-4 rounded-pill d-flex align-items-center gap-2">
            Explore Menu <FaChevronRight size={12} />
          </a>
        </div>
      </div>

      {/* --- PROMOTION CATEGORIES GRID --- */}
      <div className="container py-5">
        <div className="row g-4 mb-5">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="col-md-6">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100 border-start border-4" style={{ borderColor: '#B8860B' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-2 rounded-circle" style={{ backgroundColor: '#FEF3C7' }}>
                    {cat.icon}
                  </div>
                  <h3 className="h5 fw-bold mb-0" style={{ color: '#111827' }}>{cat.title}</h3>
                </div>
                <div className="text-secondary" style={{ whiteSpace: 'pre-line', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {cat.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- HOW TO ENJOY OUR OFFERS (5 STEPS) --- */}
        <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm mb-5">
          <h2 className="fw-bold text-center mb-4" style={{ color: '#111827' }}>How to Enjoy Our Offers</h2>
          <div className="row g-3 justify-content-center">
            {steps.map((step) => (
              <div key={step.num} className="col-6 col-md-4 col-lg-2.4">
                <div className="p-3 text-center rounded-3 bg-light h-100 border">
                  <div className="rounded-circle bg-warning text-dark fw-bold d-inline-flex align-items-center justify-content-center mb-2" style={{ width: 36, height: 36 }}>
                    {step.num}
                  </div>
                  <p className="small text-secondary mb-0 fw-medium">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- TERMS OF PROMOTIONS --- */}
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="bg-white p-4 rounded-3 shadow-sm h-100 border-start border-4" style={{ borderColor: '#B8860B' }}>
              <h3 className="h5 fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#9A6E1D' }}>
                <FaExclamationCircle /> Terms of Promotions
              </h3>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: '0.95rem' }}>
                {termsList.map((term, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-2 text-secondary">
                    <FaCheckCircle className="text-warning flex-shrink-0 mt-1" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- CALLOUT: YOUR NEXT FAVOURITE MEAL IS WAITING --- */}
          <div className="col-lg-5">
            <div className="p-4 p-md-5 rounded-3 text-white shadow-sm h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: '#B8860B' }}>
              <h3 className="fw-bold mb-3">Your Next Favourite Meal Is Waiting</h3>
              <p className="mb-4 opacity-90" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                Explore our menu, discover something delicious, and make your next meal special with WonderLand Cuisine.
              </p>
              <div>
                <p className="fw-bold mb-2">Ready to order?</p>
                <a href="#menu" className="btn btn-dark fw-bold px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2">
                  Visit Menu Page <FaChevronRight size={12} />
                </a>
              </div>
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

export default OffersPromotions;