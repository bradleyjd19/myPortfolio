import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

function Header() {

  return (
    <Navbar fixed="top" id="navbar" expand="lg">
      <Navbar.Brand href="/"><img id="logo" src="../../images/logo.png" alt="JB Development"></img></Navbar.Brand>
      <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link id="navlink" href="/"><span id="navlink">Home</span></Nav.Link>
          <Nav.Link id="navlink" href="/about"><span id="navlink">About</span></Nav.Link>
          <Nav.Link id="navlink" href="/projects"><span id="navlink">Projects</span></Nav.Link>
          <Nav.Link id="navlink" href="/contact"><span id="navlink">Contact</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}

export default Header;