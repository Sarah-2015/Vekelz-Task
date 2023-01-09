
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Components/Home/Home';

import MasterLayout from './Components/MasterLayout/MasterLayout';
import Booking from './Components/Booking/Booking';


function App() {

  let routes= createBrowserRouter([{path:'', element: <MasterLayout /> , 
  children:[
    {index:true ,element: <Home /> },
    {path:"/booking" ,element:<Booking/>}
   
   
 

    
  ]}])
  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
