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
    const civilLawyers = threeAdvocatesByArea?.Civil_Lawyer || [];
    const familyLawyers = threeAdvocatesByArea?.Family_Lawyer || [];
    const criminalLawyers = threeAdvocatesByArea?.Criminal_Lawyer || [];
    const corporateLawyers = threeAdvocatesByArea?.Corporate_Lawyer || [];

    return [civilLawyers, familyLawyers, criminalLawyers, corporateLawyers, isLoading, refetch];
};

export default useThreeAdvocatesByPracticeArea;