import { Navigate, useLocation } from "react-router";

import AuthProvider, { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Components/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = AuthProvider(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;