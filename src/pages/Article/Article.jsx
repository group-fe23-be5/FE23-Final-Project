import { Container, Row, Col, Button, Card, Stack, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Article.css'
import { useApiContext } from '../../ApiContext';
import { useEffect } from "react";

function Article(){
    const articles = useApiContext();

    // React.useEffect(() => {
    //     fetchData();
    //   }, []);

    useEffect(() =>{
      const token = localStorage.getItem('token');
      console.log(`printttttt ${token}`);
    })
    return(
        
        <div className="article-page">
            <Container className="article-hero-section">
                <Row className='article-hero-row' >
                    <Col lg={9} className='article-hero-content'>
                        <h3 className='article-hero-title' >
                        "Yuk Jelajahi pikiran kreatif siswa kami dan temukan inspirasi baru di Halaman-halaman karya literasi mereka!"
                        </h3>
                        <p className='article-hero-desc' >Baca sekarang dan mari berbagi kesenangan literasi bersama</p>
                    </Col>
                    <Col lg={3}>
                        <img className='article-hero-img' src="https://stories.freepiklabs.com/api/vectors/sharing-articles/amico/render?color=F49D1AFF&background=complete&hide=" alt="hero-img" />
                    </Col>
                </Row>
            </Container>

            <Container className="article-card-section">
                <Row className='article-row'>
                   
                    <div>
      {articles.map((article) => (
        <Col className='article-col' key={article.id_artikel}>
          <Card className='article-card'>
            <Card.Img variant='top' src={`https://be5finalproject-production.up.railway.app/assets/${article.filename}`} />
            <Card.Body>
              <Card.Title className='card-article-title'>
                {article.judul}
              </Card.Title>
              <hr className='article-separator' />
              <Card.Text className='card-article-title'>
                {article.subJudul}
              </Card.Text>
              <Link to={`/articleContent/${article.id_artikel}`}>
                <Button className='card-article-button'>
                  Baca Selengkapnya...
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
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
                            <Link to="/articleContent">
                                <Button className='card-article-button'>Baca Selengkapnya...</Button>
                            </Link>
                        </Card.Body>
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
                            <Link to="/articleContent">
                                <Button className='card-article-button'>Baca Selengkapnya...</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default Article