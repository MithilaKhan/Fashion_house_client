import React, { useEffect, useState } from 'react';
import ClassesCard from '../ClassesCard/ClassesCard';

const AllClasses = () => {
const [allApprovedClasses,setAllApprovedClasses] = useState([]);
useEffect(()=>{
fetch(`http://localhost:5000/allApprovedClasses/approved`)
.then(res=>res.json())
.then(data=>{
console.log(data)
setAllApprovedClasses(data)
})
},[])

  return (
   <div className='my-10'>
<h2 className='text-center text-blue-600 text-3xl mb-5'>All Instructor Classes</h2>
 <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
      {
allApprovedClasses.map(singleClass=><ClassesCard singleClass={singleClass} key={singleClass._id}></ClassesCard> )
}
    </div>
</div>
  );
};

export default AllClasses;






// import { Outlet } from "react-router-dom";
// // import Navbar from '../Shared/Navbar/Navbar';
// // import Footer from '../Shared/Footer/Footer';
// import Navbar from "../../Shared/Navbar";
// import Footer from "../../Shared/Footer";

// const Main = () => {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <Outlet></Outlet>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Main;