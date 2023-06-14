
import { Outlet } from "react-router-dom";
// import Navbar from '../Shared/Navbar/Navbar';
// import Footer from '../Shared/Footer/Footer';
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;