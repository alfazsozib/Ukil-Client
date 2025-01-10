import { useContext, useState } from "react";
import { SearchContext } from "../../provider/SearchProvider";
import { useNavigate } from "react-router-dom";
import PracticeFields from "../../pages/login-register/combobox/PracticeField";
import PracticingCourt from "../../pages/login-register/combobox/PracticeArea";
import { MdPersonSearch } from "react-icons/md";

const TopRatedLawyerSearch = () => {
  // const [city, setCity] = useState('');
  // const [practiceArea, setPracticeArea] = useState('');
  const navigate = useNavigate();

  const { selectedCourt, setSelectedCourt, selectedField, setSelectedField } = useContext(SearchContext);

  const handleSearch = () => {
    console.log('Searching for lawyers in:', selectedCourt, 'with practice area:', selectedField);
    // Add search functionality here
    if (selectedCourt && selectedField) {
      navigate('/advocates');
    }
  };

  return (
    <div className="flex flex-col items-center mb-20">
      <h2 className="text-3xl font-light mb-4">Search For Near By Lawyers</h2>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* City Dropdown */}
        {/* <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 rounded-none px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Khulna">Khulna</option>
        </select> */}

        {/* Practice Area Dropdown */}
        {/* <select
          value={practiceArea}
          onChange={(e) => setPracticeArea(e.target.value)}
          className="border border-gray-300 rounded-none px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Practice Areas</option>
          <option value="Criminal">Criminal</option>
          <option value="Family">Family</option>
          <option value="Civil">Civil</option>
        </select> */}

        <PracticeFields setSelectedField={setSelectedField} />
        <PracticingCourt setSelectedCourt={setSelectedCourt} />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="border border-[#2ba329] text-[#2ba329] font-medium px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-1"
        >
          <MdPersonSearch className="text-xl" />
          Search
        </button>
      </div>
    </div>
  );
};

export default TopRatedLawyerSearch;
