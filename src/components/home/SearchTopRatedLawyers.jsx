import { useContext, useState } from "react";
import { SearchContext } from "../../provider/SearchProvider";
import { useNavigate } from "react-router-dom";

const TopRatedLawyerSearch = () => {
  // const [city, setCity] = useState('');
  // const [practiceArea, setPracticeArea] = useState('');
  const navigate = useNavigate();

  const {city, setCity, practiceArea, setPracticeArea} = useContext(SearchContext);

  const handleSearch = () => {
    console.log('Searching for lawyers in:', city, 'with practice area:', practiceArea);
    // Add search functionality here
      if (city && practiceArea) {
        navigate('/advocates');
      }
  };

  return (
    <div className="flex flex-col items-center mb-20">
      <h2 className="text-2xl font-semibold mb-4">Search For Top-Rated Lawyers</h2>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* City Dropdown */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 rounded-none px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Khulna">Khulna</option>
        </select>

        {/* Practice Area Dropdown */}
        <select
          value={practiceArea}
          onChange={(e) => setPracticeArea(e.target.value)}
          className="border border-gray-300 rounded-none px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Practice Areas</option>
          <option value="Criminal">Criminal</option>
          <option value="Family">Family</option>
          <option value="Civil">Civil</option>
        </select>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-[#2ba329] hover:bg-[#4ec74c] text-white font-medium px-6 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default TopRatedLawyerSearch;
