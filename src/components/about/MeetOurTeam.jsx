import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiChefHatBold } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { FaHeart } from "react-icons/fa";



function MeetOurTeam() {
  return (
    <Container fluid className="meet-team-section">
      <Row className="align-items-center g-5">
        {/* Left Side: Chef Image */}
        <Col md={6} className="team-image-col">
          <img 
            src="images/chef cooking.jpg" 
            className="img-fluid team-main-img" 
            alt="Chef cooking in kitchen" 
          />
        </Col>

        {/* Right Side: Text & Feature Sub-grid */}
        <Col md={6} className="team-content-col">
          <h2 className="team-title">Meet Our Team</h2>
          <h6 className="team-subtitle">Passionate People, Great Food.</h6>
          <p className="team-text">
            Our team is made up of experienced chefs, skilled kitchen staff and 
            friendly service crew all working together to give you the best food experience.
          </p>
          
          {/* Sub-grid for features */}
          <Row className="mt-4 g-4">
            <Col md={4} sm={6} xs={12}>
              <div className="feature-card">
                <div className="feature-icon"><PiChefHatBold size={24} /></div>
                <h6>Skilled Chefs</h6>
                <p>Bringing creativity and flavour to every dish</p>
              </div>
            </Col>

            <Col md={4} sm={6} xs={12}>
              <div className="feature-card">
                <div className="feature-icon"><IoIosPeople size={24} /></div>
                <h6>Support Staff</h6>
                <p>Keeping things running smoothly for you.</p>
              </div>
            </Col>

            <Col md={4} sm={12} xs={12}>
              <div className="feature-card">
                <div className="feature-icon"><FaHeart size={24} /></div>
                <h6>Our Goal</h6>
                <p>Your Happiness, Our Success.</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MeetOurTeam;