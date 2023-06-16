import { Col, Container, Row, Image, Card, Button } from "react-bootstrap"
import './Mentor.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import woman from "../../assets/woman.jpg"


function Mentor(){
    const [mentor, setMentor] = useState([]);

    useEffect(() => {
        const fetchMentor = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get("https://be5finalproject-production.up.railway.app/mentor",{
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                if (response.data){
                    setMentor(response.data);
                }
            } catch (error) {
                console.log(error);  
            }
        };

        fetchMentor();
    }, []);

    return(
        <Container>
            <Row className="mentor-hero-section">
                <Col className="mentor-hero-left">
                    <h1 className="mentor-hero-desc">Temukan Mentor Sesuai yang Kamu Butuhkan Yuk !</h1>
                </Col>
                <Col className="mentor-hero-right">
                    <Image src={woman} className="mentor-hero-img"/>
                </Col>
            </Row>
            {/* <Row className="mentor-content">
                <Col lg={4} className="mentor-profil-col">
                    <Card className="mentor-profil-card">
                        <Card.Body className="mentor-profil">
                            <Col className="mentor-profil" xs={6} md={4}>
                                <Image src="/src/assets/woman1.jpg" className="mentor-profil-img" roundedCircle />
                                <h5 className="mentor-name">Kak Cantika</h5>
                                <p className="mentor-career">Penulis, Novelis, Pengarang</p>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8} className="mentor-desc-col">
                    <Card className="mentor-desc-card">
                        <Card.Body className="mentor-desc">
                                <h3>Cantika Candania</h3>
                                <p> Kak cantika ini berfokus pada seni tari sejak zaman dia SD. Cantika berasal dari Kupang, Nusa
                                    Tenggara Timur. Ia merupakan lulusan Fakultas Syari’ah dan Hukum UIN Sunan Kalijaga Yogyakarta
                                    pada
                                    prodi Hukum Tata Negara. Saat ini melanjutkan studinya di Fakultas Hukum Universitas Gadjah Mada
                                    pada prodi Magister Hukum Bisnis dan Kenegaraaan melalui Program Beasiswa LPDP dalam negeri.
                                    Cabang
                                    ilmu hukum yang digeluti adalah Seni Tari Tradisonal Jawa
                                </p>
                                <Button className='mentor-schedule-button'>Atur Jadwal</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mentor-content">
                <Col lg={4} className="mentor-profil-col">
                    <Card className="mentor-profil-card">
                        <Card.Body className="mentor-profil">
                            <Col className="mentor-profil" xs={6} md={4}>
                                <Image src="/src/assets/woman2.jpg" className="mentor-profil-img" roundedCircle />
                                <h5 className="mentor-name">Kak Rona</h5>
                                <p className="mentor-career">Musikus, Gitaris, Penari</p>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8} className="mentor-desc-col">
                    <Card className="mentor-desc-card">
                        <Card.Body className="mentor-desc">
                                <h3>Rona Maruko</h3>
                                <p> Kak Rona ini berfokus pada Puisi kontemporer yang sesuai dengan anak jaman now. Rpna berasal
                                    dari
                                    Yogyakarta. Ia merupakan lulusan Fakultas Psikologi yang mendalami ilmu bidang psikologi seni.
                                    Karya
                                    - karya yang telah Ia buat contohnya “ Diam Tolah Toleh Bergerak Salah Kabeh” yang sudah di copy
                                    jutaan kali
                                </p>
                                <Button className='mentor-schedule-button'>Atur Jadwal</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mentor-content">
                <Col lg={4} className="mentor-profil-col">
                    <Card className="mentor-profil-card">
                        <Card.Body className="mentor-profil">
                            <Col className="mentor-profil" xs={6} md={4}>
                                <Image src="/src/assets/men.jpg" className="mentor-profil-img" roundedCircle />
                                <h5 className="mentor-name">Kak Iman</h5>
                                <p className="mentor-career">Pianist, Pelukis, Penulis</p>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8} className="mentor-desc-col">
                    <Card className="mentor-desc-card">
                        <Card.Body className="mentor-desc">
                                <h3>Imanuel Santoso</h3>
                                <p>     Imanuel Santoso yang biasa dipanggil Iman atau Nami. Loh kok Nami? iya dari kata Iman
                                    dibalik
                                    hehe.
                                    Asal kakak ini dari Solo pas banget kota Seni dari Universitas Ahmad Dahlan jurusan Sastra
                                    Indonesia. Ia sudah suka menulis karangan sejak dari kecil bahkan dari SD.
                                </p>
                                <Button className='mentor-schedule-button'>Atur Jadwal</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
                 <Row className="mentor-content">
                    
                        {mentor.map((m) => (
                        <React.Fragment key={m.id_mentor}>
                            <Row className="mentor-content-list">
                            <Col lg={4} className="mentor-profil-col">
                            <Card className="mentor-profil-card">
                                <Card.Body className="mentor-profil">
                                <Col className="mentor-profil" xs={6} md={4}>
                                    <Image src={`/src/assets/mentor${m.id_mentor}.jpg`} className="mentor-profil-img" roundedCircle />
                                    <h5 className="mentor-name">{m.nama}</h5>
                                    <p className="mentor-career">{m.keahlian}</p>
                                </Col>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col lg={8} className="mentor-desc-col">
                            <Card className="mentor-desc-card">
                                <Card.Body className="mentor-desc">
                                <h3>{m.nama}</h3>
                                <p>{m.deskripsi}</p>
                                <Button className='mentor-schedule-button'>Atur Jadwal</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                            </Row>
                        </React.Fragment>
                        ))}
                </Row>
        </Container>
        
    )
}

export default Mentor