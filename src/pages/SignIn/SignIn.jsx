import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './SignIn.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import React,{useState} from 'react';


function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const [msg, setMsg] = useState('');

    const Login = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://be5finalproject-production.up.railway.app/login', {
                email: email,
                password: password,
            });
            localStorage.setItem('token', response.data.access_token);
            console.log(`ini tokennya ${response.data.access_token}`);
            if (response.data.code === 200){
                // history("/");
                window.open("https://eduart-fe23-be5.netlify.app/", "_self");
            }
        } catch (error) {
            if (error.response){
                setMsg(error.response.data.error);
                console.log(`ini error ${error.response.data.error}`)
            }
        }
    }

    return(
        
            <Container className="SignIn" >
                <Row className="signin-row">
                    <Col className="signin-col" >
                        <h1>Welcome Back !</h1>
                        <p>Please enter your detail</p>
                        <Form onSubmit={Login}>
                            <p className="has-text-centered">{msg}</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email here" value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password here" value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button type="submit" className="login-button">
                                Login
                            </Button>
                            <p>Don't have an account? <Link to={"/signup"}>Register</Link> </p>
                        </Form>
                    </Col>
                    
                    <Col className="signin-img-col">
                    <img src="https://stories.freepiklabs.com/api/vectors/tablet-login/amico/render?color=F7D060FF&background=complete" alt="register-img" />
                    <h3>"Login now and enjoy access to our exciting features and services!"</h3>
                    </Col>
                </Row>
            </Container>
    
    )
}

export default SignIn