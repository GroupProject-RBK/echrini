import axios from 'axios'
import react,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
function Tech() {
  const [data,setData]=useState([])
  const [check,setCheck]=useState(false)

  const checkF=()=>{
    setCheck(!check)
  }

  useEffect(()=>{axios.get('http://localhost:3002/products/getAll').then((resp)=>{setData(resp.data.filter(e=>{
    return e.category === "Technologies"
  }))}).catch(err=>{throw err})},[check])
  return (
    <main>
      <div className='pg-header'>
        <div className='container'>
       
          <div className='row align-item-center'></div>
          <nav>
            <ol className='breadcrumb justify-content-end'>
              {/* <li className='breadcrumb-item'>
                <Link to='index element'>Home</Link>
              </li> */}
              <li className='breadcrumb-item active'>Products</li>
            </ol>
          </nav>
            <h1>Products</h1>
        </div>
        <div className='col-lg-5'>
         
        </div>
      </div>
      <div className='container content'>
        <div className='row products-row'>
          {data.map((e,i)=>{
            return(
              <div id={e.id} className='col-lg-4' key={i}>
                <div className='card'>
                  <div className='img-warp'>
                    <img src={e.img}  className ="img-thumbnail"/>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-titel'>{e.name}</h5>
                    <p className='card-text'>{e.description}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>Price:<strong className='price'> {e.price} $</strong></span>
                      <Link className='btn btn-primary btn-sm' to={`/products/${e.id}`}>DETAILS &#8594;</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Tech