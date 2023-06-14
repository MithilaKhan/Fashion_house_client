

const MyEnrolledClassCard = ({enroll,index}) => {
    console.log(enroll);
    const {email,date,name,price,status} = enroll;
      return (
          <>
          <tr>
            <th className='text-black bold'>
              {index + 1}
            </th>
             {/* <td> */}
              {/* <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className=" rounded-lg w-20 h-16">
                    <img src={image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div> */}
            {/* </td> */}
            <td>{name}</td>
            <td>{date}</td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{status}</td>
          </tr>
        </>
       
      );
    };
    
    export default MyEnrolledClassCard;