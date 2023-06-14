import React from 'react';
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import { FaBookOpen, FaBookmark, FaDollarSign, FaHome, FaUser, FaUserAlt, FaUserCircle, } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { user } = useAuth();
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  mx-5 flex flex-col justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-warning drawer-button lg:hidden ">Open drawer</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-purple-100 text-base-content rounded-md">
            <div className='divider'></div>
            {
              isAdmin ? <>

                <h1 className="text-center text-2xl font-semibold text-pink-600 my-4">~~ Admin Home ~~</h1>
                <img className="w-16 h-16 rounded-full mx-auto mb-4" src={user?.photoURL} alt="" />
                <h3 className="text-xl font-medium text-orange-700 text-center mb-3">Admin: {user?.displayName} </h3>


                <li className='text-black mb-4'>  <NavLink to="/dashboard/adminHome" > <FaHome className='w-6 h-6 text-black'></FaHome>  Admin Home </NavLink> </li>
                <li className='text-black mb-4'>  <NavLink to="/dashboard/manageClasses"> <FaBookOpen className='w-6 h-6'></FaBookOpen> Manage Classes </NavLink> </li>
                <li className='text-black mb-4'> <NavLink to="/dashboard/manageUsers"> <FaUserCircle className='w-6 h-6'></FaUserCircle > Manage Users </NavLink> </li>
              </>
                : isInstructor ? <>

                  <h1 className="text-center text-2xl font-semibold text-pink-400 my-4">~~ Instructor Home ~~</h1>
                  <img className="w-16 h-16 rounded-full mx-auto mb-4" src={user?.photoURL} alt="" />
                  <h3 className="text-xl font-medium text-orange-700 text-center mb-3">Instructor: {user?.displayName}</h3>

                  {/*  */}
                  <li className='text-black mb-4'> <NavLink to="/dashboard/addClass"> <FaBookmark className='w-6 h-6'></FaBookmark> Add A Class </NavLink> </li>
                  <li className='text-black mb-4'> <NavLink to="/dashboard/myClass"> <FaBookOpen className='w-6 h-6'></FaBookOpen> My Class </NavLink> </li>
                </> : <>

                  <h1 className="text-center text-2xl font-semibold text-pink-400 my-4">~~ Student Home ~~</h1>
                  <img className="w-16 h-16 rounded-full mx-auto mb-4" src={user?.photoURL} alt="" />
                  <h3 className="text-xl font-medium text-orange-700 text-center mb-3">Student: {user?.displayName}</h3>

                  <li className='text-black mb-4'> <NavLink to="/dashboard/mySelectClass"> <FaBookmark className='w-6 h-6'></FaBookmark> My Selected classes </NavLink> </li>
                  <li className='text-black mb-4'> <NavLink to="/dashboard/myEnrolledClass"> <FaBookOpen className='w-6 h-6'></FaBookOpen> My Enrolled classes </NavLink> </li>
                  <li className='text-black mb-4'> <NavLink to="/dashboard/paymentHistory"> <FaDollarSign className='w-6 h-6'></FaDollarSign> Payment History </NavLink> </li>
                </>
            }
            <div className='divider'></div>
            <li className='text-black mb-4'><NavLink to="/"> <FaHome className='w-6 h-6'></FaHome> Home </NavLink> </li>
            <li className='text-black mb-4'> <NavLink to="/allClasses"> <FaBookOpen className='w-6 h-6 '></FaBookOpen > All Classes</NavLink> </li>
            <li className='text-black mb-4'> <NavLink to="/instructors"> <FaUserAlt className='w-6 h-5'></FaUserAlt> All Instructors </NavLink> </li>
          </ul>

        </div>

      </div>
    </>
  );
};

export default Dashboard;