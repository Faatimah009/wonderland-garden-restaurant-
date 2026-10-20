import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OurStory() {
  return (
    <div>
    <Container fluid className='our-story-section'>
      <Row className="align-items-center">
        <Col md={6} className='our-story-content'>
        <h2>Our Story</h2>
        <h6>From a simple dream To a food haven</h6>
        <p> WonderLand Cuisine was born from a simple passion — to bring people together through amazing food. What started as a small kitchen dream has grown into a trusted destination for delicious, freshly prepared meals, made with love and the finest ingredients. </p>
        <p>We believe that good food does more than fill your stomach; it creates happy moments, builds connections, and leaves lasting memories. </p>
        <p>Operating as a dedicated dispatch kitchen, we prepare a variety of local and international dishes with care, ensuring your food arrives hot, fresh, and bursting with flavor straight to your doorstep. </p>
        <button>Our Menu →</button>
   
        </Col>
        <Col md={6} className='image-wrapper'><img src="images/remove_the_text_20261012122729.jpg" width={600} alt="image to food" /></Col>
      </Row>
      </Container>
    </div>
  )
}

export default OurStory;
