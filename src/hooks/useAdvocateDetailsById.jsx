import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAdvocateDetailsById = (id) => {

    const axiosPublic = useAxiosPublic();

    const { data: advocate = {} , refetch} = useQuery({
        queryKey: ['advocateDetails'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/advocateDetail?id=${id}`);

            return res.data;
        }
    })

    console.log(advocate);

    return [advocate, refetch];
};

export default useAdvocateDetailsById;