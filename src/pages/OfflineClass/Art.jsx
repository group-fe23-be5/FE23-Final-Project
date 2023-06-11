import { Col, Row, Card, Carousel } from "antd";
import "./offlineClass.css";
import {
  OfflineClassSection1,
  OfflineClassHeader,
  PemahamanNada,
  MusikTradisional,
} from "../../assets/index";
import { Typography } from "antd";
import { rewardData, timelineData } from "./constants";
import YouTube from "react-youtube";
import { Button } from "antd";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ADD_OFFLINE_CLASS, GET_OFFLINE_CLASS } from "./query";
// import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Art = () => {
  const { Title, Paragraph } = Typography;

  const navigate = useNavigate();
  const onCheckout = () => {
    navigate("/invoice");
  };
  //   const [register] = useMutation(ADD_OFFLINE_CLASS, {
  //     refetchQueries: [GET_OFFLINE_CLASS],
  //   });
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReadyVideo = (event) => {
    event.target.pauseVideo();
  };

  useEffect(() => {}, []);
  return (
    <>
      <Carousel>
        <div>
          <div className="carousel-content">
            <img
              className="carousel-image"
              src={OfflineClassHeader}
              alt="Cover"
            />
            <div className="carousel-text">
              <Title level={1} style={{ color: "white" }}>
                Program Art & Design
              </Title>
              <Paragraph className="carousel-description">
                Dalami Jiwamu Melalui Program Ini
              </Paragraph>
            </div>
          </div>
        </div>
        {/* Add more carousel items here */}
      </Carousel>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} xl={12}>
          <div
            className="img-offlineClass"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          >
            <img
              src={OfflineClassSection1}
              alt="Cover"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className="offlineClass-about">
            <h3 style={{ fontSize: "24px" }}>Tentang Program Ini</h3>
            <p style={{ fontSize: "14px" }}>
              Program pembelajaran Art & Design adalah sebuah kesempatan bagi
              peserta untuk mengembangkan kreativitas, pengetahuan, dan
              keterampilan dalam bidang seni dan desain. Dalam program ini,
              peserta akan mempelajari berbagai teknik seni dan desain, mulai
              dari menggambar dan melukis hingga desain grafis dan seni
              instalasi. Peserta akan diajarkan tentang prinsip-prinsip dasar
              seni dan desain, penggunaan warna, komposisi, perspektif, dan
              penggunaan berbagai media. Mereka juga akan belajar tentang
              sejarah seni dan desain, gaya-gaya seni terkenal, dan pengaruhnya
              dalam dunia modern
            </p>
          </div>
        </Col>
      </Row>

      <div className="reward-section">
        <h1 style={{ textAlign: "center" }}>Apa Yang Kamu Dapatkan?</h1>
        <Row gutter={[16, 16, 16]}>
          {rewardData.map((data, index) => (
            <Col xs={24} sm={12} md={12} key={index}>
              <div className="div-reward">
                <img
                  height={90}
                  src={data.image}
                  alt=""
                  style={{ marginRight: 20 }}
                />
                <p className="reward-text">
                  {data.title} <br />
                  <span className="reward-description">{data.description}</span>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="section2-offlineClass">
        <div className="section2-offlineClass-content">
          <p>
            Remedial merupakan program yang Serrum lakukan selama 6 bulan di
            awal tahun ajaran baru. Kegiatan ini melibatkan murid SMA (pilihan)
            di Jakarta dan sekitarnya yang berfokus pada pola menggali minat
            siswa dalam mencari pengetahuan sesuai dengan konteks anak dan
            zamannya. Dengan metode saling silang informasi yang menghasilkan
            pengetahuan dan pendekatan seni dan literasi. Setiap siswa memiliki
            ketertarikan individu dalam mencari tahu pengetahuan, secara tidak
            sadar telah dilakukan mereka.
          </p>
        </div>
        <div className="card-product-offlineClass">
          <Row justify="center" gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                className="box-shadow"
                hoverable
                style={{ width: "100%", margin: "16px" }}
                cover={<img alt="example" src={PemahamanNada} />}
              >
                <Title level={4}>Prinsip Prinsip Dasar</Title>
                <hr />
                <div className="content-offlineClass">
                  <ul>
                    <li>Modul Teknik Art & Design</li>
                    <li>Modul 1: Desain Grafis</li>
                    <li>Modul 2: Seni Instalasi</li>
                    <li>Belajar Mandiri</li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                className="box-shadow"
                hoverable
                style={{ width: "100%", margin: "16px" }}
                cover={<img alt="example" src={MusikTradisional} />}
              >
                <Title level={4}>Program Art & Design</Title>
                <hr />
                <div className="content-offlineClass">
                  <ul>
                    <li>Waktu Fleksibel</li>
                    <li>Modul Online</li>
                    <li>Kuis</li>
                    <li>Belajar Mandiri</li>
                  </ul>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="section-timeline">
          <h1>TIMELINE</h1>
          <Row gutter={[90]} style={{ marginTop: 50 }} justify="center">
            {timelineData.map((data, index) => (
              <Col key={index}>
                <div className="div-timeline">
                  <div className="dot">
                    <p
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 16,
                      }}
                    >
                      {data.no}
                    </p>
                  </div>
                  <p style={{ textAlign: "center" }} className="text-timeline">
                    {data.time} <br />
                    <p style={{ fontWeight: "normal", textAlign: "center" }}>
                      {" "}
                      {data.desc}
                    </p>
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="section-video">
        <h1>Video Pembelajaran</h1>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} xl={12}>
            <div className="video-offlineClass">
              <YouTube
                videoId="G21oS6d-DtA"
                opts={opts}
                onReady={onReadyVideo}
              />
              ;
            </div>
          </Col>
          <Col xs={24} xl={12}>
            <div className="video-offlineClass-tag">
              <label className="video-offlineClass-tag-title">
                Belajar Bersama untuk Mencapai Tujuan
              </label>
              <p>Tunggu apalagi? Segera daftarkan diri Anda!</p>
            </div>
            <Button
              style={{
                width: "50%",
                padding: 10,
                height: 50,
                backgroundColor: "#FB8C00",
                fontWeight: "bold",
                color: "white",
                border: 0,
              }}
              onClick={onCheckout}
            >
              Checkout Sekarang
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Art;
