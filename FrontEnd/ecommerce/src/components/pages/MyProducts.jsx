import axios from 'axios';
import React, { useEffect ,useState} from 'react'

function MyProducts() {
    const [data,setData]=useState([])
    axios.interceptors.request.use(
        config => {
          config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
              return config;
          },
          error => {
              return Promise.reject(error);
          }
      )
    
    //   useEffect(()=>{
    //     var x
    //     const fetchData = async () =>{ await axios.post('http://localhost:3002/products/get-user').then(resp=> x=resp.data.data.id).catch(err=> console.log(err))}
        
    //     console.log(x)

    //      axios.post('http://localhost:3002/products/getAllBuys',{id:x}).then((resp)=>{setData(resp.data)}).catch(err=>{throw err})
    
    // },[])
    
    console.log(data)
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
                    <img src={JSON.parse(e.img)} className="img-thumbnail"/>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-titel'>{e.name}</h5>
                    <p className='card-text'>{e.description}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>Price:<strong className='price'> {e.price} $</strong></span>
                      {/* <Link className='btn btn-primary btn-sm' to={`/products/${e.id}`}>DETAILS &#8594;</Link> */}
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

export default MyProducts