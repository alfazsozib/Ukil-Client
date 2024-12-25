import { Link } from "react-router-dom";
import img from "../../assets/loginImg.jpg";
import logo from "../../assets/ukil-logo.png";

const Login = () => {

    const handleLogin = async e => {
        e.preventDefault();

        const form = e.target;



    }

    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <div className='hidden lg:block w-1/2'>
                <img src={img} alt="" />
            </div>
            <div className='px-2 lg:px-32 space-y-8 lg:w-1/2'>
                <Link to={'/'} className="flex justify-center">
                    <img className="w-1/2" src={logo} alt="" />
                </Link>
                <div className='space-y-3'>
                    <h1 className='text-3xl font-semibold'>Login Here</h1>
                </div>

                <form onSubmit={handleLogin} className='space-y-8'>
                    <input
                        className='border-b border-[#00000066] focus:outline-none focus:border-[#2ba329] focus:ring-0 w-full p-2'
                        type="email" placeholder='Email' name='email' />
                    <input
                        className='border-b border-[#00000066] focus:outline-none focus:border-[#2ba329] focus:ring-0 w-full p-2'
                        type="password" placeholder='Password' name='password' />

                    <div className='flex items-center justify-between'>
                        <input
                            className='text-white font-semibold bg-[#2ba329] rounded-sm px-6 py-2 cursor-pointer'
                            type="submit" value="Log In" />

                        <p className='font-semibold text-[#2ba329]'>Forget Password?</p>
                    </div>
                </form>



                <h3 className='text-center text-[#0808089d]'>Have no account? Register As <br />
                    <Link to={'/advocate-register'} className='font-semibold mx-1 underline hover:text-[#2ba329]'>Advocate</Link> <span className="mr-1">|</span>
                    <Link to={'/user-register'} className='font-semibold mx-1 underline hover:text-[#2ba329]'>User</Link>
                </h3>
            </div>
        </div>
    );
};

export default Login;