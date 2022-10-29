import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput} from 'mdb-react-ui-kit';
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
  
   await axios.post('http://localhost:3002/products/login',credentials).then((resp)=>{
        
        localStorage.setItem('token',resp.data)
    }).catch(err=>console.log(err))
    navigate('/products')
  }
  
  return(
   
    <MDBContainer  fluid className="p-3 my-5 h-custom">
      <MDBRow>
      <MDBCol col='4' md='6'>
        
      <h1 className='h1'>Please Log In</h1>
      
      
      <MDBInput wrapperClass='mb-4' label='Email address or Username' id='formControlLg' type='email' size="lg"
      onChange={e =>  {
        if(e.target.value.includes('@')){setcredantial({...credentials,email:e.target.value})}
         else{setcredantial({...credentials,username:e.target.value})} }}/>
         
         <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={e => setcredantial({...credentials,password:e.target.value})}/>
         <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        
  )
}