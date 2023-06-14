import React from 'react';
import Banner from '../Banner/Banner'; 
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PopularClasses from '../PopularClasses/PopularClasses';
import AchieveMent from '../AchieveMent/AchieveMent'; 

const Home = () => {
  return (
    <div className='my-10'>
     <Banner></Banner>
<PopularClasses></PopularClasses>
<PopularInstructor></PopularInstructor>
<div className='mb-10'>
<AchieveMent></AchieveMent> 
</div>

</div>
  );
};

export default Home;