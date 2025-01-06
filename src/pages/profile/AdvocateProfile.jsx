import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import useAdvocateInfo from "../../hooks/useAdvocateInfo";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiBagFill } from "react-icons/pi";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './tab-css/Tab.css';
import CaseRequestsOfAdvocate from "./advocate-docs/CaseRequestsOfAdvocate";
import ArticlesByAdvocate from "./advocate-docs/ArticlesByAdvocate";

const AdvocateProfile = () => {

    const [advocate] = useAdvocateInfo();
    // console.log("Advocate info by mail =", advocate);

    const { chamber, eduQualification, email, graduationYear, address, license, name, number, password, practiceArea, university, yearOfPractice, _id, court } = advocate;


    return (
        <div className="container mx-auto mt-6">
            <div className="flex">
                <div className="w-3/12 flex flex-col gap-3 items-center justify-center">
                    <img className="flex-shrink-0 Detail = -,advocatecover w-48 h-48 rounded-full sm:mx-4 ring-4 ring-[#a0eb9f]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                    <button className="py-1 px-2 border border-[#2ba329] w-2/3 text-base font-semibold text-[#2ba329]">Change Image</button>
                </div>
                <div className="w-9/12">
                    <div className="space-y-4  w-1/2">
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
                    <div className="my-4 flex gap-6">
                        <div className="space-y-6 w-1/3">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-[#2ba329] text-xl" />
                                <p className="text-gray-700 font-normal">Location : <span className="font-semibold">{court}</span></p>
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
                        <div className="space-y-6 w-1/3">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-[#2ba329] text-xl" />
                                <p className="text-gray-700 font-normal">Chamber : <span className="font-semibold">{chamber}</span></p>
                            </div>

                            <div className="flex items-center gap-4">
                                <VscWorkspaceTrusted className="text-[#2ba329] text-xl" />
                                <p className="mt-2 text-gray-700 capitalize font-normal">License : <span className="font-semibold">{license}</span></p>
                            </div>

                            <div className="flex items-center gap-4">
                                <PiBagFill className="text-[#2ba329] text-xl" />
                                <p className="text-gray-700 font-normal">Education : <span className="font-semibold">{eduQualification}</span> </p>
                            </div>
                        </div>
                        <div className="space-y-6 w-1/3">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-[#2ba329] text-xl" />
                                <p className="text-gray-700 font-normal">Email : <span className="font-semibold">{email}</span></p>
                            </div>

                            <div className="flex items-center gap-4">
                                <VscWorkspaceTrusted className="text-[#2ba329] text-xl" />
                                <p className="mt-2 text-gray-700 capitalize font-normal">Number : <span className="font-semibold">{number}</span></p>
                            </div>

                            <div className="flex items-center gap-4">
                                {/* <PiBagFill className="text-[#2ba329] text-xl" /> */}
                                <button className="py-1 px-2 border border-[#2ba329] w-2/3 text-base font-semibold text-[#2ba329]">Edit Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Section */}

            <div className="mt-20 lg:px-12">
                <Tabs>
                    <TabList>
                        <Tab>Case Requests</Tab>
                        <Tab>Articles</Tab>
                        <Tab>Reviews</Tab>
                    </TabList>

                    <TabPanel>
                        <CaseRequestsOfAdvocate />
                    </TabPanel>
                    <TabPanel>
                        <ArticlesByAdvocate id={_id} />
                    </TabPanel>
                    <TabPanel>
                        <h2>Reviews from users</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AdvocateProfile;