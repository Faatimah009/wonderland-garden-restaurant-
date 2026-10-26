import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServiceCategory = () => {
  return (
    <section className="service-categories">
      <div className="text-center mb-5">
        <h2 className="categories-header">
          Service <span className="text-gold">Categories</span>
        </h2>
      </div>

      {/* 1. Bulk Orders (Light Theme) */}
      <div className="category-strip light-strip">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6} className="pe-lg-5">
              <div className="cat-badge">📦</div>
              <h3 className="cat-title">Bulk Orders</h3>
              <p className="cat-desc">
                Large-scale food production for offices, groups, and family packs.
              </p>
              <h6 className="offer-heading">Offerings:</h6>
              <div className="offerings-grid">
                <div className="offer-item">
                  <span className="check-icon">✓</span> Party-Size Jollof Rice (30–50 Persons)
                </div>
                <div className="offer-item">
                  <span className="check-icon">✓</span> Suya Platter (Large)
                </div>
                <div className="offer-item">
                  <span className="check-icon">✓</span> Family Meal Packs
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="cat-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80"
                  alt="Bulk Orders Jollof Rice"
                  className="cat-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 2. Corporate Catering (Dark Theme) */}
      <div className="category-strip dark-strip">
        <Container>
          <Row className="align-items-center gy-4 flex-lg-row-reverse">
            <Col lg={6} className="ps-lg-5">
              <div className="cat-badge">🏢</div>
              <h3 className="cat-title text-gold">Corporate Catering</h3>
              <p className="cat-desc text-muted-light">
                Polished service for business lunches, conference lunches, and employee meals.
              </p>
              <h6 className="offer-heading text-gold">Offerings:</h6>
              <div className="offerings-grid text-muted-light">
                <div className="offer-item">
                  <span className="check-icon text-gold">✓</span> Customized corporate meal boxes
                </div>
                <div className="offer-item">
                  <span className="check-icon text-gold">✓</span> Reliable scheduled office deliveries
                </div>
                <div className="offer-item">
                  <span className="check-icon text-gold">✓</span> Professional setup support
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="cat-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80"
                  alt="Corporate Catering Setup"
                  className="cat-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. Event Catering (Light Theme) */}
      <div className="category-strip light-strip">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6} className="pe-lg-5">
              <div className="cat-badge">💍</div>
              <h3 className="cat-title">Event Catering</h3>
              <p className="cat-desc">
                Elegant catering for weddings, gala food stations, and private events across Lagos.
              </p>
              <h6 className="offer-heading">Offerings:</h6>
              <div className="offerings-grid">
                <div className="offer-item">
                  <span className="check-icon">✓</span> Full buffet setups
                </div>
                <div className="offer-item">
                  <span className="check-icon">✓</span> Dedicated event support staff
                </div>
                <div className="offer-item">
                  <span className="check-icon">✓</span> Live food stations
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="cat-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80"
                  alt="Event Catering Reception"
                  className="cat-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4. Home Delivery (Dark Theme) */}
      <div className="category-strip dark-strip">
        <Container>
          <Row className="align-items-center gy-4 flex-lg-row-reverse">
            <Col lg={6} className="ps-lg-5">
              <div className="cat-badge">🚚</div>
              <h3 className="cat-title text-gold">Home Delivery</h3>
              <p className="cat-desc text-muted-light">
                Quick and secure delivery of all bulk orders across Lagos.
              </p>
              <h6 className="offer-heading text-gold">Offerings:</h6>
              <div className="offerings-grid text-muted-light">
                <div className="offer-item">
                  <span className="check-icon text-gold">✓</span> Fast & reliable delivery
                </div>
                <div className="offer-item">
                  <span className="check-icon text-gold">✓</span> Safe packaging
                </div>
                <div className="offer-item">
                  <span className="check-icon text-gold">✓</span> Coverage across Lagos
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="cat-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
                  alt="Home Delivery Vans"
                  className="cat-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ServiceCategory;