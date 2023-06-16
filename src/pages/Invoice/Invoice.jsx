import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import './Invoice.css'
import { useNavigate, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Invoice() {
    const { id } = useParams();
    const [kursusId, setKursusId] = useState(null);


//     const navigate = useNavigate();

//   const onClickMetode = () => {
//     navigate(`/metodePembayaran/${id}`)
//   }

  useEffect(() => {
    // Fetch the article based on the "id" parameter
    const fetchKursusId = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://be5finalproject-production.up.railway.app/kursus/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(`ini kursus id ${response.data.judul}`)
        if (response.data) {
          setKursusId(response.data);
        }
      } catch (error) {
        console.error('Error fetching KursusId:', error);
      }
    };

    fetchKursusId();
  }, [id]);

  if (!kursusId) {
    // Display loading state or return null if desired
    return <div>Loading...</div>;
  }

  return (
    <section className="invoice">
      <Container>
        <Row>
          <Col className="invoice-title">
            <h1 className="text-white text-center m-5">Draft Invoice</h1>
          </Col>
        </Row>
        <Row className="invoice-content">
            <Col lg={7} className="paket-col">
                <Card className="paket-card">
                    <Card.Body>
                        <Card.Title className="paket-card-title">
                            {`Paket ${kursusId.judul}`}
                        </Card.Title>
                        <hr/>
                        <div className="detail-paket">
                        <h5>Detail Paket</h5>
                        <p>Paket sudah termasuk:</p>
                            <Row>
                                <Col lg={7}>
                                    <ul id="paket-detail">
                                        <li>
                                            <img src="https://cdn-icons-png.flaticon.com/256/2150/2150150.png" className="class-detail-icon" />
                                            <span>&gt;400rb latihan soal serta pembahasan</span>
                                        </li>
                                        <li>
                                            <img src="https://cdn-icons-png.flaticon.com/256/2150/2150150.png" className="class-detail-icon" />
                                            <span>Jadwal Belajar</span>
                                        </li>
                                        <li>
                                            <img src="https://cdn-icons-png.flaticon.com/256/2150/2150150.png" className="class-detail-icon" />
                                            <span>&gt;78rb video belajar premium</span>
                                        </li>
                                        <li>
                                            <img src="https://cdn-icons-png.flaticon.com/256/2150/2150150.png" className="class-detail-icon" />
                                            <span>Download materi offline</span>
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={5}>
                                    <ul id="paket-detail">
                                        <li>
                                            <img src="https://cdn-icons-png.flaticon.com/256/2150/2150150.png" className="class-detail-icon" />
                                            <span>Jadwal Belajar</span>
                                        </li>
                                        <li>
                                            <img src="https://cdn-icons-png.flaticon.com/256/2150/2150150.png" className="class-detail-icon" />
                                            <span>Donwload materi Online</span>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={5} className="pembayaran-col">
                <Card className="pembayaran-card">
                    <Card.Body>
                        <div className="diskon-section">
                            <h5>Gunakan Diskon</h5>
                            <h1>
                                <Badge>
                                    <h5><img src="https://cdn-icons-png.flaticon.com/256/8215/8215539.png" className="class-detail-icon"/> RemedialDiskon50Persen</h5>
                                </Badge>
                            </h1>
                        </div>
                        <div className="kupon-section">
                            <h5>Pilihan Kupon Lainya</h5>
                            <h1>
                                <Badge>
                                    <h5><img src="https://cdn-icons-png.flaticon.com/256/7646/7646924.png" className="class-detail-icon"/> RemedialDiskon50Persen <img src="/src/assets/right-arrow.png" className="class-detail-icon" /></h5>
                                </Badge>
                            </h1>
                        </div>
                        <div className="detailPembayaran-section">
                            <h5>Detail Pembayaran</h5>
                            <div className="detail-pembayaran">
                                <Row>
                                    <Col lg={7}>
                                        <p>Paket Offline Learning 3 Bulan</p>
                                    </Col>
                                    <Col lg={5}>
                                        <p className="price" >Rp 100.000</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={7}>
                                        <p>Diskon 50%</p>
                                    </Col>
                                    <Col lg={5}>
                                        <p className="price">- Rp 50.000</p>
                                    </Col>
                                </Row>
                            </div>
                            <hr/>
                            <Row className="total-harga-section">
                                <Col lg={7}>
                                <h5>Total Harga</h5>
                                </Col>
                                <Col lg={5}>
                                    <h6 className="price">Rp 50.000</h6>
                                </Col>
                            </Row>
                        </div>
                        <Link to={`/metodePembayaran/${id}`}>
                            <Button className='card-invoice-button' >Pilih Metode Pembayaran</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Invoice;
