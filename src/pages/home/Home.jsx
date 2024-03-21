import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'

 const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='container1'><Navbar/></div>
    </div>
  )
}

export default Home
