import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useInstructor from '../Hooks/useInstructor';
import { ClockLoader } from 'react-spinners';
const override = {
display:"block",
margin:"auto",
borderColor:"red"
}

const InstructorRoute = ({children}) => {
// console.log(location)
const {user, loading} = useAuth();
const [isInstructor, isInstructorLoading] = useInstructor();
const location = useLocation();

if(loading || isInstructorLoading){
 return(
   <div className=" mt-12">
        <ClockLoader
          cssOverride={override}
          size={150}
          color={"#123abc"}
          loading={loading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
)
}

if(user && isInstructor){
return children;
}
  return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default InstructorRoute;