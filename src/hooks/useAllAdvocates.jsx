import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllAdvocates = () => {

    const axiosPublic = useAxiosPublic();

    const { data: advocates = {}, refetch } = useQuery({
        queryKey: ['advocates'],
        queryFn: async () => {
            const res = await axiosPublic.get('/advocates');

            return res.data;
        }
    })

    console.log(advocates);

    return [advocates, refetch];
};

export default useAllAdvocates;