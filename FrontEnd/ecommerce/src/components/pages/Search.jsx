import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
const SearchBar = () => {
const [data,setData] = useState([])

    const [searchInput, setSearchInput] = useState("")
    const [id,setId] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:3002/products/getAll").then((resp)=>{
            setData(resp.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])

const filtered = data.filter(e=>{
    return  e.name === searchInput
})

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
     
      return (
        <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={searchInput} onChange={handleChange} />
  <button type="button" class="btn btn-outline-primary" onClick={()=>{
setId(filtered && filtered[0].id)
navigate(`/products/${filtered[0].id}`)
  }}>search</button>
</div>

      )
}
export default SearchBar