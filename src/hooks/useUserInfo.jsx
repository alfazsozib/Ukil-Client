import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUserInfo = () => {

    const axiosSecure = useAxiosSecure();

    const { data: userInfo = {} , refetch} = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${localStorage.email}`);

            return res.data;
        }
    })

    // console.log(userInfo);

    
    // Ensure userInfo is not undefined before destructuring
    const user = userInfo?.user || [];
    const userRequests = userInfo?.userRequests || [];
    
    console.log(user);
    console.log(userRequests);

    return [user, userRequests, refetch];

    // return [user, refetch];
};

export default useUserInfo;