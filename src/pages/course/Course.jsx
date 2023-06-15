import { Button, Carousel, Col, Row } from "antd";
import { ArtDesign, HeroCourse } from "../../assets/index";
import "./course.css";
import { CardSection } from "./constants";
import { Card } from "antd";
import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Course = () => {
  const navigate = useNavigate();
  const [kursus, setKursus] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const fetchKursus = async () => {
      try {
        const response = await axios.get("https://be5finalproject-production.up.railway.app/kursus");
        if (response.data){
          setKursus(response.data);
        }
      } catch (error) {
        console.log(error); 
      }
    };

    fetchKursus();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const onClickMusicPoet = (paramLink) => {
    navigate(paramLink);
  };

  return (
    <>
      <Carousel autoplay effect="fade">
        <div className="carousel-item">
          <div className="carousel-image-container">
            <img src={HeroCourse} alt="Cover" className="carousel-image" />
            <div className="carousel-content">
              <div className="carousel-text">
                <h1 className="carousel-title">Course</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Add more carousel items if needed */}
      </Carousel>
      <Card>
        {kursus.map((kursus) => (
          <Row gutter={[16, 16]} justify="center" key={kursus.id_kursus}>
            <Col xs={24} xl={12}>
              <div className="img-cardClass">
                <img
                  src={`https://be5finalproject-production.up.railway.app/assets/${kursus.filename}`}
                  alt="cover"
                  style={{ maxWidth: "80%", maxHeight: "250px" }}
                />
              </div>
            </Col>
            <Col xs={24} xl={12}>
              <div className="cardClass-about">
                <h3>{kursus.judul}</h3>
                <p>{kursus.deskiripsi}</p>
              </div>
              {isAuthenticated ? (<Link to={`/kursus/${kursus.id_kursus}`}>
              <Button
                style={{
                  width: "50%",
                  margin: "20px auto",
                  height: 50,
                  backgroundColor: "#FB8C00",
                  fontWeight: "bold",
                  color: "white",
                  border: 0,
                }}
                // onClick={() => {
                //   onClickMusicPoet(data.link);
                // }}
              >
                Mulai
              </Button>
              </Link>) : (<Link to="/signin">
              <Button
                style={{
                  width: "50%",
                  margin: "20px auto",
                  height: 50,
                  backgroundColor: "#FB8C00",
                  fontWeight: "bold",
                  color: "white",
                  border: 0,
                }}
                // onClick={() => {
                //   onClickMusicPoet(data.link);
                // }}
              >
                Mulai
              </Button>
              </Link>)}
              
              
            </Col>
          </Row>
        ))}
      </Card>
    </>
  );
};

export default Course;
