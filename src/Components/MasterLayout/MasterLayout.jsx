import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'




export default function MasterLayout() {
  return (
    <>
    <div className=' '>
    
    <Sidebar/>
    <Navbar/>
    <div className='left container   mt-5 pt-5 ps-5 pe-5  '>
    <Outlet/>
    </div>
    </div>
</>
  )
}
