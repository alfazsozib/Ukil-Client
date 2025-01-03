import { Link, useNavigate } from "react-router-dom";

const ArticlesCard = ({ article: art }) => {

    const navigate = useNavigate();

    const { postedAt, heading, article, advocateName, advocateId } = art;

    const formattedDate = new Date(postedAt).toISOString().split('T')[0];
    const shortArticle = article.split(' ').slice(0, 40).join(' ');

    return (
        <div className="text-gray-900">
            <div className="container mx-auto bg-gray-50">

                <div className="flex flex-col p-6 lg:p-10">
                    <h1 className="text-3xl font-light">{heading}</h1>
                    <p className="flex-1 pt-2 text-base font-normal">{shortArticle}....</p>
                    <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-[#2ba329]">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                            </svg>
                            {
                                localStorage.getItem('token') ?
                                    <Link to={`/advocate/${advocateId}`}
                                        className="self-center text-sm text-[#2ba329] hover:underline">
                                        by {advocateName}
                                    </Link>
                                    :
                                    <button
                                        onClick={() => navigate('/login')}
                                        className="self-center text-sm text-[#2ba329] hover:underline">
                                        by {advocateName}
                                    </button>
                            }
                        </div>
                        <span className="text-xs">{formattedDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlesCard;