import ArticlesCard from "../../components/cards/ArticlesCard";
import useAllArticles from "../../hooks/useAllArticles";

const ArticlesPage = () => {

    const [articles] = useAllArticles();

    return (
        <div className="container mx-auto my-10 space-y-28">
            <div>
                <h1 className="text-4xl font-light text-center">
                    Articles From Our Advocates <br /> That May Guide You
                </h1>
            </div>
            <div className="space-y-24">
                {
                    articles.map((article, idx) => (
                        <ArticlesCard key={idx} article={article} />
                    ))
                }
            </div>
        </div>
    );
};

export default ArticlesPage;