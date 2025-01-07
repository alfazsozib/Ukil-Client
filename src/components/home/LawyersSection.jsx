import { useNavigate } from "react-router-dom";
import useThreeAdvocatesByPracticeArea from "../../hooks/useThreeAdvocatesByPracticeArea";
import AdvocateCardForHomePage from "../cards/AdvocateCardForHomePage";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useContext } from "react";
import { SearchContext } from "../../provider/SearchProvider";

const LawyersSection = () => {
    const [civilLawyers, familyLawyers, criminalLawyers, corporateLawyers] = useThreeAdvocatesByPracticeArea();

    const navigate = useNavigate();

    const { setSelectedField } = useContext(SearchContext);

    const handleSeeAll = (field) => {
        setSelectedField(field);
        navigate('/advocates');
    };

    return (
        <div className="container mx-auto my-16 space-y-8">
            <div className="space-y-3">
                <h1 className="text-3xl font-light my-4">Civil Lawyers</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        civilLawyers.map((lawyer, idx) => (
                            <AdvocateCardForHomePage key={idx} lawyer={lawyer} />
                        ))
                    }
                </div>
                <div className="flex justify-end px-5">
                    <button
                        onClick={() => handleSeeAll("Civil Lawyer")}
                        className="text-lg text-[#2ba329] font-medium flex items-center gap-2">
                        See All
                        <FaArrowAltCircleRight className="text-lg text-[#2ba329]" />
                    </button>
                </div>
            </div>
            <div className="space-y-3">
                <h1 className="text-3xl font-light my-4">Family Lawyers</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        familyLawyers.map((lawyer, idx) => (
                            <AdvocateCardForHomePage key={idx} lawyer={lawyer} />
                        ))
                    }
                </div>
                <div className="flex justify-end px-5">
                    <button
                        onClick={() => handleSeeAll("Family Lawyer")}
                        className="text-lg text-[#2ba329] font-medium flex items-center gap-2">
                        See All
                        <FaArrowAltCircleRight className="text-lg text-[#2ba329]" />
                    </button>
                </div>
            </div>
            <div className="space-y-3">
                <h1 className="text-3xl font-light my-4">Criminal Lawyers</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        criminalLawyers.map((lawyer, idx) => (
                            <AdvocateCardForHomePage key={idx} lawyer={lawyer} />
                        ))
                    }
                </div>
                <div className="flex justify-end px-5">
                    <button
                        onClick={() => handleSeeAll("Criminal Lawyer")}
                        className="text-lg text-[#2ba329] font-medium flex items-center gap-2">
                        See All
                        <FaArrowAltCircleRight className="text-lg text-[#2ba329]" />
                    </button>
                </div>
            </div>
            <div className="space-y-3">
                <h1 className="text-3xl font-light my-4">Corporate Lawyers</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        corporateLawyers.map((lawyer, idx) => (
                            <AdvocateCardForHomePage key={idx} lawyer={lawyer} />
                        ))
                    }
                </div>
                <div className="flex justify-end px-5">
                    <button
                        onClick={() => handleSeeAll("Corporate Lawyer")}
                        className="text-lg text-[#2ba329] font-medium flex items-center gap-2">
                        See All
                        <FaArrowAltCircleRight className="text-lg text-[#2ba329]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LawyersSection;