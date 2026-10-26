import React from "react";
import { Container } from "react-bootstrap";

const steps = [
  { icon: "📞", title: "1. Order Placement", sub: "(Phone/Web)" },
  { icon: "👨‍🍳", title: "2. Meal Preparation", sub: "(Lagos Hub)" },
  { icon: "🚚", title: "3. Delivery & Setup", sub: "(On-Site)" },
  { icon: "😊", title: "4. Happy Guests", sub: "(Event Completion)" },
];

const ServiceProcess = () => {
  return (
    <section className="process-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="process-heading">
            Our <span className="text-gold">Service Process</span>
          </h2>
          <p className="process-sub">How we handle your bookings from start to finish:</p>
        </div>

        <div className="process-flow">
          {steps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <div className="process-card">
                <div className="process-circle">{step.icon}</div>
                <h4 className="process-title">{step.title}</h4>
                <span className="process-subtitle">{step.sub}</span>
              </div>
              {idx < steps.length - 1 && <span className="process-arrow">➔</span>}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceProcess;