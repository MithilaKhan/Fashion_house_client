import { useQuery } from "@tanstack/react-query";



const UseAllUser = () => {

    const { refetch, data: users=[] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await fetch("http://localhost:5000/user")
            
            return response.json()
          },
      })
    return [users , refetch ]

};

export default UseAllUser;