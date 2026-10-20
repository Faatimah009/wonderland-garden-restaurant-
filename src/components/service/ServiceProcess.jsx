import React from 'react'

const ServiceProcess = () => {
      const steps = [
  { icon: "📞", title: "1. Order Placement", sub: "(Phone/Web)" },
  { icon: "👨‍🍳", title: "2. Meal Preparation", sub: "(Lagos Hub)" },
  { icon: "🚚", title: "3. Delivery & Setup", sub: "(On-Site)" },
  { icon: "😊", title: "4. Happy Guests", sub: "(Event Completion)" },
];
  return (


function ServiceProcess() {
  return (
    <section className="process">
     
      <div className="process__header">
        <span className="process__bar" />
        <h2>
          Our <span>Service Process</span>
        </h2>
        <p>How we handle your bookings from start to finish:</p>
      </div>

      <div className="process__steps">
        {steps.map((step, i) => (
          <div className="process__item" key={step.title}>
            <div className="process__step">
              <div className="process__icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <small>{step.sub}</small>
            </div>
            {i < steps.length - 1 && <span className="process__arrow">→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

  )
}

export default ServiceProcess