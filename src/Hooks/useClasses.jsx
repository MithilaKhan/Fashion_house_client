import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';

const useClasses = () => {
  const { user, loading } = useAuth();

  const {  data: classes = [],refetch } = useQuery({
    queryKey: ['classes'],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allClasses`);
      return res.json();
    },
  })
  return [classes, refetch]
};

export default useClasses;