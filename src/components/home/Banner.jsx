import { useContext, useState } from "react";
import banner from "../../assets/ukil-banner.png";
import logo from "../../assets/ukil-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/UserProvider";

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { logout } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    const userName = localStorage.getItem('userName') || 'Guest';
    const formattedUserName = userName.replace(/\s+/g, '_');

    return (
        <section className="bg-white">
            {/* Navbar */}
            <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center justify-between">
                    <Link to={'/'}>
                        <img
                            className="lg:h-[120px]"
                            src={logo}
                            alt="Logo"
                        />
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:shadow-none  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        }`}
                >
                    <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                        <a
                            className="text-gray-700 transition-colors duration-300 transform lg:mx-8  hover:text-[#2ba329] text-xl font-medium"
                            href="#"
                        >
                            Home
                        </a>
                        <Link to={'/advocates'}
                            className="text-gray-700 transition-colors duration-300 transform lg:mx-8  hover:text-[#2ba329] text-xl font-medium"
                            href="#"
                        >
                            Advocates
                        </Link>
                        <Link to={'/articles'}
                            className="text-gray-700 transition-colors duration-300 transform lg:mx-8  hover:text-[#2ba329] text-xl font-medium"
                            href="#"
                        >
                            Articles
                        </Link>
                        {
                            localStorage.getItem('type') ? <>
                                {
                                    localStorage.getItem('type') === 'User' ?
                                        <Link 
                                        to={`/user-profile/${formattedUserName}`}
                                            className="text-gray-700 transition-colors duration-300 transform lg:mx-8  hover:text-[#2ba329] text-xl font-medium"
                                            href="#"
                                        >
                                            Profile
                                        </Link>
                                        : <Link 
                                        to={`/advocate-profile/${formattedUserName}`}
                                            className="text-gray-700 transition-colors duration-300 transform lg:mx-8  hover:text-[#2ba329] text-xl font-medium"
                                            href="#"
                                        >
                                            Profile
                                        </Link>
                                }
                                <button
                                    onClick={() => handleLogout()}
                                    className="text-gray-700 transition-colors duration-300 transform lg:mx-8  hover:text-[#2ba329] text-xl font-medium">Logout</button>
                            </>
                                : <Link to={'/login'}
                                    className="text-gray-700 transition-colors duration-300 transform lg:mx-8  hover:text-[#2ba329] text-xl font-medium"
                                    href="#"
                                >
                                    Login
                                </Link>
                        }
                    </div>
                    <div className="relative mt-4 lg:mt-0 lg:mx-4">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                className="w-4 h-4 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <input
                            type="text"
                            className="w-full py-1 pl-10 pr-4 text-xl text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 lg:w-56 lg:border-transparent focus:outline-none focus:border-gray-600"
                            placeholder="Search"
                        />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="container px-6 pb-12 mx-auto text-center">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                        Your Legal Partner for a Brighter Future
                    </h1>
                    <p className="mt-6 text-gray-500 max-sm:text-lg">
                        We are confident in our ability to fight for your rights with passion and precision, delivering results that exceed your expectations
                    </p>
                </div>

                <div className="flex justify-center mt-10">
                    <img
                        className="lg:object-cover w-full lg:h-96 h-64 rounded-xl lg:w-4/5"
                        src={banner}
                        alt="Hero"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
