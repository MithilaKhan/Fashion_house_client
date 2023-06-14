
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/Router.jsx'
import {RouterProvider} from "react-router-dom";
// import AuthProvider from './Providers/AuithProvder';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Providers/AuthProviders';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className=' m-0 mx-auto'>
            <RouterProvider router={router} />
          </div>
    </QueryClientProvider>
</AuthProvider>
  </React.StrictMode>,
)



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import {
//    RouterProvider,
// } from "react-router-dom";
// import './index.css'
// import router from './Routes';
// import AuthProvider from './AuthProvider/AuthProvider';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// const queryClient = new QueryClient()

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//     <QueryClientProvider client={queryClient}>
//     <RouterProvider router={router} />
//     </QueryClientProvider>
    
//     </AuthProvider>
   
//   </React.StrictMode>,
// )
