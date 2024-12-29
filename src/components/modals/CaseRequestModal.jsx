import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

const CaseRequestModal = ({ isOpen, setIsOpen, id }) => {

    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black/30 duration-1000 ease-out data-[closed]:opacity-0"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                        <DialogTitle as="h3" className="text-base/7 font-medium text-slate-600 text-center">
                            Case Request To - <br /> 
                            <span className="text-xl font-semibold">Advocate Tashdik Khan</span>
                        </DialogTitle>
                        <div className="my-6">
                            <form className="space-y-5">
                                <div className="grid grid-cols-6 gap-2">
                                    <h3 className="col-span-1 text-slate-600 font-medium">Name : </h3>
                                    <input className="col-span-5 border-b focus:outline-none focus:border-[#2ba329]" type="text" />
                                </div>
                                <div className="grid grid-cols-6 gap-2">
                                    <h3 className="col-span-1 text-slate-600 font-medium">Email : </h3>
                                    <input className="col-span-5 border-b focus:outline-none focus:border-[#2ba329]" type="text" />
                                </div>
                                <div>
                                    <textarea className="w-full p-2 border focus:outline-none  focus:border-[#2ba329]" rows={10} placeholder="Place your message...." name="" id=""></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button
                                className="inline-flex items-center gap-2 rounded-md bg-[#2ba329] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner"
                                onClick={() => setIsOpen(false)}
                            >
                                Send Request
                            </Button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default CaseRequestModal;