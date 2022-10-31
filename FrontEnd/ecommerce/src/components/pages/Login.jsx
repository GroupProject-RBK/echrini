import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
export default function Login() {
  const [credentials, setcredantial] = useState({email:'',password:'',username:''});
   let navigate = useNavigate()
  const login=async(e)=>{
    // e.preventDefault()
    if(credentials.email.length)
    {
        var t = credentials;
        delete t.username
        setcredantial(t)
    }
    else if (!credentials.email.length){
        var t = credentials;
        delete t.email
        setcredantial(t)
    }
  
   await axios.post('http://localhost:3002/products/login',credentials,{withCredentials:true}).then((resp)=>{
        
        localStorage.setItem('token',resp.data)
    }).catch(err=>console.log(err))
    navigate('/products')
  }
  
  return(
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Log In</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address or Username
                        </Form.Label>
                        <Form.Control  placeholder="..." onChange={e =>  {
        if(e.target.value.includes('@')){setcredantial({...credentials,email:e.target.value})}
         else{setcredantial({...credentials,username:e.target.value})} }}/>
                      </Form.Group>
​
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setcredantial({...credentials,password:e.target.value})}/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button onClick={()=>{
                          login()
                          navigate("/products")
                        }} variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a className="text-primary fw-bold" onClick={()=>{navigate('/register')}}>
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>    
  )
}