

const MyEnrolledClassCard = ({enroll,index}) => {
    console.log(enroll);
    const {email,date,name,price,status} = enroll;
      return (
          <>
          <tr>
            <th className='text-black bold'>
              {index + 1}
            </th>
        
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