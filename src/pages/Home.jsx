import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css'
import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import writing_hero from "../assets/writing_hero.png";
import topi from "../assets/topi.png"
import books from "../assets/books.png"

function Home() {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const response = await axios.get("https://be5finalproject-production.up.railway.app/artikel");

        if (response.data){
          setArtikel(response.data);
        }
      } catch (error) {
        console.log(error);  
      }
    };

    fetchArtikel();
  }, [])

  const navigate = useNavigate();

  const onClickOfflineClass = () => {
    navigate('/course')
  }
  
  return (
    <div className="landing-page">
      <Container className="hero-section">
        <Row className='hero-row' >
          <Col className='hero-content'>
            <h1 className='hero-title' >Dapatkan Edukasi Melalui Remedial !</h1>
            <p className='hero-desc' >Wadah bagi Anda untuk menemukan dan mengembangkan minat, potensi, serta bakat Anda dengan saling silang informasi yang menghasilkan pengetahuan dan pendekatan seni maupun literasi</p>
            <Button className='hero-cta-button'>Get Started</Button>
          </Col>
          <Col>
            <img className='hero-img' src={writing_hero} alt="hero-img" />
          </Col>
        </Row>
      </Container>

      <Container className='info-section' >
        <Row>
          <Col className='info-col'>
            <img src={topi} alt="student" />
            <div className="info-detail">
              <h2>100+</h2>
              <p>Total Siswa</p>
            </div>
          </Col>
          <Col className='info-col'>
            <img src={books} alt="course" />
            <div className="info-detail">
              <h2>5+</h2>
              <p>Total Pembelajaran</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='class-section'>
        <h1 className='class-title' >Produk Pemberlajar Kami</h1>
        <p className='class-title desc' >Kami menyediakan kursus online dan offline yang dirancang untuk mempelajari suatu subjek atau keterampilan tertentu.</p>
        <Row className='class-row'>
          <Col className='class-col' >
            <Card className='class-card' >
              <Card.Img variant="top" src="/src/assets/online_class.png" />
              <Card.Body>
                <Card.Title className='card-class-title'>Online Class</Card.Title>
                <Card.Text className='card-class-title'>
                  Kelas daring (dalam jaringan) diselenggarakan dengan menggunakan platform online meet
                </Card.Text>
                <hr className='class-separator'/>
                  <ul id="class-detail">
                    <li>
                      <img src="https://cdn-icons-png.flaticon.com/128/1756/1756784.png" className="class-detail-icon" />
                      <span>Berbagai bidang seni & literasi</span>
                    </li>
                    <li>
                      <img src="https://cdn-icons-png.flaticon.com/128/1584/1584808.png" className="class-detail-icon" />
                      <span>Waktu Fleksibel</span>
                    </li>
                    <li>
                      <img src="https://cdn-icons-png.flaticon.com/128/10292/10292181.png" className="class-detail-icon" />
                      <span>Modul Pembelajaran</span>
                    </li>
                    <li>
                      <img src="https://cdn-icons-png.flaticon.com/128/3374/3374371.png" className="class-detail-icon" />
                      <span>Sesi Mentoring secara daring</span>
                    </li>
                    <li>
                      <img src="https://cdn-icons-png.flaticon.com/128/3261/3261259.png" className="class-detail-icon" />
                      <span>Kuis</span>
                    </li>
                  </ul>
                  <hr/>
                  <h5 className='class-price' >Price : <span className='nom-price'>Rp20.000/month</span></h5>
                  <hr/>
                <Button className='card-class-button' onClick={onClickOfflineClass}>Mulai !</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='class-col'>
            <Card className='class-card'>
              <Card.Img variant="top" src="/src/assets/offline_class.jpg" />
              <Card.Body>
                <Card.Title className='card-class-title'>Offline Class</Card.Title>
                <Card.Text className='card-class-title'>
                Kelas luring (luar jaringan) dilakukan secara tatap muka atau di ruang kelas fisik.
                </Card.Text>
                <hr className='class-separator'/>
                <ul id="class-detail">
                  <li>
                    <img src="https://cdn-icons-png.flaticon.com/128/1756/1756784.png" className="class-detail-icon" />
                    <span>Berbagai bidang seni & literasi</span>
                  </li>
                  <li>
                    <img src="https://cdn-icons-png.flaticon.com/128/2669/2669764.png" className="class-detail-icon" />
                    <span>Waktu Terjadwal</span>
                  </li>
                  <li>
                    <img src="https://cdn-icons-png.flaticon.com/128/888/888034.png" className="class-detail-icon" />
                    <span>Modul Pembelajaran</span>
                  </li>
                  <li>
                    <img src="https://cdn-icons-png.flaticon.com/128/3050/3050431.png" className="class-detail-icon" />
                    <span>Pertemuan Rutin</span>
                  </li>
                  <li>
                    <img src="https://cdn-icons-png.flaticon.com/128/2991/2991377.png" className="class-detail-icon" />
                    <span>Games</span>
                  </li>
                </ul>
                <hr/>
                <h5 className='class-price' >Price : <span className='nom-price'> Rp50.000/month</span></h5>
                <hr/>
                <Button className='card-class-button' onClick={onClickOfflineClass}>Mulai !</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <Container className='article-section'>
        <h1 className='article-title' >Artikel Kami</h1>
        <p className='article-title desc'>Ruang di media yang memberikan kesempatan bagi para penulis amatir atau profesional untuk mempublikasikan hasil karya sastra mereka. Fitur ini memberikan kesempatan bagi penulis untuk menunjukkan kreativitas dan imajinasi mereka dalam bentuk cerpen, puisi, atau karya sastra lainnya.</p>
        <Row className='article-row'>
          <Col className='article-col' >
            <Card className='article-card' >
              <Card.Img variant="top" src="/src/assets/sangkar.png" />
              <Card.Body>
                <Card.Title className='card-article-title'>Sangkar - sangkar Pilu</Card.Title>
                <hr className='article-separator'/>
                <Card.Text className='card-article-title'>
                  untuk erina gita cantika duduk disini dipinggir air tak
                  bertuan buatku ingin menulis saja erina gita cantika jangan
                  cepat sedih jangan cepat merenung karena jiwamu selayaknya
                  hanya untuk berbahagia jangan cepat patah sebelum kau
                  melangkah tuhan buat hati bukan untuk disakiti dan bukan
                  berarti untuk tidak melangkah lebih jauh lagi yang terakhir…
                </Card.Text>
                <Link to="/ArticleContent">
                  <Button className='card-article-button'>Baca Selengkapnya...</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className='article-col' >
            <Card className='article-card' >
              <Card.Img variant="top" src="/src/assets/putus.png" />
              <Card.Body>
                <Card.Title className='card-article-title'>Cerita Putus Cinta</Card.Title>
                <hr className='article-separator'/>
                <Card.Text className='card-article-title'>
                  di atas kasur yang seperti samudra minuman keras aku tenggelam
                  menuju china, berjalan menuju amerika, dan tiada kamu kesepian
                  dan hanya mencari lentera bayangan malam yang mawar dan
                  durinya dipisahkan semenjak kita saling melempar kisah aku
                  melihat ribuan orang yang memakai pakaian dari serat kain
                  rindu tampaknya aku mengira, sebab rongganya membesar
                  perlahan-lahan sehingga membuat…
                </Card.Text>
                <Link to="/ArticleContent">
                  <Button className='card-article-button'>Baca Selengkapnya...</Button>
                </Link></Card.Body>
            </Card>
          </Col>
          <Col className='article-col' >
            <Card className='article-card' >
              <Card.Img variant="top" src="/src/assets/secarik.png" />
              <Card.Body>
                <Card.Title className='card-article-title'>Secarik Kertas</Card.Title>
                <hr className='article-separator'/>
                <Card.Text className='card-article-title'>
                  Diamku adalah sebait kata Yang takkan pernah bisa menjadi
                  paragraf, Aksaraku sepi, Sendu, Mengais pada senja yang ingin
                  terpejam. Sudut lampu kota serta langit gelap adalah senduku
                  Mereka seakan berbicara dalam alam bawah sadarku ‘untuk apa
                  bertahan sedangkan ia mencintai wanita lain?’
                </Card.Text>
                <Link to="/ArticleContent">
                  <Button className='card-article-button'>Baca Selengkapnya...</Button>
                </Link></Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}

<Container className='article-section'>
      <h1 className='article-title'>Artikel Kami</h1>
      <p className='article-title desc'>Ruang di media yang memberikan kesempatan bagi para penulis amatir atau profesional untuk mempublikasikan hasil karya sastra mereka. Fitur ini memberikan kesempatan bagi penulis untuk menunjukkan kreativitas dan imajinasi mereka dalam bentuk cerpen, puisi, atau karya sastra lainnya.</p>
      <Row className='article-row'>
        {artikel.map((article) => (
          <Col className='article-col' key={article.id_artikel}>
            <Card className='article-card'>
              <Card.Img variant="top" src={`/src/assets/artikel${article.id_artikel}.png`} />
              <Card.Body>
                <Card.Title className='card-article-title'>{article.judul}</Card.Title>
                <hr className='article-separator' />
                <Card.Text className='card-article-title'>
                  {article.content[0]}
                </Card.Text>
                <Link to={`/articleContent/${article.id_artikel}`}>
                  <Button className='card-article-button'>Baca Selengkapnya...</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    </div>
  );
}

export default Home;