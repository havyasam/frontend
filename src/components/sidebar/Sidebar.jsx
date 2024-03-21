import  './Sidebar.css'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import React from 'react'
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='admin'>STYLE SYNC</span>
            
        </div>
       

        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <li><Link to='/dashboard'><DashboardIcon className='icon'/><span>Dashboard</span></Link></li>
                <p className='title'>LIST</p>
                {/* <li><Link to='/users'><PersonIcon className='icon'/><span>Users</span></Link></li> */}
                <li><Link to='/brands'><BrandingWatermarkIcon className='icon'/><span>Brand</span></Link></li>
                <li><Link to='/stores'><LocalMallIcon className='icon'/><span>Store</span></Link></li>
                <li><Link to='/Orders'><BorderStyleIcon className='icon'/><span>Orders</span></Link></li>
                <li><Link to='/products'><ProductionQuantityLimitsIcon className='icon'/><span>Products</span></Link></li>
                <p className='title'>USERS</p>
                <li><SettingsIcon className='icon'/><span>Setting</span></li>
                <li><Link to='/logout'><LogoutIcon className='icon'/><span>Logout</span></Link></li>
    
            </ul>
        </div>

    </div>
  )
}
export default Sidebar