import { useEffect, useState } from "react";
import AdvocateCard from "../../components/cards/AdvocateCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Advocate = () => {

    const axiosPublic = useAxiosPublic();

    const [city, setCity] = useState('');
    const [practiceArea, setPracticeArea] = useState('');
    const [allAdvocates, setAllAdvocates] = useState(null);
    console.log("all advo =", allAdvocates);

    const fetchAdvocates = async () => {
        const response = await axiosPublic.get('/advocates', {
            params: {
                city,
                practiceArea
            }
        });
        setAllAdvocates(response.data.advocates);

    };

    useEffect(() => {

        fetchAdvocates();
        window.scroll(0, 0);

    }, [city, practiceArea]);

    const handleSearch = () => {
        console.log('Searching for lawyers in:', city, 'with practice area:', practiceArea);
        // Add search functionality here
    };

    return (
        <div className="flex gap-6 container mx-auto">
            <div className="w-1/4 h-48 grid grid-cols-1 gap-4 m-4">
                {/* City Dropdown */}
                <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border border-gray-300 rounded-none px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select City</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                </select>

                {/* Practice Area Dropdown */}
                <select
                    value={practiceArea}
                    onChange={(e) => setPracticeArea(e.target.value)}
                    className="border border-gray-300 rounded-none px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Practice Areas</option>
                    <option value="Criminal Law">Criminal Law</option>
                    <option value="Family Law">Family Law</option>
                    <option value="Corporate Law">Corporate Law</option>
                </select>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="bg-[#2ba329] hover:bg-[#4ec74c] text-white font-medium px-6 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Search
                </button>
            </div>
            <div className="w-3/4">
                {
                    allAdvocates ?
                        allAdvocates.map((advocate, idx) => (
                            <AdvocateCard key={idx} advocate={advocate} />
                        ))
                        :
                        <h1>Loading.....</h1>
                }
            </div>
        </div>
    );
};

export default Advocate;