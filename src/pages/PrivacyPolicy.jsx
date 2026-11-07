import React, { useState } from 'react';
import { 
  FaShoppingBag, 
  FaSearch, 
  FaPrint, 
  FaShieldAlt, 
  FaUserLock, 
  FaCheckCircle, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaClock, 
  FaEnvelope, 
  FaStar, 
  FaChevronRight 
} from 'react-icons/fa';

const PrivacyPolicy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount] = useState(0);

  const sections = [
    {
      id: 1,
      title: "1. Introduction",
      content: `At WonderLand Cuisine, we respect your privacy and are committed to handling your personal information responsibly.

This Privacy Policy explains the types of information we may collect, how we use it, when it may be shared, and the choices available to you when using our website and ordering services.`
    },
    {
      id: 2,
      title: "2. Information We May Collect",
      content: `Depending on how you use our services, we may collect the following information:

• Personal Information:
  - Full name
  - Email address
  - Telephone number
  - Delivery address

• Order Information:
  - Meals and products ordered
  - Order date and time
  - Delivery instructions
  - Order history and status

• Payment Information:
We may receive payment confirmations and transaction references from payment providers. Where third-party payment services are used, payment card information may be handled directly by those providers.

• Technical Information:
Our website or service providers may collect limited technical information, such as browser type, device information, and website usage data, where applicable.`
    },
    {
      id: 3,
      title: "3. How We Use Your Information",
      content: `We may use your information to:
• Process and manage food orders.
• Arrange deliveries and communicate with customers.
• Confirm payments and handle refunds.
• Respond to enquiries, complaints, and feedback.
• Improve our menu, website, and customer experience.
• Detect and prevent fraudulent or unauthorized activity.
• Meet applicable legal and regulatory obligations.

We will not use your information for unrelated purposes without an appropriate legal basis.`
    },
    {
      id: 4,
      title: "4. How We Share Information",
      content: `We do not sell your personal information to third parties.

Where necessary, information may be shared with:
• Delivery personnel who need delivery details to complete an order.
• Payment providers that process transactions.
• Technology and hosting providers that support our website.
• Relevant authorities where disclosure is legally required.

We expect service providers handling personal information on our behalf to apply appropriate safeguards.`
    },
    {
      id: 5,
      title: "5. Data Security",
      content: `We take reasonable steps to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.

However, no website or electronic transmission can be guaranteed to be completely secure. Customers should avoid sharing passwords, payment PINs, or other sensitive credentials through unsecured channels.`
    },
    {
      id: 6,
      title: "6. Data Retention",
      content: `We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including order management, customer support, recordkeeping, and compliance with applicable legal obligations.

The retention period depends on the type of information and the reason it was collected.`
    },
    {
      id: 7,
      title: "7. Your Privacy Rights",
      content: `Depending on applicable law, you may have the right to:
• Request access to personal information we hold about you.
• Ask us to correct inaccurate information.
• Request deletion of certain personal information.
• Object to or request restrictions on certain processing.
• Withdraw consent where processing relies on consent.
• Submit a complaint to the relevant data protection authority.

Requests can be submitted through our Contact Us page. We may need to verify your identity before responding.`
    },
    {
      id: 8,
      title: "8. Cookies and Similar Technologies",
      content: `Our website may use cookies or similar technologies to support essential functionality, remember preferences, or understand website usage.

Where required, we will seek consent before using non-essential cookies. You may also be able to manage cookies through your browser settings.`
    },
    {
      id: 9,
      title: "9. Third-Party Services",
      content: `Our website may link to third-party websites or use external services, such as payment providers.

Those services may have their own privacy policies and practices. We encourage customers to review the relevant policies before sharing personal information with them.`
    },
    {
      id: 10,
      title: "10. Children's Privacy",
      content: `Our website is not intended to encourage children to provide personal information unnecessarily. Where a child’s information is collected, it should be handled in accordance with applicable law and appropriate safeguards.`
    },
    {
      id: 11,
      title: "11. Changes to This Policy",
      content: `We may update this Privacy Policy as our services and legal obligations evolve.

Any revised policy will be published on this page with an updated date where appropriate.`
    },
    {
      id: 12,
      title: "12. Contact Us",
      content: `For questions, access requests, correction requests, or other privacy concerns, please contact WonderLand Cuisine through our Contact Us page.

We value your trust and are committed to treating your personal information responsibly.`
    }
  ];

  const filteredSections = sections.filter(sec => 
    sec.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    sec.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const leftColSections = filteredSections.filter(sec => sec.id <= 6);
  const rightColSections = filteredSections.filter(sec => sec.id > 6);

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
            Home / Privacy Policy
          </div>
          <h1 className="display-4 fw-bold mb-2">Privacy Policy</h1>
          <p className="lead mb-0" style={{ color: '#D1D5DB' }}>Last Updated: October 2026</p>
        </div>
      </div>

      {/* --- SUB-BANNER INTRO --- */}
      <div className="py-3 text-white" style={{ backgroundColor: '#B8860B' }}>
        <div className="container d-flex align-items-center gap-3">
          <FaShieldAlt className="fs-3 flex-shrink-0" />
          <div>
            <p className="mb-0 fw-medium">
              At WonderLand Cuisine, we respect your privacy and are committed to handling your personal information responsibly. We value your trust and strive to protect your privacy rights.
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
              placeholder="Search privacy topics (e.g. cookies, data, rights)..."
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
          
          {/* Left Column (Sections 1 to 6) */}
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

          {/* Right Column (Sections 7 to 12) */}
          <div className="col-lg-6">
            {rightColSections.map((sec) => (
              <div key={sec.id} className="bg-white p-4 rounded-3 shadow-sm mb-4 border-start border-4" style={{ borderColor: '#B8860B' }}>
                <h3 className="h5 fw-bold mb-3" style={{ color: '#9A6E1D' }}>{sec.title}</h3>
                <div className="text-secondary" style={{ whiteSpace: 'pre-line', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {sec.content}
                </div>
              </div>
            ))}

            {/* PRIVACY CONTACT CALLOUT CARD */}
            <div className="p-4 rounded-3 text-white shadow-sm mt-4" style={{ backgroundColor: '#B8860B' }}>
              <h4 className="fw-bold mb-2 d-flex align-items-center gap-2">
                <FaUserLock /> Have Privacy Questions?
              </h4>
              <p className="mb-3 opacity-90" style={{ fontSize: '0.95rem' }}>
                For questions, access requests, correction requests, or other privacy concerns, please contact WonderLand Cuisine through our Contact Us page.
              </p>
              <a href="#contact" className="btn btn-dark fw-semibold px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2">
                Contact Privacy Team <FaChevronRight size={12} />
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

export default PrivacyPolicy;