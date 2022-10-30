
import React from 'react';
import {  total,list } from 'cart-localstorage' 
const Cart=()=>{

 const t=list()
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
                                <img src={JSON.parse(e.img)} alt="" width="70" className="img-fluid rounded shadow-sm" />
                                <div className="ms-3 d-inline-block align-middle">
                                <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{e.name}</a></h5>
                                </div>
                            </div>
                            </th>
                            <td className="border-0 align-middle"><strong>DT{e.price}</strong></td>
                            <td className="border-0 align-middle"><a href="#" className="text-dark"><i className="bi bi-trash"></i></a></td>
                        </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
                <div className="row py-5 p-4 bg-white rounded shadow-sm">
                <div className="col-lg-6">
                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary </div>
                    <div className="p-4">
                    <p className="mb-4"><em>Shipping and additional costs are calculated based on values you have entered.</em></p>
                    <ul className="list-unstyled mb-4">
                        <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                        <h5 className="fw-bold">DT{total()}</h5>
                        </li>
                    </ul><a href="#" className="btn btn-dark rounded-pill py-2 d-md-block">Procceed to checkout</a>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
      
    )
  }

export default Cart;