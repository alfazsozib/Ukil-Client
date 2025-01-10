import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

import { MdOutlineCancel } from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ReviewModal = ({ isOpen, setIsOpen, id, name }) => {

    const axiosPublic = useAxiosPublic();

    const handleReview = async e => {
        e.preventDefault();

        const review = e.target.review.value;
        const rating = e.target.rating.value;
        const userName = localStorage.getItem("userName");
        // const email = localStorage.getItem("email");

        const reviewDoc = {
            userName,
            image: "",
            advocateId: id,
            rating: parseInt(rating),
            review
        }

        console.log(reviewDoc);

        const res = await axiosPublic.post('/review', reviewDoc);

        if (res.data.insertedId) {
            setIsOpen(false);

            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `Your Review is posted successfully`,
                showConfirmButton: false,
                timer: 2000
            });

        }


    }

    return (
        <Dialog
            open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}

        >
            <DialogBackdrop

                transition
                className="fixed inset-0 bg-black/30 duration-1000 ease-out data-[closed]:opacity-0"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">

                    <DialogPanel
                        transition
                        className="w-full max-w-xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 relative"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-6 text-3xl text-red-600">
                            <MdOutlineCancel />
                        </button>

                        <DialogTitle as="h3" className="text-base/7 font-medium text-slate-600 text-center">
                            Review To - <br />
                            <span className="text-xl font-semibold">Advocate {name}</span>
                        </DialogTitle>
                        <div className="mt-6">
                            <form onSubmit={handleReview} className="space-y-5">
                                <div className="grid grid-cols-6 gap-2">
                                    <h3 className="col-span-1 text-slate-600 font-medium">Name : </h3>
                                    <input
                                        defaultValue={localStorage.userName}
                                        readOnly
                                        className="col-span-5 border-b focus:outline-none focus:border-[#2ba329] text-[#2ba329]" type="text" />
                                </div>
                                <div className="grid grid-cols-6 gap-2">
                                    <h3 className="col-span-1 text-slate-600 font-medium">Email : </h3>
                                    <input
                                        defaultValue={localStorage.email}
                                        readOnly
                                        className="col-span-5 border-b focus:outline-none focus:border-[#2ba329] text-[#2ba329]" type="text" />
                                </div>
                                <div className="grid grid-cols-6 gap-2">
                                    <h3 className="col-span-1 text-slate-600 font-medium">Rating : </h3>
                                    <input
                                        required
                                        placeholder={`Rate advocate ${name}...`}
                                        className="col-span-5 border-b focus:outline-none focus:border-[#2ba329] text-gray-600" 
                                        type="number" name="rating" />
                                </div>
                                <div>
                                    <textarea
                                        required
                                        className="w-full p-2 border focus:outline-none  focus:border-[#2ba329] text-gray-600" rows={10} placeholder={`Thought about advocate ${name}...`} name="review" id=""></textarea>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <Button
                                        className="inline-flex items-center gap-2 rounded-md bg-[#2ba329] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner"
                                        type="submit"
                                    >
                                        Send Request
                                    </Button>
                                </div>
                            </form>
                        </div>
                        {/* <div className="mt-4 flex justify-end">
                            <Button
                                className="inline-flex items-center gap-2 rounded-md bg-[#2ba329] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner"
                                type="submit"
                            >
                                Send Request
                            </Button>
                        </div> */}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default ReviewModal;