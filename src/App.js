import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import MasterLayout from './Components/MasterLayout/MasterLayout';
import Booking from './Components/Booking/Booking';
import NotFound from './Components/NotFound/NotFound';


function App() {

  let routes= createHashRouter([{path:'', element: <MasterLayout /> , 
  children:[
    {index:true ,element: <Home /> },
    {path:"/booking" ,element:<Booking/>},
    {path:"*" ,element:<NotFound/>}   
  ]}])
  
  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
