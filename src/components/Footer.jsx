import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-section' >
      <Container className='footer-container'>
        <Row className='footer-row'>
          <Col lg={4} className='footer-desc' >
            <img src="/src/assets/logo-white.png" alt="logo-footer" />
            <p>Remedial merupakan program yang Serrum lakukan 
              dengan melibatkan murid SMA (pilihan) di Jakarta 
              dan sekitarnya yang berfokus pada pola menggali 
              minat siswa dalam mencari pengetahuan sesuai dengan 
              konteks anak dan zamannya. Dengan metode saling 
              silang informasi yang menghasilkan pengetahuan 
              dan pendekatan seni dan literasi.</p>
          </Col>
          <Col lg={6}>
            
              <Col lg={4} className='footer-menu'>
                <h5>Discover</h5>
                <ul className='footer-list-menu' >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/course">Course</Link>
                  </li>
                  <li>
                    <Link to="/mentor">Mentor</Link>
                  </li>
                  <li>
                    <Link to="/article">Article</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={4} className='footer-menu'>
                <h5>Resources</h5>
                  <ul className='footer-list-menu'>
                    <li>
                      <Link to="/">Download</Link>
                    </li>
                    <li>
                      <Link to="/">Help Center</Link>
                    </li>
                    <li>
                      <Link to="">Events</Link>
                    </li>
                    <li>
                      <Link to="/">Guides</Link>
                    </li>
                    <li>
                      <Link to="/">Partner</Link>
                    </li>
                  </ul>
              </Col> 
              <Col lg={4} className='footer-menu'>
                <h5>Company</h5>
                  <ul className='footer-list-menu'>
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/course">Products</Link>
                    </li>
                  </ul>
              </Col>
            
          </Col>
          <Col lg={2}>
            <a href="https://www.facebook.com/">
            <FaFacebookF className="text-white fs-5 mx-2" />
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitter className="text-white fs-5 mx-2" />
            </a>
            <a href="https://www.youtube.com/">
              <FaYoutube className="text-white fs-5 mx-2" />
            </a>
            <br/>
            <a href="https://www.linkedin.com/">
              <FaLinkedin className="text-white fs-5 mx-2" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="text-white fs-5 mx-2" />
            </a>
          </Col>
        </Row>
      </Container>
      <hr style={{ borderColor: 'white' }} />
      <Container fluid>
         <Row className="copytext">
           <Col>
             <p className="text-white text-center pt-3">
               EduArt - &copy; 2023 All Rights Reserved
             </p>
           </Col>
         </Row>
      </Container>
    </div>
    
  );
}

export default Footer;
