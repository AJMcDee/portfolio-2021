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
    <>
      <style type="text/css">
        {`
      .navbar-anna {
         position: sticky;
         box-shadow: 0px 0px 30px #b87700;
         padding: 1rem;
         background-color: #131529;
         display: ${navExpand};
    }
    `}
      </style>
      <Navbar
        collapseOnSelect
        variant="dark"
        bg="dark"
        expand="lg"
        fixed="top"
        style={{ display: navExpand }}
      >
        <Navbar.Brand
          href="#top"
          style={{ fontFamily: `"Staatliches", sans-serif` }}
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
