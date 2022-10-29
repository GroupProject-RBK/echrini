import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


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
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      
        <label>
          <p>mail</p>
          <input type="text" onChange={e =>  {setcredantial({...credentials,email:e.target.value})}}/>
        </label>
        <label>
          <p>Username</p>
          <input type="text" onChange={e =>  {setcredantial({...credentials,username:e.target.value})}}/>
        </label>
        <label>
          <p>Username Or mail</p>
          <input type="password" onChange={e => setcredantial({...credentials,password:e.target.value})}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setcredantial({...credentials,confirmP:e.target.value})}/>
        </label>
        <div>
          <button  onClick={()=>login()}>Submit</button>
        </div>
      
    </div>
  )
}