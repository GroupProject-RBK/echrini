import React,{useState,useEffect} from 'react'
//import cartItems from '../cartItems'
const Cart = () => {
   // console.log(cartItems)
//const [cartItems,setCartItems]=useState([])
//useEffect(()=>{setCartItems(window.localStorage);console.log(cartItems)})
  return (
    <div className="card body">
        <h1 className="card title">Your Cart</h1>
        <div>
        <ul className="list-group">
            <div>
  <li className="list-group-item">item1</li>
  <div className='d-flex justify-content-between align-items-center'>
                      <span>Price:<strong className='price'>39$</strong></span>
                      <button className='btn btn-primary btn-sm' onClick="">REMOVE</button>
                    </div>
  </div>
  <div>
  <li className="list-group-item">item2</li>
  <div className='d-flex justify-content-between align-items-center'>
                      <span>Price:<strong className='price'>69$</strong></span>
                      <button className='btn btn-primary btn-sm' onClick="">REMOVE</button>
                    </div>
  </div>
  <div>
  <li className="list-group-item">item3</li>
  <div className='d-flex justify-content-between align-items-center'>
                      <span>Price:<strong className='price'>49.99$</strong></span>
                      <button className='btn btn-primary btn-sm' onClick="">REMOVE</button>
                    </div>
  </div>
  <div>
  <li className="list-group-item">item4</li>
  <div className='d-flex justify-content-between align-items-center'>
                      <span>Price:<strong className='price'>55.95$</strong></span>
                      <button className='btn btn-primary btn-sm' onClick="">REMOVE</button>
                    </div>
  </div>
  <div>
  <li className="list-group-item">item5</li>
  <div className='d-flex justify-content-between align-items-center'>
                      <span>Price:<strong className='price'>13.00$</strong></span>
                      <button className='btn btn-primary btn-sm' onClick="">REMOVE</button>
                    </div>
  </div>
  </ul>
  </div>
<button type="button" className="btn btn-danger" onClick={()=>{localStorage.clear()}}>Remove All</button>
    </div>
  
)}

export default Cart