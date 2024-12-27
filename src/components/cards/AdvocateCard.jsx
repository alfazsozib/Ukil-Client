import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";

const AdvocateCard = ({ advocate }) => {
    const { chamber, eduQualification, email, graduationYear, address, license, name, number, password, practiceArea, university, yearOfPractice, _id } = advocate;
    return (
        <div className="p-4 bg-gray-50 text-gray-800 flex items-center justify-between border border-[#2ba329] m-4">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row w-1/2">
            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-[#a0eb9f]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                <div className="flex flex-col">
                    <div className="space-y-2">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-xl ">{name}</h1>
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-[#2ba329] text-xl" />
                            <p className="text-gray-700 font-normal">{address}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <PiBagFill className="text-[#2ba329] text-xl" />
                            <p className="text-gray-700 font-normal">{yearOfPractice} years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-4 space-x-4 align-center w-1/2">

                <div className="mt-4 sm:mx-4 sm:mt-0 space-y-4">

                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 my-1">
                            <FaStar className="text-1xl text-[#2ba329]" />
                            <FaStar className="text-1xl text-[#2ba329]" />
                            <FaStar className="text-1xl text-[#2ba329]" />
                            <FaStar className="text-1xl text-[#2ba329]" />
                        </div>
                        <span>4.5 | 150+ User Ratings</span>
                    </div>
                    <p className="mt-2 text-gray-700 capitalize font-normal">Practice Area & Skill <br /> <span className="font-semibold">{practiceArea}</span></p>
                    <button className="p-2 bg-[#2ba329] text-white font-normal">View Details</button>
                </div>

            </div>
        </div>

    );
};

export default AdvocateCard;