import React from 'react';
import { useQuery } from '@tanstack/react-query'
import InstructorsCard from '../InstructorsCard/InstructorsCard';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';


const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [] } = useQuery({
    queryKey: ['instructors'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allInstructors/instructor`);
      return res.data;
    },
  })
  console.log(instructors);
  return (
    <div className='my-10'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3  lg:grid-cols-3 justify-items-center'>
        {
          instructors.map(instructor => <InstructorsCard instructor={instructor} key={instructor._id}></InstructorsCard>)
        }
      </div>
    </div>
  );
};

export default Instructors;