import { Container, Row, Stack } from "react-bootstrap";
import './Article.css'
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArticleContent() {
  const { id } = useParams();
  console.log(`ini iddd ${id}`);

  const [artikel, setArtikel] = useState(null);

  useEffect(() => {
    // Fetch the article based on the "id" parameter
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://be5finalproject-production.up.railway.app/artikel/${id}`);
        if (response.data) {
          setArtikel(response.data);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!artikel) {
    // Display loading state or return null if desired
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(artikel.date).toLocaleDateString();

  return (
    <Container className="article-content-section">
      <Row className="article-title">
        <h2>{artikel.judul}</h2>
      </Row>
      <Row className="article-publish-detail">
        <Stack direction="horizontal" gap={3}>
          <div className="bg-warning rounded-circle">MS</div>
          <div className="me-auto author size-sm">{artikel.author}<br />speciality</div>
          <div className="article-date">{formattedDate}</div>
        </Stack>
      </Row>
      <Row className="article-cover"></Row>
      <Row className="article-content">
        <h6>{artikel.subJudul}</h6>
        {artikel.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Row>
      <hr />
      {/* <h6>
        judul
      </h6> */}
    </Container>
  );
}

export default ArticleContent;
