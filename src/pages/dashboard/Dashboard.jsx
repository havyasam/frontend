import React, { useEffect,useState } from 'react'
import axios from 'axios';
import './Dashboard.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


 const Dashboard = () => {
    const [data, setData] = useState({
        productCount: 0,
        orderCount: 0,
        userCount: 0,
        storeCount: 0
      });
      useEffect(() => {
        
        axios.get('/api/v1/dashboard')
          .then(response => {
            
            const { productCount, orderCount, userCount, storeCount } = response.data;
            
            setData({ productCount, orderCount, userCount, storeCount });
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <div className='dash'>
    <Sidebar/>
    <div className='dashboard'><Navbar/>
    <div className='dashlist'>
        <div className="dash1">
            <div className='left'>
                <span className='score'>{data.productCount}</span>
                <span className='title'>Total Products</span>
            </div>
            <div className='right'>
                <ProductionQuantityLimitsIcon className='icn1'/>
                <span className='more'>More info</span>
            </div>
        </div>
        <div className="dash2">
        <div className='left'>
                <span className='score'>{data.orderCount}</span>
                <span className='title'>Total Orders</span>
            </div>
            <div className='right'>
                <BorderStyleIcon className='icn2'/>
                <span className='more'>More info</span>
            </div>
        </div>
        <div className="dash3">
        <div className='left'>
                <span className='score'>{data.userCount}</span>
                <span className='title'>Total Users</span>
            </div>
            <div className='right'>
                <PersonIcon className='icn3'/>
                <span className='more'>More info</span>
            </div>
        </div>
        <div className="dash4">
        <div className='left'>
                <span className='score'>{data.storeCount}</span>
                <span className='title'>Total Stores</span>
            </div>
            <div className='right'>
                <CategoryIcon className='icn4'/>
                <span className='more'>More info</span>
            </div>
        </div>
    </div>
    </div>
    
  </div>
  )
}
export default Dashboard
