
const ArticleByAdvocateCard = ({ article: art }) => {

    const { heading, article, postedAt, advocateName } = art;

    const formattedDate = new Date(postedAt).toISOString().split('T')[0];

    return (
        <article className="w-3/4 px-6 py-12 mx-auto space-y-16 bg-gray-100 text-gray-900 rounded-md">
            <div className="w-full mx-auto space-y-4">
                <h1 className="text-4xl font-bold leading-none">{heading}</h1>
                <p className="text-sm text-gray-600 space-x-3">
                    by
                    <span className="hover:underline text-[#2ba329] ml-2">{advocateName}</span>
                    <span>on {formattedDate}</span>
                </p>
            </div>
            <div className="text-gray-800">
                <p>{article}</p>
            </div>
        </article>
    );
};

export default ArticleByAdvocateCard;