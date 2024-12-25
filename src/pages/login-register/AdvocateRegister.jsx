import { Link } from "react-router-dom";
import logo from "../../assets/ukil-logo.png";
const AdvocateRegister = () => {
    return (
        <div>
            <div className="container mx-auto mb-12">
                <Link to={'/'} className="flex justify-center">
                    <img className="w-3/12" src={logo} alt="" />
                </Link>
                <form className="grid grid-cols-2 gap-4">
                    <h1 className="text-3xl font-semibold col-span-2 text-center mb-6">
                        Register Your Account
                    </h1>
                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Full Name" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="email" placeholder="Email Address" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Phone Number" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="License/Registration Number" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="number" placeholder="Years of Practice" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Chamber Name" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Practice Area" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Educational Qualifications" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="University Name" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Graduation Year" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="password" placeholder="Password" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="password" placeholder="Confirm Password" />

                    <input className="col-span-2 border-2 p-2 text-xl w-4/12 mx-auto bg-[#2ba329] text-white font-semibold" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default AdvocateRegister;
