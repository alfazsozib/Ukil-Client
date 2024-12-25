import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";

const TopRatedLawyers = () => {
    return (
        <div className="mt-28">
            <h1 className="text-3xl font-semibold text-center my-12">Top-Rated Lawyers In Bangladesh</h1>
            <div className="container mx-auto grid grid-cols-3 gap-6">
                <div className="px-8 py-6 space-y-4 transition-colors duration-300 transform border cursor-pointer rounded-xl group border-[#2ba329]">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-[#a0eb9f]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                        <div className="mt-4 sm:mx-4 sm:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-xl ">Advocate Arthur Melo</h1>
                            <div className="flex items-center gap-2 my-1">
                                <FaStar className="text-1xl text-[#2ba329]" />
                                <FaStar className="text-1xl text-[#2ba329]" />
                                <FaStar className="text-1xl text-[#2ba329]" />
                                <FaStar className="text-1xl text-[#2ba329]" />
                            </div>
                            <p className="mt-2 text-gray-700 capitalize ">Practice Area : Family</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-[#2ba329] text-xl" />
                            <p className="text-gray-700 font-normal">Subedar Chatram Road (SC Road), Bangalore / Bengaluru</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <PiBagFill className="text-[#2ba329] text-xl" />
                            <p className="text-gray-700 font-normal">18 years Experience</p>
                        </div>
                    </div>
                </div>
                <div className="px-8 py-6 space-y-4 transition-colors duration-300 transform border cursor-pointer rounded-xl group border-[#2ba329]">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-[#a0eb9f]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                        <div className="mt-4 sm:mx-4 sm:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-xl ">Advocate Arthur Melo</h1>
                            <div className="flex items-center gap-2 my-1">
                                <FaStar className="text-1xl text-[#2ba329]" />
                                <FaStar className="text-1xl text-[#2ba329]" />
                                <FaStar className="text-1xl text-[#2ba329]" />
                                <FaStar className="text-1xl text-[#2ba329]" />
                            </div>
                            <p className="mt-2 text-gray-700 capitalize ">Practice Area : Family</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-[#2ba329] text-xl" />
                            <p className="text-gray-700 font-normal">Subedar Chatram Road (SC Road), Bangalore / Bengaluru</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <PiBagFill className="text-[#2ba329] text-xl" />
                            <p className="text-gray-700 font-normal">18 years Experience</p>
                        </div>
                    </div>
                </div>
                <div className="px-8 py-6 space-y-4 transition-colors duration-300 transform border cursor-pointer rounded-xl group border-[#2ba329]">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-[#a0eb9f]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                        <div className="mt-4 sm:mx-4 sm:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-xl ">Advocate Arthur Melo</h1>
                            <div className="flex items-center gap-2 my-1">
                                <FaStar className="text-1xl text-[#2ba329]" />
                                <FaStar className="text-1xl text-[#2ba329]" />
                                <FaStar className="text-1xl text-[#2ba329]" />
                                <FaStar className="text-1xl text-[#2ba329]" />
                            </div>
                            <p className="mt-2 text-gray-700 capitalize ">Practice Area : Family</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-[#2ba329] text-xl" />
                            <p className="text-gray-700 font-normal">Subedar Chatram Road (SC Road), Bangalore / Bengaluru</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <PiBagFill className="text-[#2ba329] text-xl" />
                            <p className="text-gray-700 font-normal">18 years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRatedLawyers;