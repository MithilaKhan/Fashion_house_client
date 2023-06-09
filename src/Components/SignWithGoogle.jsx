import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";


const SignWithGoogle = () => {
    const {signWithGoogle} = useContext(AuthContext)
    const handleGoogleBtn =()=>{
        signWithGoogle()
        .then(result => {

            const loggedUser = result.user;
            console.log(loggedUser);
            
          })
          .catch(error => console.log(error))
    }
    return (
        <div>
             <div>
              <div className="divider">OR</div>
              <div className="w-full text-center m-6 mt-0 ms-0 ">
              <button onClick={handleGoogleBtn} className="btn btn-circle btn-outline text-orange-600 hover:bg-purple-300 ">
  <FaGoogle/>
</button>
              </div>
        </div>
        </div>
    );
};

export default SignWithGoogle;