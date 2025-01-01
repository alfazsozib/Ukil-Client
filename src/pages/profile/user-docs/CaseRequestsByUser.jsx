import CaseRequestsByUserCard from "../../../components/cards/CaseRequestsByUserCard";
import useUserInfo from "../../../hooks/useUserInfo";


const CaseRequestsByUser = () => {

    const [, userRequests] = useUserInfo();

    return (
        <div className="space-y-8 p-4">
            {
                userRequests?.map((request, idx) => (
                    <CaseRequestsByUserCard key={idx} request={request} />
                ))
            }
        </div>
    );
};

export default CaseRequestsByUser;