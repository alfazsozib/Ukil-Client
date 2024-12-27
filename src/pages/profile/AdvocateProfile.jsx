import useAdvocateInfo from "../../hooks/useAdvocateInfo";

const AdvocateProfile = () => {

    const [advocate] = useAdvocateInfo();
    console.log("Advocate info by mail =", advocate);
    return (
        <div>
            Advocate Profile
        </div>
    );
};

export default AdvocateProfile;