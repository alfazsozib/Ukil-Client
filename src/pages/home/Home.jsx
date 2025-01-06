import Banner from "../../components/home/Banner";
import FAQ from "../../components/home/FAQ";
import LawyersSection from "../../components/home/LawyersSection";
import TopRatedLawyerSearch from "../../components/home/SearchTopRatedLawyers";
import TopRatedLawyers from "../../components/home/TopRatedLawyers";
// import useThreeAdvocatesByPracticeArea from "../../hooks/useThreeAdvocatesByPracticeArea";

const Home = () => {

    return (
        <div>
            <Banner />
            <TopRatedLawyerSearch />
            <LawyersSection />
            <TopRatedLawyers />
            <FAQ />
        </div>
    );
};

export default Home;