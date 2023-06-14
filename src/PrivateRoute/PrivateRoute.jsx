
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { ClockLoader } from 'react-spinners';

const override = {
display:"block",
margin:"auto",
borderColor:"red"
}

const PrivateRoute = ({children}) => {
const location = useLocation();
const {user,loading} = useAuth();

if(loading){
 return  (
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
     </div>)
}
if(user){
return children;
}
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;