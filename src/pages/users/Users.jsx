import React from 'react'
import './Users.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

 const Users = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='container1'><Navbar/>
      <h1>Manage <span>Users</span></h1>
      </div>
    </div>
  )
}
export default Users
