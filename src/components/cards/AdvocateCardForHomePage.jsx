import { FaBuildingColumns, FaStar } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { PiBagFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdvocateCardForHomePage = ({ lawyer }) => {
    const { name, practiceArea, court, yearOfPractice, _id } = lawyer;

    const navigate = useNavigate();

    const handleNotLogin = () => {

        Swal.fire({
            title: "For seeing the detail you have to Login First",
            confirmButtonColor: '#2ba329',
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
        navigate('/login');
    }
    return (
        <div className="px-6 py-6 space-y-4 transition-colors duration-300 transform border cursor-pointer rounded-xl group border-[#2ba329] flex flex-col">
            <div className="flex flex-col sm:-mx-4 sm:flex-row flex-1">
                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-[#a0eb9f]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-xl ">Advocate {name}</h1>
                    <div className="flex items-center gap-2 my-1">
                        <FaStar className="text-1xl text-[#2ba329]" />
                        <FaStar className="text-1xl text-[#2ba329]" />
                        <FaStar className="text-1xl text-[#2ba329]" />
                        <FaStar className="text-1xl text-[#2ba329]" />
                    </div>
                    <p className="mt-2 text-gray-700 capitalize ">Practice Area : {practiceArea}</p>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="space-y-2">
                    <div className="flex items-center gap-4">
                        <FaBuildingColumns className="text-[#2ba329] text-xl" />
                        <p className="text-gray-700 font-normal">{court}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <PiBagFill className="text-[#2ba329] text-xl" />
                        <p className="text-gray-700 font-normal">{yearOfPractice} years Experience</p>
                    </div>
                </div>
                <div className="w-2/5 flex flex-col justify-end items-end">
                    {
                        localStorage.token ?
                            <button
                                className="p-2 text-[#2ba329] font-normal flex items-center">
                                <Link to={`/advocate/${_id}`}>
                                    View Details
                                </Link>
                                <GoArrowUpRight />
                            </button>
                            : <button
                                onClick={() => handleNotLogin()}
                                className="p-2 text-[#2ba329] font-normal flex items-center ">
                                View Details
                                <GoArrowUpRight />
                            </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdvocateCardForHomePage;