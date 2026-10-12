import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPhone , FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import wonderl from "../assets/Logos/wonderl.png"


function Footer() {
  return (
    <Container fluid className="bg-black p-5 text-white">
      <Row>
        <Col>
        <img src={wonderl} alt="Logo" width="200px"/>
          <p>
            Delicious meals, freshly prepared with love. Enjoy your favourite
            sishes and get them delivered straight to your doorstep.
          </p>
          <p> <FaLocationDot />Lagos,Nigeria</p>
        </Col>
        <Col className="px-5 mb-5">
          <h5>Quicklink</h5>
          <ul className="list-unstyled">
            <li >Home</li>
            <li>Our Menu</li>
            <li>About Us</li>
            <li>Conntact Us</li>
          </ul>
        </Col>
        <Col >
          <h5>Contact us</h5>
          <p> <FaPhone/>+234 800 000 000</p>
          <p> <MdEmail/>hello@wonderlandgarden.com</p>
          <p> <MdOutlineAccessTime />9AM-10PM</p>
        </Col>
      </Row>
      <hr/>
      <Row>
        <p>&copy; 2026 WONDERLAND GARDEN RESTAURANT. ALL RIGHTS RESERVED.</p>
      </Row>
    </Container>
  );
}

export default Footer;
