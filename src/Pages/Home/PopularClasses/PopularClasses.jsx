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
<div className='grid sm:grid-cols-1  md:grid-cols-2   lg:grid-cols-3 gap-8    '>
      {
popularClass.map(classes=><PopularClassCard key={classes._id} classes={classes}></PopularClassCard>)
}
    </div>
</div>
  );
};

export default PopularClasses;