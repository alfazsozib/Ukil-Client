import ReviewCard from "../../components/cards/ReviewCard";
import useAdvocateDetailsById from "../../hooks/useAdvocateDetailsById";

const ReviewsTab = ({ id }) => {

    const [, , reviews] = useAdvocateDetailsById(id);

    return (
        <div className="my-20 space-y-20">
            {
                reviews ? reviews.map((review, idx) => (
                    <ReviewCard key={idx} review={review} />
                ))
                    : <div>
                        <h1 className="text-3xl font-bold text-slate-600 text-center">No Article found</h1>
                    </div>
            }
        </div>
    );
};

export default ReviewsTab;