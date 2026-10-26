import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
0;
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartShopping } from "react-icons/fa6";
import wonder from "../assets/Logos/wonder.png";
import { Link } from "react-router-dom";
function NavbarMenu({ CartCount = 0 }) {
  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <Container>
          <Navbar.Brand  as={Link} to="/">
            <img src={wonder} alt="Logo" height="70px" width="80px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/menu">
                  Local dishes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/menu">
                  Foreign Cuisine
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/menu">Dessert</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="d-flex align-item-center gap-2">
                <FaCartShopping /> Cart<span className="badge bg-danger"> {CartCount}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;
