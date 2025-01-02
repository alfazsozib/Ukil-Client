import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAdvocateDetailsById = (id) => {

    const axiosPublic = useAxiosPublic();

    const { data: advocateDetails = {} , refetch} = useQuery({
        queryKey: ['advocateDetails'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/advocateDetail?id=${id}`);

            return res.data;
        }
    })

    console.log(advocateDetails);

    const advocate = advocateDetails?.advocate || [];
    const articles = advocateDetails?.articles || [];

    return [advocate, articles, refetch];
};

export default useAdvocateDetailsById;