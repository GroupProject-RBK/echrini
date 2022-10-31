import {Link, NavLink} from 'react-router-dom';
import Dropdown from "./pages/Dropdown"
import Account from './pages/Account';
import Search from './pages/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Grid from "@mui/material/Grid";
const Header = () => {

  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

          <div className='logo'>
            <Link to='index element' className='brand'>Echrini</Link>
          </div>
          <div>
              <Dropdown/>
            </div>
          <div>
            <Search/>
          </div>
          

          <nav className='nav nav-pills'>
          
            
            <NavLink to='index element' 
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Home</NavLink>
            <NavLink to='about'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >About</NavLink>
            <NavLink to='products'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Products</NavLink>
            
            {localStorage.getItem("token") ? 
            <NavLink to='add'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Add a Product</NavLink> : null
          }
            <div>
              {localStorage.getItem("token") ? <Account/> : null}
              
            </div>
            <div><NavLink to="Cart"><ShoppingCartCheckoutIcon/></NavLink></div>
            <br></br>           
          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header