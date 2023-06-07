import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Main from "./Provider/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);



export default router;