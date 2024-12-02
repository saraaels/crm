import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import Root from './Component/Root/Root';
import Login from './Component/Auth/Login/Login';
import Register from './Component/Auth/Register/Register';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home/Home';


function App() {
 
   
const router =createHashRouter([{
     path:'/',element:<Root/>,children:[
       {path:"/home",element:<Home/>},
       {path:"/dashboard",element:<Dashboard/>},
      
     
     ]    
 },
 {
   path: '/login',
   element: <Login />,
 },
 {
   path: '/reg',
   element: <Register />,
 },
 ])
   return (
     <>
    
   
     <RouterProvider router={router}>

     </RouterProvider>

     </>
   );


   
}

export default App;
