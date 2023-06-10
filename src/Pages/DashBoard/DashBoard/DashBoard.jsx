import { Link } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {/* TODO:CSS AND USING ICON FORM 12  */}
            <li><Link>Sidebar Item 1</Link></li>
            <li><Link>Sidebar Item 2</Link></li>
            <div className="divider">OR</div>
            <li><Link to="/">Home</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;