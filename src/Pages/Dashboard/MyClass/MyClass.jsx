import React from 'react';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import MyClassCard from '../MyClassCard/MyClassCard';
import Swal from 'sweetalert2';
const MyClass = () => {
  const { loading, user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: myAllClass = [], error,refetch } = useQuery({
    queryKey: ['myAllClass', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myAllClass?email=${user?.email}`);
      return res.data;
    },
  })
  console.log(myAllClass);

 const handleDelete = id => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fashion-design-server.vercel.app/myClass/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )

            }
          })

      }
    })
  }

  return (
    <div className='w-full bg-pink-100 px-4 pt-4 pb-20 text-black mt-5'>
      {/* <SectionTitle subheading="Class Show Now" heading="All Select Class"></SectionTitle> */}
      <div className="overflow-x-auto mt-9">
        <table className="table border rounded">
          {/* head */}
          <thead className='font-semibold text-lg text-pink-700'>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Total Enrolled</th>
              <th>Feedback</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              myAllClass?.map((myClass, index) => <MyClassCard
                key={myClass._id}
                myClass={myClass}
                handleDelete={handleDelete}
                index={index}
              ></MyClassCard>)
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyClass;


