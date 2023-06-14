import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MySelectClassRow = ({ index, handleDelete, selectClass }) => {
  const { image, email, name, instructor, seats, _id, price } = selectClass;
  // console.log(selectClass);  
  return (
    <>
      <tr>
        <th className='text-black bold'>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className=" rounded-lg w-20 h-16">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{instructor}</td>
        <td>{email}</td>
        <td>{seats}</td>
        <td>{price}</td>
        <th>
          <button onClick={() => handleDelete(_id)} className=" btn btn-ghost btn-md text-white hover:text-red-500  bg-red-500"> <FaTrash className='w-6 h-6'></FaTrash> </button>
        </th>
        <th>
         <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-primary btn-sm hover:bg-green-500'>Payment</button> </Link> 
        </th>
      </tr>
    </>
  );
};

export default MySelectClassRow;