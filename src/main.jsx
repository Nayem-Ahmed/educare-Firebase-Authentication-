import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import Authprovider from './Provider/Authprovider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
    <ToastContainer></ToastContainer>
   <RouterProvider router={router}></RouterProvider>
   </Authprovider>
  </React.StrictMode>,
)
