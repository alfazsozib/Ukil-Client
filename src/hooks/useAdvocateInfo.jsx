import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdvocateInfo = () => {

    const axiosSecure = useAxiosSecure();

    const { data: advocate = {} , refetch} = useQuery({
        queryKey: ['advocateInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/advocate?email=${localStorage.email}`);

            return res.data;
        }
    })

    console.log(advocate);

    return [advocate, refetch];
};

export default useAdvocateInfo;