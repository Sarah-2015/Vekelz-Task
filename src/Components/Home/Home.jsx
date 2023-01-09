import React from 'react'
import  LineChart  from '../LineChart/LineChart';
import BarChar from '../BarChar/BarChar';
import DashboardTop from '../DashboardTop/DashboardTop';
import DashboardBottom from '../DashboardBottom/DashboardBottom';









export default function Home() {
  
 
  return (
    <>
    
    <DashboardTop/>
    <div className="d-flex flex-row  justify-content-between  py-3">
    
      <div className=' col-6 pe-2 '>
      <div className=' p-2 rounded-3 bg-white'>
        <BarChar/>
      
      </div>
    
      </div>
   
      <div className=" col-6 ps-2 ">
      <div className=' p-2 rounded-3 bg-white'>
      <LineChart/>
      </div>
      </div>
      
    </div>
    <DashboardBottom/>
    </>
  )
}





