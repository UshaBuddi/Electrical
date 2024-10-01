// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//       <Navbar.Brand href="/"><img src="logo.png" alt="Website Logo" class="header-logo" /></Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//         <Nav.Link as={Link} to="/">Home</Nav.Link>
//           <Nav.Link as={Link} to="/about">About</Nav.Link>
//           <Nav.Link as={Link} to="/services">Services</Nav.Link>
//           <Nav.Link as={Link} to="/ourwork">Our Work</Nav.Link>
//           <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleMenu = () => {
//     setIsMobile(!isMobile);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <a href="/">
//           <img src="/logo.png" alt="Logo" />
//         </a>
//       </div>
//       <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
//         <li><a href="/">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/ourwork">Our Work</a></li>
//         <li><a href="/services">Services</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//       <div className="menu-icon" onClick={toggleMenu}>
//         {isMobile ? <FaTimes /> : <FaBars />}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Navbar.css';

const MyNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          <img
            src="/logo.png"  // Replace with your logo path
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/ourwork" className="nav-item">
              Our Work
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-item">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
