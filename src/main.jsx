import React from 'react'
import ReactDOM from 'react-dom/client'
import {
   RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>,
)
