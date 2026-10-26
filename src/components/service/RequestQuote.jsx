import React, { useState } from "react";
import { Container } from "react-bootstrap";

const RequestQuote = () => {
  const [form, setForm] = useState({
    type: "",
    guests: "",
    date: "",
    location: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="quote-section">
      <Container>
        <div className="quote-card">
          {/* Left Side: Info with Banquet Photo */}
          <div className="quote-info-panel">
            <div className="gold-accent-line"></div>
            <h2 className="quote-header">
              Request a <br />
              <span className="text-gold">Quote</span>
            </h2>
            <p className="quote-subtext">
              Tell us about your event and we'll get back to you with a customized quote.
            </p>

            <div className="quote-perks-row">
              <div className="perk-pill">
                <span>🍃</span> Fresh Ingredients
              </div>
              <div className="perk-pill">
                <span>👨‍🍳</span> Professional Staff
              </div>
              <div className="perk-pill">
                <span>🚚</span> On-Time Delivery
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="quote-form-panel" onSubmit={submit}>
            <div className="form-group-custom">
              <label>Event Type</label>
              <select name="type" value={form.type} onChange={update} required>
                <option value="">Select Event Type</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday / Party</option>
                <option>Bulk Order</option>
              </select>
            </div>

            <div className="form-group-custom">
              <label>Estimated Guests</label>
              <input
                name="guests"
                type="number"
                min="1"
                placeholder="e.g. 50"
                value={form.guests}
                onChange={update}
                required
              />
            </div>

            <div className="form-group-custom">
              <label>Date</label>
              <input name="date" type="date" value={form.date} onChange={update} required />
            </div>

            <div className="form-group-custom">
              <label>On-Site</label>
              <input
                name="location"
                placeholder="e.g. Ikeja"
                value={form.location}
                onChange={update}
              />
            </div>

            <div className="form-group-custom full-width">
              <label>Message</label>
              <textarea
                name="message"
                rows="3"
                placeholder="Tell us about your event, delivery needs or special requests..."
                value={form.message}
                onChange={update}
              />
            </div>

            <button type="submit" className="quote-submit-btn">
              Get a Quote →
            </button>

            {sent && <p className="success-msg">Thanks! We'll get back to you shortly.</p>}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default RequestQuote;