import { useState } from "react";

const TopRatedLawyerSearch = () => {
  const [city, setCity] = useState('');
  const [practiceArea, setPracticeArea] = useState('');

  const handleSearch = () => {
    console.log('Searching for lawyers in:', city, 'with practice area:', practiceArea);
    // Add search functionality here
  };

  return (
    <div className="flex flex-col items-center mb-20">
      <h2 className="text-2xl font-semibold mb-4">Search For Top-Rated Lawyers</h2>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* City Dropdown */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Practice Areas</option>
          <option value="Criminal Law">Criminal Law</option>
          <option value="Family Law">Family Law</option>
          <option value="Corporate Law">Corporate Law</option>
        </select>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default TopRatedLawyerSearch;
