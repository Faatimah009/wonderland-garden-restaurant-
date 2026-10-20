import { useState } from "react";

function RequestQuote() {
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

    console.log("Quote request:", form);
    setSent(true);
  };

  return (
    <section className="quote">
      <div
        className="quote-info"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,20,45,.75), rgba(10,20,45,.75)), url(/images/quote-bg.jpg)",
        }}
      >
        <h2>
          Request a <span>Quote</span>
        </h2>
        <p>
          Tell us about your event and we'll get back to you with a customized
          quote.
        </p>
        <ul className="quote-perks">
          <li>Fresh Ingredients</li>
          <li>Professional Staff</li>
          <li>On-Time Delivery</li>
        </ul>
      </div>

      <form className="quote-form" onSubmit={submit}>
        <label>
          Event Type
          <select name="type" value={form.type} onChange={update} required>
            <option value="">Select Event Type</option>
            <option>Wedding</option>
            <option>Corporate Event</option>
            <option>Birthday / Party</option>
            <option>Bulk Order</option>
          </select>
        </label>

        <label>
          Estimated Guests
          <input
            name="guests"
            type="number"
            min="1"
            placeholder="e.g. 50"
            value={form.guests}
            onChange={update}
            required
          />
        </label>

        <label>
          Date
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={update}
            required
          />
        </label>

        <label>
          On-Site
          <input
            name="location"
            placeholder="e.g. Ikeja"
            value={form.location}
            onChange={update}
          />
        </label>

        <label className="full">
          Message
          <textarea
            name="message"
            rows="3"
            placeholder="Tell us about your event, delivery needs or special requests..."
            value={form.message}
            onChange={update}
          />
        </label>

        <button type="submit" className="btn full">
          Get a Quote →
        </button>

        {sent && (
          <p className="full success">Thanks! We'll get back to you shortly.</p>
        )}
      </form>
    </section>
  );
}
export default RequestQuote;
