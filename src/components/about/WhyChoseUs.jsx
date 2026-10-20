import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WhyChoseUs() {
  return (
    <Container fluid className="why-choose-us-section">
      <Row className="align-items-center">
        <Col lg={6} md={12} className="content-col">
          <h2>Why Choose Us?</h2>
          <h6>More Than Just a Meal</h6>
          <div className="features-list">
            <p>✅ Authentic and tasty meals</p>
            <p>✅ Fresh, quality ingredients</p>
            <p>✅ Fast and reliable doorstep delivery</p>
            <p>✅ Friendly and professional customer support</p>
            <p>✅ Very affordable prices</p>
          </div>
        </Col>
        
       
        <Col lg={3} md={6} sm={12} className="image-col">
          <img 
            src="images\remove_the_text_20261012122355.jpg" 
            className="showcase-img" 
            alt="Featured meal" 
          />
        </Col>
        
        
        <Col lg={3} md={6} sm={12} className="image-col">
          <img 
            src="images\Spagetti.jpg" 
            className="showcase-img" 
            alt="Spaghetti" 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default WhyChoseUs;

