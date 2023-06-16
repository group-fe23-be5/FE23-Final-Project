import { Card, Container, Row, Col, Button} from "react-bootstrap"
import './MetodePembayaran.css'
import { useNavigate, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MetodePembayaran(){
    


    const { id } = useParams();
    const token = localStorage.getItem('token');

    const [kursusId, setKursusId] = useState(null);
    const [payment, setPayment] = useState(null);


    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get(`https://be5finalproject-production.up.railway.app/payment`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.data) {
                    setPayment(response.data);
                }
            } catch (error) {
                console.error('Error fetching payment:', error);
            }
        };

        fetchPayment();
    }, [])

  useEffect(() => {
    const fetchKursusId = async () => {
      try {
        const response = await axios.get(`https://be5finalproject-production.up.railway.app/kursus/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data) {
          setKursusId(response.data);
        }
      } catch (error) {
        console.error('Error fetching KursusId:', error);
      }
    };

    fetchKursusId();
  }, [id]);

  const navigate = useNavigate();
    const onClickVa = (idPayment) => {
        navigate(`/virtualAccount/${idPayment}`)
      }

  if (!kursusId || !payment) {
    return <div>Loading...</div>;
  }

    return(
        <div className="payment-method-page">
            <Container>
                <Col className="invoice-title">
                    <h1 className="text-white text-center m-2">Draft Invoice</h1>
                </Col>
                <Row className="justify-content-md-center">
                    <Col lg={7} md="auto">
                        <Card className="payment-method">
                            <Card.Title>{`Paket ${kursusId.judul}`}</Card.Title>
                            <Card.Body className="payment-method">
                                <Row className="total-pm">
                                    <Col>
                                        <h5>Total Harga</h5>
                                    </Col>
                                    <Col className="price">
                                        <p>{`Rp. ${kursusId.harga}`}</p>
                                    </Col>
                                    <hr/>
                                </Row>
                                {/* <Row className="payment-option">
                                    <h5 className="payment-sub">Minimarket</h5>
                                    <p>Transaksi di minimarket terdekat</p>
                                        <Button className="payment-option" size="lg">
                                            <img src="/src/assets/icon-indomaret.png" alt="icon" />
                                            <p className="payment-option">Indomaret </p>
                                        </Button>
                                        <Button className="payment-option" size="lg">
                                            <img src="/src/assets/icon-alfamart.png" alt="icon"/>
                                            <p className="payment-option">Alfamart</p>
                                        </Button>
                                </Row> */}
                                <Row className="payment-option" key={payment.idPayment}>
                                    <h5 className="payment-sub">Menggunakan Bank dan E-Wallet Lebih Mudah</h5>
                                    <p>Dengan kode unik, semuanya lebih cepat</p>
                                    {payment.map((payment) => (
                                        <Button className="payment-option" size="lg" onClick={() => onClickVa(payment.idPayment)}>
                                        {/* <img src="/src/assets/icon-bca.png" alt="icon" /> */}
                                        <p className="payment-option">{payment.metode} </p>
                                    </Button>
                                        // <Link to={`/virtualAccount/${payment.idPayment}`} >
                                            
                                        // </Link>
                                    ))} 
                                </Row> 
                               
                                {/* <Row className="payment-option">
                                    <h5 className="payment-sub">E-Money</h5>
                                    <p>Pembayaran terhubung langsung dengan aplikasi e-wallet kamu</p>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-gopay.png" alt="icon" />
                                        <p className="payment-option">Gopay </p>
                                    </Button>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-dana.png" alt="icon"/>
                                        <p className="payment-option">Dana</p>
                                    </Button>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-ovo.png" alt="icon" />
                                        <p className="payment-option">OVO </p>
                                    </Button>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-flazz.png" alt="icon"/>
                                        <p className="payment-option">Flazz</p>
                                    </Button>
                                </Row>    */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </div>
        
    )
}

export default MetodePembayaran