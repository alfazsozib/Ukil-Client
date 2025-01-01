import CaseRequestsOfAdvocateCard from "../../../components/cards/CaseRequestsOfAdvocateCard";
import useAdvocateInfo from "../../../hooks/useAdvocateInfo";

const CaseRequestsOfAdvocate = () => {

    const [, caseRequests] = useAdvocateInfo();

    return (
        <div className="space-y-8 p-4">
            {
                caseRequests?.map((request, idx) => (
                    <CaseRequestsOfAdvocateCard key={idx} request={request} />
                ))
            }
        </div>
    );
};

export default CaseRequestsOfAdvocate;