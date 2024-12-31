import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdvocateInfo = () => {

    const axiosSecure = useAxiosSecure();

    const { data: advocateInfo = {} , refetch} = useQuery({
        queryKey: ['advocateInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/advocate?email=${localStorage.email}`);

            return res.data;
        }
    })

    
    console.log(advocateInfo.advocate);
    console.log(advocateInfo.caseRequests);
    
    // Ensure advocateInfo is not undefined before destructuring
    const advocate = advocateInfo?.advocate || [];
    const caseRequests = advocateInfo?.caseRequests || [];

    return [advocate, caseRequests, refetch];
};

export default useAdvocateInfo;