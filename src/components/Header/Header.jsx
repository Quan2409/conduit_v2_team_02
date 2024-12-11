import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.css";

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand className="fw-bold" style={{color: "#99BC85"}} href="#home">Conduit 2.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">New Article</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signin">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <NavDropdown title="User" id="collapsible-nav-dropdown">
              <NavDropdown.Item >Profile</NavDropdown.Item>
              <NavDropdown.Item >Setting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
