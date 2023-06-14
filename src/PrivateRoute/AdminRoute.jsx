
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { ClockLoader } from 'react-spinners';
const override = {
display:"block",
margin:"auto",
borderColor:"red"
}
const AdminRoute = ({children}) => {
// console.log(location)
const {user, loading} = useAuth();
const [isAdmin, isAdminLoading] = useAdmin();
const location = useLocation();

if(loading || isAdminLoading){
 return (
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

if(user && isAdmin){
return children;
}
  return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default AdminRoute;