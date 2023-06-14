import React from 'react';

const PopularClassCard = ({ classes }) => {
  const { name, image, instructor, seats, price, student } = classes;
  return (
    <div className="card lg:w-96   w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 h-60">
        <img src={image} alt="Shoes" className="rounded-xl h-full transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name:{name}</h2>
        <p> Instructor: {instructor}.</p>
        <p>Enroll Student: {student}.</p>
        <div className='flex gap-3'>
          <p>Seats: {seats}.</p>
          <p> Price: {price}.</p>
        </div>
        {/* <div className="card-actions">
          <button className="btn bg-gradient-to-r from-pink-600 to-purple-600 text-transparent  text-white">Select</button>
        </div> */}
      </div>
    </div>

  );
};

export default PopularClassCard;