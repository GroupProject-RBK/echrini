import { useEffect, useState } from 'react';
import { Link, useNavigate , useParams, useLocation } from 'react-router-dom'
import axios from "axios"


const SingleProduct = () => {
const [iduser,setIduser] = useState("")




  const navigate = useNavigate();
  const { productId } = useParams();
  const { pathname } = useLocation();
  const [data,setData] = useState([])
 console.log(data)
useEffect(()=>{
  axios.get(`http://localhost:3002/products/${productId}`).then((resp)=>{
   setData(resp.data)
  }).catch(err=>{
    console.log(err);
  })
},[])

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            {data.length ?
               (
              <div className="col-lg-7">
              <h1>{data[0].name}</h1>
            </div> ) : null
            }
            
            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  {/* <li className="breadcrumb-item"><Link to="index element">Home</Link></li> */}
                  <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                  {data && data.map((e,i)=>{
                    return (
                    <li className="breadcrumb-item active" aria-current="page">{e.name}</li> )
                  })}
                  
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          {data && data.map((e,i)=>{
            return (
 <div className="col-lg-5" key = {i}>
 <img src={e.img} alt="" className="img-fluid" />
</div> )
          })}
         {data && data.map((e,i)=>{
          return (
          <div className="col-lg-7" key = {i}>
            <h2>{e.name}</h2>
            <p className="price"><strong>{e.price}$</strong></p>
            <p>{e.description}</p>
           
            <br />
            <br />
            <br />
            <button className="btn btn-primary btn-sm" onClick={() => navigate(-1)}>BACK</button> &nbsp; 
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/products')}>NAVIGATE TO PRODUCTS</button> &nbsp;
            <button className="btn btn-primary btn-sm" onClick={()=> {localStorage.length ? localStorage.setItem(`${data[0].id}`,JSON.stringify(data) && navigate("/products")) : navigate("/login") }}> BUY </button> &nbsp; 
            
            <Link to="/products" className="btn btn-primary btn-sm">PRODUCTS</Link>
          </div> )
         })}
          
        </div>
      </div>
    </main>
  )
        }

export default SingleProduct;