import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/ukil-logo.png";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import PracticeField from "./combobox/PracticeField";
import { useState } from "react";
const AdvocateRegister = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    // Practice Field from combobox
    const [selectedField, setSelectedField] = useState("");
    console.log("field =",selectedField);


    const handelSignUp = async e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const city = form.city.value;
        const number = form.number.value;
        const license = form.license.value;
        const yearOfPractice = form.yearOfPractice.value;
        const chamber = form.chamber.value;
        const practiceArea = selectedField;
        const eduQualification = form.eduQualification.value;
        const university = form.university.value;
        const graduationYear = form.graduationYear.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password != confirmPassword) {
            return alert("Check Password");
        }

        const userInfo = {
            name,
            email,
            address,
            city,
            number,
            license,
            yearOfPractice,
            chamber,
            practiceArea,
            eduQualification,
            university,
            graduationYear,
            password,
            confirmPassword
        }

        // console.log(userInfo);

        const res = await axiosPublic.post('/advocate', userInfo)
        // console.log(res.data);

        if (res.data.insertedId) {

            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "You have successfully create an account",
                showConfirmButton: false,
                timer: 1500
            });

            navigate('/login');
        }


    }


    return (
        <div>
            <div className="container mx-auto mb-12">
                <Link to={'/'} className="flex justify-center">
                    <img className="w-3/12" src={logo} alt="" />
                </Link>
                <form onSubmit={handelSignUp} className="grid grid-cols-2 gap-4">
                    <h1 className="text-3xl font-semibold col-span-2 text-center mb-6">
                        Register Your Account
                    </h1>
                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Full Name" name="name" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="email" placeholder="Email Address" name="email" />

                    {/* <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Practice Area" name="practiceArea" /> */}

                    <div className="w-5/6 mx-auto">
                        <PracticeField setSelectedField={setSelectedField} />
                    </div>

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Practicing City" name="city" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Address" name="address" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Phone Number" name="number" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="License/Registration Number" name="license" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="number" placeholder="Years of Practice" name="yearOfPractice" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Chamber Name" name="chamber" />



                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Educational Qualifications" name="eduQualification" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="University Name" name="university" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="text" placeholder="Graduation Year" name="graduationYear" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="password" placeholder="Password" name="password" />

                    <input className="border-b border-gray-400 focus:outline-none focus:border-[#2ba329] focus:ring-0 w-5/6 py-2 px-4 my-3 mx-auto" type="password" placeholder="Confirm Password" name="confirmPassword" />

                    <input className="col-span-2 border-2 p-2 text-xl w-4/12 mx-auto bg-[#2ba329] text-white font-semibold" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default AdvocateRegister;
