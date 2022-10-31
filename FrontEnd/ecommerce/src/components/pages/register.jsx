import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function Register() {
  const [credentials, setcredantial] = useState({email:'',password:'',username:'',confirmP:''});
  const [aler,setAler]=useState('')
   let navigate = useNavigate()

  const login=async()=>{
    var t=credentials
    if(credentials.password!==credentials.confirmP){alert('confirme your password')}
    else{
        delete t.confirmP
        setcredantial(t)
    // e.preventDefault()
   await axios.post('http://localhost:3002/products/register',credentials).then((resp)=>{setAler(resp.msg)}).catch(err=>{if(err.status===409){setAler(err.response.data.msg)}})
    
   await axios.post('http://localhost:3002/products/login',{email:credentials.email,password:credentials.password}).then((resp)=>{
        
    localStorage.setItem('token',resp.data)
    }).catch(err=>err.response.data.msg)
    if(localStorage.length){
    navigate('/products')}}
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
                <h2 className="fw-bold mb-2 text-uppercase ">Sign Up</h2>
                <div className="mb-3">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label className="text-center">
                       Username
                      </Form.Label>
                      <Form.Control type="username" placeholder="Enter username" onChange={e =>  {setcredantial({...credentials,username:e.target.value})}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                       Email
                      </Form.Label>
                      <Form.Control type="Email" placeholder="Enter email" onChange={e =>  {setcredantial({...credentials,email:e.target.value})}}/>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" onChange={e => setcredantial({...credentials,password:e.target.value})}/>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" onChange={e => setcredantial({...credentials,confirmP:e.target.value})}/>
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Sinup
                      </Button>
                    </div>
                  </Form>
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