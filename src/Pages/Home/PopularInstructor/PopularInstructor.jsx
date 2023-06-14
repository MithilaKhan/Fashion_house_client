
// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle';
import PopularInstructorCard from '../Home/PopularInstructorCard/PopularInstructorCard';
// import PopularInstructorCard from '../Home/PopularInstructorCard/PopularInstructorCard';

const PopularInstructor = () => {
const [popularInstructor, setPopularInstructor] = useState([]);
useEffect(()=>{
fetch(`https://fashion-design-server.vercel.app/popularInstructors/instructor`)
.then(res=>res.json())
.then(data=>{
console.log(data)
setPopularInstructor(data)
})

},[])

  return (
    <div className='my-10'>
      <SectionTitle heading="Popular Instructor" subHeading="Popular Instructor Information"></SectionTitle>
<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8  mx-auto  xs:w-xl w-full sm:w-xl xs:w-full md:max-w-full lg:max-w-screen-xl'>
{
popularInstructor.map(instructor=><PopularInstructorCard  instructor={instructor} key={instructor.name} ></PopularInstructorCard> )
}
</div>
</div>
  );
};

export default PopularInstructor;