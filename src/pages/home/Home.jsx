import Banner from "../../components/home/Banner";
import FAQ from "../../components/home/FAQ";
import TopRatedLawyerSearch from "../../components/home/SearchTopRatedLawyers";
import TopRatedLawyers from "../../components/home/TopRatedLawyers";

const Home = () => {
    return (
        <div>
            <Banner/>
            <TopRatedLawyerSearch />
            <TopRatedLawyers />
            <FAQ />
        </div>
    );
};

export default Home;