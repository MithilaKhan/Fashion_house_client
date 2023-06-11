import Swal from "sweetalert2";
import UseAllUser from "../../../Components/UseAllUser";



const ManageUser = () => {
    const [users , refetch] = UseAllUser()
    console.log(users);

    // make admin 
    const handleMakeAdmin = user =>{
      fetch(`http://localhost:5000/user/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    // make instructor 
    const handleMakeInstructor = user =>{
      console.log(user);
      fetch(`http://localhost:5000/user/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>E-mail</th>
        <th>role</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
        {
           users.map(( user , index) => <tr key={user._id}>
            <th>{index +1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role === 'admin' ?"admin" : <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm bg-gradient-to-r from-pink-600 to-purple-600 text-transparent  text-white">Make Admin</button>}</td>

        <td>{user.role === "instructor" ? "instructor" : <button onClick={() => handleMakeInstructor(user)} className="btn btn-sm bg-gradient-to-r from-pink-600 to-purple-600 text-transparent  text-white">Make Instructor</button>}</td>
           </tr>) 
        }
        
     
  
     
    </tbody>
  </table>
</div>
    );
};

export default ManageUser;