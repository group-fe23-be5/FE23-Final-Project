import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import logo_nav from "../images/logo_eduart.png";
import icon_profile from "../images/icon-profile.png"


function NavigationIn() {
  const history = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(`token navigatiaon ${token}`)
        const response = await axios.get('https://be5finalproject-production.up.railway.app/users', {
          headers: {
            Authorization: `Bearer ${token}`,
            // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjg2NTYxNDUwLCJleHAiOjE2ODY1NjUwNTB9.Ht-PX2yfk75aoKKY-UKJmSWKGbQDbMzhyk-dDz_IGAI`,
          },
        });

        if (response.data) {
          setUserData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      const response = await axios.post('http://localhost:3000/logout', null, {
        headers: {
          Authorization: `${token}`,
          // Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjg2NTYxNDUwLCJleHAiOjE2ODY1NjUwNTB9.Ht-PX2yfk75aoKKY-UKJmSWKGbQDbMzhyk-dDz_IGAI`,
        },
      });
      
      console.log(`response ${response.data.message}`);

      if (response.data.code == 200){
        window.open("http://localhost:5173/signin", "_self");
        if (token == null){
        }
      }
      // history('/signin');
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
        <Navbar expand="lg">
          <Container className="nav-container">
              <Navbar.Brand href="#home">
                <img src={logo_nav} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="menu-tengah">
                  <NavLink  to="/" className="nav-link" id="nav-menu" >Home</NavLink>
                  <NavLink to="/course" className="nav-link" id="nav-menu" >Course</NavLink>
                  <NavLink to="/mentor" className="nav-link" id="nav-menu" >Mentor</NavLink>
                  <NavLink to="/article" className="nav-link"  id="nav-menu">Article</NavLink>
                </Nav>
                <Nav className="menu-kanan">
                {userData ? (
                <NavDropdown title={`Welcome ${userData.name}`} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={handleLogout} href="#action/3.1">Logout</NavDropdown.Item>
                </NavDropdown>
              ) : null}
                  <img src={icon_profile} alt="" />
                </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default NavigationIn;