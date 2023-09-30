import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Root from './Component/Root/Root.jsx';
import Login from './Component/Login/Login.jsx';
import Registration from './Component/Registration/Registration.jsx';
import HeroRegister from './Component/HeroRegister/HeroRegister';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
    {
      path:'/home',
      element:<Home></Home>      
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/registration',
      element:<Registration></Registration>
    },
    {
      path:'/heroRegistration',
      element:<HeroRegister></HeroRegister>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
