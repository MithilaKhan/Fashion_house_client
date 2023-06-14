import React, { useEffect, useState } from 'react';
// import PopularClassCard from '../PopularClassCard/PopularClassCard';
import SectionTitle from '../../../Component/SectionTitle';
import PopularClassCard from '../PopularClassCard/PopularClassCard';

const PopularClasses = () => {
const [popularClass,setPopularClass] = useState([]);
useEffect(()=>{
fetch(`https://fashion-design-server.vercel.app/popularClass/approved`)
.then(res=>res.json())
.then(data=>setPopularClass(data))

},[])
  return (
    <div className="my-10">
<SectionTitle heading='Popular Classes' subHeading="Popular Class Information">

</SectionTitle>
<div className='grid grid-cols-1  md:grid-cols-3   lg:grid-cols-3 gap-8  mx-auto  xs:w-xl sm:w-xl xs:w-full md:max-w-full lg:max-w-screen-xl'>
      {
popularClass.map(classes=><PopularClassCard key={classes._id} classes={classes}></PopularClassCard>)
}
    </div>
</div>
  );
};

export default PopularClasses;