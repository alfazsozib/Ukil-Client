import Banner from "../../components/home/Banner";
import TopRatedLawyerSearch from "../../components/home/SearchTopRatedLawyers";
import TopRatedLawyers from "../../components/home/TopRatedLawyers";

const Home = () => {
    return (
        <div>
            <Banner/>
            <TopRatedLawyerSearch />
            <TopRatedLawyers />
        </div>
    );
};

export default Home;