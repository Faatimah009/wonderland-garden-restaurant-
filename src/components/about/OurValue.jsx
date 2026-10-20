import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PiChefHatFill } from 'react-icons/pi';
import { FaHeart } from 'react-icons/fa';
import { AiTwotoneSafetyCertificate } from 'react-icons/ai';
import { RiUserCommunityLine } from 'react-icons/ri';


function OurValue() {
  return (
    <Container fluid className="values-section">
      <Row className="align-items-center">
        <Col lg={4} md={12} className="values-intro">
          <h2 className="values-title"><span className='first-test'>Our </span>Values</h2>
          <h6 className="values-subtitle">What We Stand For</h6>
          <p className="values-intro-text">
            At Kachi's place Cuisine, our values guide everything we do—from the kitchen to your doorstep:
          </p>
          <button className="values-button">Learn More →</button>
        </Col>

       
        <Col lg={8} md={12}>
          <Row>
            <Col sm={6} xs={12} className="value-card-wrapper">
              <div className="value-card">
                <div className="value-icon-box">
                  <PiChefHatFill size={28} />
                </div>
                <h6 className="value-card-title">Quality Food</h6>
                <p className="value-card-text">We use fresh, high-quality ingredients in every dish.</p>
              </div>
            </Col>

          
            <Col sm={6} xs={12} className="value-card-wrapper">
              <div className="value-card">
                <div className="value-icon-box">
                  <FaHeart size={26} />
                </div>
                <h6 className="value-card-title">Customer Happiness</h6>
                <p className="value-card-text">Your satisfaction is our top priority.</p>
              </div>
            </Col>

           
            <Col sm={6} xs={12} className="value-card-wrapper">
              <div className="value-card">
                <div className="value-icon-box">
                  <AiTwotoneSafetyCertificate size={28} />
                </div>
                <h6 className="value-card-title">Food Safety</h6>
                <p className="value-card-text">We maintain the highest standards of hygiene and safety.</p>
              </div>
            </Col>

           
            <Col sm={6} xs={12} className="value-card-wrapper">
              <div className="value-card">
                <div className="value-icon-box">
                  <RiUserCommunityLine size={28} />
                </div>
                <h6 className="value-card-title">Community</h6>
                <p className="value-card-text">We support local farmers and give back to our community.</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default OurValue;
