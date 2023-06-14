import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import { Slide } from 'react-awesome-reveal';

const ClassesCard = ({ singleClass }) => {
  const { _id, name, image, student, instructor, seats, price } = singleClass;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [disabled, setDisabled] = useState(false);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();


  const handleAddClass = add => {

    setDisabled(true)

    if (user && user.email) {
      const selectClasses = { selectClassId: _id, name, image, instructor, seats, price, email: user?.email }
      console.log(selectClasses);
      fetch('https://fashion-design-server.vercel.app/selectClass', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(selectClasses)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Your class selected',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please Login First',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }
  }

  return (
    <div className={`card lg:w-96 md:w-80    shadow-xl ${seats === 0 ? 'bg-red-300 text-black border-solid border-2 border-red-600' : 'bg-base-200'}`}>
      <figure className="px-10 pt-10 ">
        <img src={image} alt="Shoes" className="rounded-xl h-60 w-72  transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in" />
      </figure>
      <Slide>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Class Name:{name}</h2>
          <p> Instructor: {instructor}.</p>
          <p>Enrolled Student: {student}.</p>
          <div className='flex gap-3'>
            <p>Seats: {seats}.</p>
            <p> Price: {price}.</p>
          </div>
          <div className="card-actions">
           
            {isAdmin || isInstructor || seats === 0 ? (
              <>
                <button
                  disabled
                  onClick={handleAddClass}
                  className='btn btn-sm bg-gradient-to-r from-pink-600 to-purple-600 text-transparent  text-white'
                >
                  Select
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleAddClass}
                  className='btn btn-sm bg-gradient-to-r from-pink-600 to-purple-600 text-transparent  text-white'
                >
                  Select
                </button>
              </>
            )}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ClassesCard;