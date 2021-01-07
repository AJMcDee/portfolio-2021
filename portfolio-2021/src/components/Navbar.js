import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  const [navExpand, setNavExpand] = useState("none");
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setNavExpand("flex");
    } else {
      setNavExpand("none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      style={{ position: "sticky", display: navExpand }}
    >
      <Navbar.Brand
        href="#home"
        style={{ fontFamily: `"Staatliches", sans-serif` }}
      >
        Anna McDougall
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#AboutMe">About</Nav.Link>
          <Nav.Link href="#TechStack">Tech Stack</Nav.Link>
          <Nav.Link href="#ProjectShowcase">Projects</Nav.Link>
          <Nav.Link href="#SocialFeed">Social Feed</Nav.Link>
          <Nav.Link href="#ContactForm">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
