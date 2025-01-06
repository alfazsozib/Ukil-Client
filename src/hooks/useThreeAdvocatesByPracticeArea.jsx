import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useThreeAdvocatesByPracticeArea = () => {
    const axiosPublic = useAxiosPublic();

    const { data: threeAdvocatesByArea = {}, isLoading, refetch } = useQuery({
        queryKey: ['threeAdvocatesByPracticeArea'],
        queryFn: async () => {
            const res = await axiosPublic.get('/advocates-by-practice-area');
            return res.data;
        }
    });

    console.log("3 Advocates by area =", threeAdvocatesByArea);

    return [threeAdvocatesByArea, isLoading, refetch];
};

export default useThreeAdvocatesByPracticeArea;