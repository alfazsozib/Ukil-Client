import { useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import CaseRequestModal from "../../components/modals/CaseRequestModal";
import useAdvocateDetailsById from "../../hooks/useAdvocateDetailsById";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import '../profile/tab-css/Tab.css';

const AdvocateDetails = () => {
    const { id } = useParams();

    const [advocate] = useAdvocateDetailsById(id);
    console.log("Detail = ", advocate);

    const { name, city, practiceArea, yearOfPractice } = advocate;


    // Case Request 
    const [isOpen, setIsOpen] = useState(false);



    return (
        <>
            <div className="flex gap-4 container mx-auto my-10">
                <div className="w-3/12 flex flex-col gap-3 items-center justify-center">
                    <img className="flex-shrink-0 Detail = -,advocatecover w-48 h-48 rounded-full sm:mx-4 ring-4 ring-[#a0eb9f]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                </div>
                <div className="w-9/12 space-y-6 p-6">
                    <div className="flex items-center">
                        <div className="space-y-3  w-1/2">
                            <h1 className="text-2xl font-bold">Advocate {name}</h1>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-2 my-1">
                                    <FaStar className="text-base text-[#2ba329]" />
                                    <FaStar className="text-base text-[#2ba329]" />
                                    <FaStar className="text-base text-[#2ba329]" />
                                    <FaStar className="text-base text-[#2ba329]" />
                                </div>
                                <span className="font-extralight">4.5 | 150+ User Ratings</span>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-end gap-4">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="py-2 px-4 border border-[#2ba329] text-[#2ba329] text-lg font-normal hover:border-2 hover:border-[#30d32d] hover:text-[#2ba329] hover:font-semibold">
                                Send Case Request
                            </button>
                            <button className="py-2 px-4 border border-[#2ba329] text-[#2ba329] text-lg font-normal hover:border-2 hover:border-[#30d32d] hover:text-[#2ba329] hover:font-semibold">Review </button>
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <div className="space-y-3">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-[#2ba329] text-xl" />
                                <p className="text-gray-700 font-normal">Location : <span className="font-semibold">{city}</span></p>
                            </div>

                            <div className="flex items-center gap-4">
                                <VscWorkspaceTrusted className="text-[#2ba329] text-xl" />
                                <p className="mt-2 text-gray-700 capitalize font-normal">Practice Area & Skill : <span className="font-semibold">{practiceArea}</span></p>
                            </div>

                            <div className="flex items-center gap-4">
                                <PiBagFill className="text-[#2ba329] text-xl" />
                                <p className="text-gray-700 font-normal">Experience : <span className="font-semibold">{yearOfPractice} Years</span> </p>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    isOpen && <CaseRequestModal isOpen={isOpen} setIsOpen={setIsOpen} id={id} name={name}></CaseRequestModal>
                }
            </div>

            <div className="container mx-auto mt-20 px-12">
                <Tabs>
                    <TabList>
                        <Tab>Articles</Tab>
                        <Tab>Reviews</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Articles of Advocate</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Reviews from users</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default AdvocateDetails;