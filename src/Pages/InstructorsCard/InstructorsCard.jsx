import React from 'react';

const InstructorsCard = ({instructor}) => {
const {image,name,email} = instructor;
  return (
  <div className="card lg:w-96 md:w-96 w-full bg-base-100 shadow-xl">
  <figure className="px-10  pt-10  ">
    <img src= {image} alt="Shoes" className=" h-60 w-72 rounded-xl transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name}</h2>
    <p>Email: {email}</p>
    <div className="card-actions">
      <button className="btn btn-sm bg-gradient-to-r from-pink-600 to-purple-600 text-transparent  text-white">Favorite</button>
    </div>
  </div>
</div>
  );
};

export default InstructorsCard;