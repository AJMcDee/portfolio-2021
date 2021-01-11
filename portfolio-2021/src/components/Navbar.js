import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  const [navExpand, setNavExpand] = useState("hidden");
  const [fadeEffect, setFadeEffect] = useState("");
  const handleScroll = async () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setFadeEffect("fade-in");
      setNavExpand("visible");
    } else {
      setFadeEffect("fade-out");
      await setTimeout(() => setNavExpand("hidden"), 1500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg" fixed="top">
        <Navbar.Brand
          href="#top"
          style={{
            fontFamily: `"Staatliches", sans-serif`,
            visibility: navExpand,
          }}
          className={fadeEffect}
        >
          Anna McDougall
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#AboutMe" className="text-light">
              About
            </Nav.Link>

            <Nav.Link className="text-light" href="#TechStack">
              Tech Stack
            </Nav.Link>

            <Nav.Link className="text-light" href="#ProjectShowcase">
              Projects
            </Nav.Link>
            <Nav.Link className="text-light" href="#SocialFeed">
              Social Feed
            </Nav.Link>
            <Nav.Link className="text-light" href="#ContactForm">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
