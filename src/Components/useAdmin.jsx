
import { useQuery } from "@tanstack/react-query";
import AuthProvider, { AuthContext } from "../AuthProvider/AuthProvider";
// import useAxiosSecure from "./UseAxiosSecure";


const useAdmin = () => {
    const {user} = AuthProvider(AuthContext)
    // const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user/admin/${user?.email}`);
            console.log('is admin response', res)
            return res.json();
            // const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            // console.log('is admin response', res)
            // return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;