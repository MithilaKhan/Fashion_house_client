import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";



const UseAllUser = () => {
const [axiosSecure] = useAxiosSecure()
    const { refetch, data: users=[] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await axiosSecure("/user")
            
            return response.data
            // const response = await fetch("http://localhost:5000/user")
            
            // return response.json()
          },
      })
    return [users , refetch ]

};

export default UseAllUser;