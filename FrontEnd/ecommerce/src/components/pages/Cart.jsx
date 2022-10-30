// import React,{useState,useEffect} from 'react'
// // import cartItems from '../cartItems'
// const Cart = () => {

//     console.log(cartItems)
// const [cartItems,setCartItems]=useState([])

// useEffect(()=>{setCartItems(window.localStorage);
//     console.log(cartItems)})
//   return (
//     <div className="card body">
//         <h1 className="card title">Your Cart</h1>
//         <div>{cartItems.map((e,i)=>{e=e.split(","); return(<div>
//         <ul className="list-group">
//             <div>
//   <li className="list-group-item">{e[1]}</li>
//   <div className='d-flex justify-content-between align-items-center'>
//                       <span>Price:<strong className='price'>{e[3]}$</strong></span>
//                       <button className='btn btn-primary btn-sm' onClick={()=>{localStorage.removeItem(`${e[0]}`)}}>REMOVE</button>
//                     </div>
//   </div>
//   </ul>
//   </div>)})}</div>
// <button type="button" className="btn btn-danger" onClick={()=>{localStorage.clear()}}>Remove All</button>
//     </div>
  
// )}

// export default Cart