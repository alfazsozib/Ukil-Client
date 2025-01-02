import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllArticles = () => {

    const axiosPublic = useAxiosPublic();

    const { data: allArticles = {}, refetch } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => {
            const res = await axiosPublic.get('/articles');

            return res.data;
        }
    })

    
    const articles = allArticles?.articles || [];
    
    console.log(articles);
    
    return [articles, refetch];
};

export default useAllArticles;