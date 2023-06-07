import { Link } from "react-router-dom";

const Navbar = () => {
    const navbar = <>
    <li><Link>Home</Link></li>
        <li><Link>Instructors</Link> </li>
        <li><Link>Classes</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link></Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-orange-600 font-semibold">
        {navbar}
      </ul>
    </div>
    <a className=" upper-case font-bold text-3xl bg-gradient-to-r from-pink-600 from-10% via-orange-500 via-30% to-purple-600 to-90% text-transparent bg-clip-text italic">Fashion House</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-orange-600 font-semibold">
   {navbar}
    </ul>
  </div>
  {/* TODO: LOGIN TO ENROLL  */}
  <div className="navbar-end  ">
    <a className="btn bg-gradient-to-r from-pink-600 to-purple-600 text-transparent  text-white">Login Now</a>
  </div>
</div>
    );
};

export default Navbar;