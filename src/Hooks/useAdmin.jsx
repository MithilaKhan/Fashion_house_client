import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";
const useAdmin = () =>{
const {user,loading} = useAuth();
const [axiosSecure] = useAxiosSecure();
const {data:isAdmin, isLoading:isAdminLoading} = useQuery({
queryKey:['isAdmin', user?.email],
enabled: !loading,
queryFn: async()=>{
const res = await axiosSecure.get(`/users/admin/${user.email}`)
return res.data.admin
}
});
return [isAdmin,isAdminLoading]
}
export default useAdmin