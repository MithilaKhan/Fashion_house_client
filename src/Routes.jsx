import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Main from "./Provider/Main";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import ManageUser from "./Pages/DashBoard/ManageUser/ManageUser";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path:"login" ,
            element:<Login/>
        },
        {
            path:"register" ,
            element:<Register/>
        } ,
        
        
      ],
    },
    {
      path:"/dashBoard" ,
      element:  <DashBoard/>  ,
      // errorElement: <ErrorPage />,
      children: [
        {
          path:"manageUser" ,
          element: <ManageUser/>
        } ,
       

    ]

    }
  ]);



export default router;