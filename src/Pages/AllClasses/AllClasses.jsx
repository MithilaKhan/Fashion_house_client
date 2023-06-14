import React, { useEffect, useState } from 'react';
import ClassesCard from '../ClassesCard/ClassesCard';

const AllClasses = () => {
const [allApprovedClasses,setAllApprovedClasses] = useState([]);
useEffect(()=>{
fetch(`https://fashion-design-server.vercel.app/allApprovedClasses/approved`)
.then(res=>res.json())
.then(data=>{
console.log(data)
setAllApprovedClasses(data)
})
},[])

  return (
   <div className='my-10'>
<h2 className='text-center text-pink-600 text-3xl mb-8'>All Instructor Classes</h2>
 <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center'>
      {
allApprovedClasses.map(singleClass=><ClassesCard singleClass={singleClass} key={singleClass._id}></ClassesCard> )
}
    </div>
</div>
  );
};

export default AllClasses;
