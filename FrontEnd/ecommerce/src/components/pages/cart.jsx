
import {  total,list,remove } from 'cart-localstorage' 
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Cart=()=>{
    const[id,setId]=useState('')
    const t=list()
    let navigate = useNavigate()
    const orde=()=>{
        
        t.length&&t.map((e,i)=>{
        
          axios.post('http://localhost:3002/products/buy',{id:e.id,idRest:id}).then((resp)=>{console.log(resp)}).catch((err)=>{
            console.log(err).then(()=>{}).then(()=>alert('congrats your purshase is done successfuly')).then(()=>{navigate('/products')})
          })
        })
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
    
      useEffect(()=>{axios.post('http://localhost:3002/products/get-user').then(resp=>setId(resp.data.data.id)).catch(err=> console.log(err))},[])



    return (
        <div className="cart">
         
         <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                   
                    <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">Product</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Price</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Remove</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {t.map((e)=>{
                                return(
                                    <tr>
                            <th scope="row" className="border-0">
                            <div className="p-2">
                                <img src={e.img} alt="" width="70" className="img-fluid rounded shadow-sm" />
                                <div className="ms-3 d-inline-block align-middle">
                                <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{e.name}</a></h5>
                                </div>
                            </div>
                            </th>
                            <td className="border-0 align-middle"><strong>{e.price} DT</strong></td>
                            <td className="border-0 align-middle"><strong onClick={()=>{remove(e.id)}}>❌</strong></td>
                            <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="bi bi-trash"></i></a></td>
                        </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="row py-5 p-4 bg-white rounded shadow-sm">
                <div className="col-lg-6">
                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary </div>
                    <div className="p-4">
                    <p className="mb-4"><em>Shipping and additional costs are calculated based on values you have entered.</em></p>
                    <ul className="list-unstyled mb-4">
                        <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                        <h5 className="fw-bold">{total()} DT</h5>
                        </li>
                    </ul><a href="#" className="btn btn-dark rounded-pill py-2 d-md-block" onClick={()=>{orde()}}>Procceed to checkout</a>
                    </div>
                </div>
                </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
      
    )
  }

export default Cart;