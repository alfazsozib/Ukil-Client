
const CaseRequestsByUserCard = ({ request }) => {

    const { advocateName, requestedAt, message, heading, status } = request;

    const formattedDate = new Date(requestedAt).toISOString().split('T')[0];

    return (
        <div className="max-w-4xl mx-auto px-8 py-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-600">{formattedDate}</span>
                <div>
                    <button
                        className={`mx-2 px-3 py-1 text-sm font-bold border ${status == "Pending" ? "border-[#a2ab27] text-[#a2ab27]" : ""} transition-colors duration-300 transform rounded cursor-pointer`} role="button">
                        {status}
                    </button>
                </div>
            </div>

            <div className="mt-2">
                <h1 className="text-xl font-bold text-gray-700">{heading}</h1>
                <p className="mt-2 text-gray-600">{message}</p>
            </div>

            <div className="flex items-center justify-between mt-4">
                <a className="text-[#2ba329] hover:underline" role="link">View Profile</a>

                <div className="flex items-center">
                    <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
                    <h1
                        className="font-bold text-gray-700 cursor-pointer">
                        Advocate {advocateName}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default CaseRequestsByUserCard;