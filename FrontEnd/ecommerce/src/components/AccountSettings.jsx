import React, { useState } from "react";
import cookie from 'react-cookie'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 const AccountSettings = () => {
    const navigate=useNavigate()
  const [data , setdata] = useState([]);
  const [credentials, setcredantial] = useState({email:'',password:'',username:'',id:''})
  
  
  
  const saveC=async()=>{
    
   await  axios.put('http://localhost:3002/products//Uuser',credentials).then(resp=> resp ? alert('your informations have been updated') : null ).catch(err=>console.log(err))

  }

axios.interceptors.request.use(
    config => {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  )
  
  useEffect(()=>{axios.post('http://localhost:3002/products/get-user').then(resp=>setcredantial({...credentials,id:resp.data.data.id})).catch(err=> err ? navigate('/login') : null)},[])

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>user name</Form.Label>
                <Form.Control required type="text" textholder="modifie your user name ?" onChange={(e)=>setcredantial({...credentials,username:e.target.value})} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>password</Form.Label>
                <Form.Control required type="password" onChange={(e)=>setcredantial({...credentials,password:e.target.value})} />
              </Form.Group>
            </Col>
          
          
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder={data.email} onChange={(e)=>setcredantial({...credentials,email:e.target.value})} />
              </Form.Group>
            </Col>
    
          <div className="mt-3">
            <Button variant="primary" type="submit" onClick={()=> saveC()}>Save All</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default AccountSettings