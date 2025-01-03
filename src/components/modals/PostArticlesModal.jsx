import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

import { MdOutlineCancel } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const PostArticlesModal = ({ isOpen, setIsOpen, id, refetch }) => {

    const axiosPublic = useAxiosPublic();

    const handlePostArticles = async e => {
        e.preventDefault();

        const article = e.target.article.value;
        const heading = e.target.heading.value;
        const userName = localStorage.getItem("userName");
        const email = localStorage.getItem("email");

        const articleDoc = {
            advocateName: userName,
            email,
            advocateId: id,
            image: "",
            heading,
            article
        }

        // console.log(articleDoc);

        const res = await axiosPublic.post('/article', articleDoc);

        if (res.data.insertedId) {
            setIsOpen(false);
            refetch();

            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `You have successfully post an Article`,
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

                        <DialogTitle as="h3" className="text-lg font-medium text-slate-600 text-center">
                            Post an Article
                        </DialogTitle>
                        <div className="mt-6">
                            <form onSubmit={handlePostArticles} className="space-y-5">
                                <div className="grid grid-cols-6 gap-2">
                                    <h3 className="col-span-1 text-slate-600 font-medium">Title : </h3>
                                    <input
                                        required
                                        placeholder="Article Title..."
                                        className="col-span-5 border-b focus:outline-none focus:border-[#2ba329] text-gray-600" type="text" name="heading" />
                                </div>
                                <div>
                                    <textarea
                                        required
                                        className="w-full p-2 border focus:outline-none  focus:border-[#2ba329] text-gray-600" rows={10} placeholder="Place your article...." name="article" id=""></textarea>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <Button
                                        className="inline-flex items-center gap-2 rounded-md bg-[#2ba329] py-1.5 px-4 text-sm/6 font-semibold text-white shadow-inner"
                                        type="submit"
                                    >
                                        Post
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default PostArticlesModal;