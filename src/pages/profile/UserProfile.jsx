import useUserInfo from "../../hooks/useUserInfo";

const UserProfile = () => {

    const [user] = useUserInfo();
    console.log("Advocate info by mail =", user);
    return (
        <div>
            User Profile
        </div>
    );
};

export default UserProfile;