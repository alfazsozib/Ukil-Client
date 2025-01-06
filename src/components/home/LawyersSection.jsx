import useThreeAdvocatesByPracticeArea from "../../hooks/useThreeAdvocatesByPracticeArea";

const LawyersSection = () => {
    const [threeAdvocatesByArea] = useThreeAdvocatesByPracticeArea();
    const { Civil_Lawyer, Corporate_Lawyer, Criminal_Lawyer, Family_Lawyer } = threeAdvocatesByArea;

    // console.log(Civil_Lawyer, Corporate_Lawyer, Criminal_Lawyer, Family_Lawyer);
    return (
        <div>
            Four Different areas of Lawyers
        </div>
    );
};

export default LawyersSection;