import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navigation.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo_nav from "../images/logo_eduart.png";

function Navigation() {
  const history = useNavigate();

  const PrivateNavLink = ({ to, children }) => {
    const token = localStorage.getItem('token');

    const handleClick = () => {
      if (token) {
        history.push(to);
      } else {
        history('/signin');
      }
    };

    return (
      <Nav.Link onClick={handleClick} className="nav-link" id="nav-menu">
        {children}
      </Nav.Link>
    );
  };

  return (
    <>
      <Navbar expand="lg">
        <Container className="nav-container">
          <Navbar.Brand href="#home">
            <img src={logo_nav} alt=''/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu-tengah">
              <NavLink to="/" className="nav-link" id="nav-menu">
                Home
              </NavLink>
              <NavLink to="/course" className="nav-link" id="nav-menu">
                Course
              </NavLink>
              <PrivateNavLink to="/mentor">Mentor</PrivateNavLink>
              <NavLink to="/article" className="nav-link" id="nav-menu">
                Article
              </NavLink>
            </Nav>
            <Nav className="menu-kanan">
              <NavLink to="/SignIn" className="nav-button">
                <button className="signin-button">Sign In</button>
              </NavLink>
              <NavLink to="/SignUp" className="nav-button">
                <button className="signup-button">Sign Up</button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;