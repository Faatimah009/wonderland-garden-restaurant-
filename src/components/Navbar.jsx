import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";0
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartShopping } from "react-icons/fa6";
function NavbarMenu() {
  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <Container>
          <Navbar.Brand href="#home">
            <img src="pic.jpeg" alt="Logo" height="70px" width="80px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Local dishes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Foreign Cuisine
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Dessert</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#cart">
                {" "}
                Cart
                <FaCartShopping />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;
