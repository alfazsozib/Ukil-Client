import ArticleByAdvocateCard from "../../components/cards/ArticleByAdvocateCard";
import useAdvocateDetailsById from "../../hooks/useAdvocateDetailsById";

const ArticlesTab = ({ id }) => {

    const [, articles] = useAdvocateDetailsById(id);

    return (
        <div className="my-20 space-y-20">
            {
                articles ? articles.map((article, idx) => (
                    <ArticleByAdvocateCard key={idx} article={article} />
                ))
                    : <div>
                        <h1 className="text-3xl font-bold text-slate-600 text-center">No Article found</h1>
                    </div>
            }
        </div>
    );
};

export default ArticlesTab;