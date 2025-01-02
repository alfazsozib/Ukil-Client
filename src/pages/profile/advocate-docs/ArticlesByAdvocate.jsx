import { useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import PostArticlesModal from "../../../components/modals/PostArticlesModal";
import useAdvocateInfo from "../../../hooks/useAdvocateInfo";
import ArticleByAdvocateCard from "../../../components/cards/ArticleByAdvocateCard";


const ArticlesByAdvocate = ({ id }) => {

    const [isOpen, setIsOpen] = useState(false);

    const [, , articles, refetch] = useAdvocateInfo();

    return (
        <>
            <div>
                <div>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-2 py-1 border border-[#2ba329] text-base font-medium text-[#2ba329] bg-[#d8f9d8] flex items-center gap-2">
                        <TfiWrite className="text-xl text-[#2ba329]" />
                        Post a New Article
                    </button>
                </div>
                <div className="my-20 space-y-20">
                    {
                        articles ? articles.map((article, idx) => (
                            <ArticleByAdvocateCard key={idx} article={article} />
                        ))
                            : <div>
                                <h1 className="text-3xl font-bold text-slate-600 text-center">Post your first Article</h1>
                            </div>
                    }
                </div>
            </div>

            {
                isOpen && <PostArticlesModal 
                isOpen={isOpen} 
                setIsOpen={setIsOpen} 
                id={id}
                refetch={refetch}
                >
                </PostArticlesModal>
            }
        </>
    );
};

export default ArticlesByAdvocate;