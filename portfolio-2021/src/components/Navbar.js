import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  let startingState = window.innerWidth >= 1024 ? "visible" : "hidden";
  const [navExpand, setNavExpand] = useState(startingState);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (window.innerWidth < 1024) {
      if (offset > 200) {
        setNavExpand("visible");
      } else {
        setNavExpand("hidden");
      }
    } else {
      setNavExpand("visible");
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", handleScroll);
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
