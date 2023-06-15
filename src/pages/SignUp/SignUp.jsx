import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './SignUp.css'
import React,{useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const [msg, setMsg] = useState('');

    const Register = async(e) => {
        e.preventDefault();
        try {
            await axios.post('https://be5finalproject-production.up.railway.app/register', {
                name: name,
                email: email,
                password: password,
            });
            history("/SignIn");
        } catch (error) {
            if (error.response){
                setMsg(console.log(error.response.data.msg));
            }
        }
    }
    return(
        
            <Container className="SignUp" >
                <Row className="signup-row">
                    <Col className="signup-col" >
                        <h1>Create your Account here !</h1>
                        <p>Please enter your detail</p>
                        <Form onSubmit={Register}>
                            <p className="has-text-centered">{msg}</p>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name here" value={name}
                            onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email here" value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password here"  value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button type="submit" className="register-button">
                                Register
                            </Button>
                            <p>Already have an account ? <Link to={"/signin"}>Login</Link> </p>
                        </Form>
                    </Col>
                    
                    <Col className="signup-img-col">
                    <img src="https://stories.freepiklabs.com/api/vectors/sign-up/pana/render?color=F7D060FF&background=complete" alt="register-img" />
                    <h3>"Register now and enjoy access to our exciting features and services!"</h3>
                    </Col>
                </Row>
            </Container>
    
    )
}

export default SignUp