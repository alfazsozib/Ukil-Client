import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
    return (
        <div className='container mx-auto my-24'>
            <div className='my-6'>
                <h1 className='text-4xl font-semibold text-center'>FAQ</h1>
            </div>
            <div className="w-full px-4">
                <div className="mx-auto w-full max-w-2xl divide-y rounded-xl border">
                    <Disclosure as="div" className="p-6" defaultOpen={true}>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                            <span className="text-lg font-medium text-gray-600 group-data-[hover]:text-gray-600">
                                How can I search for nearby advocates on this website?
                            </span>
                            <IoIosArrowDown className="size-5  group-data-[open]:rotate-180" />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 text-base text-gray-600">
                            You can easily search for nearby advocates using our location-based search feature. Simply enter your location, our platform will display a list of qualified advocates near you.
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="p-6" defaultOpen={true}>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                            <span className="text-lg font-medium text-gray-600 group-data-[hover]:text-gray-600">
                                How do I submit a case request to an advocate?
                            </span>
                            <IoIosArrowDown className="size-5  group-data-[open]:rotate-180" />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 text-base text-gray-600">
                            After finding your preferred advocate, visit their profile page and click on the Case Request button. Fill in the required details about your case, and the advocate will review your request and respond accordingly.
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="p-6" defaultOpen={true}>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                            <span className="text-lg font-medium text-gray-600 group-data-[hover]:text-gray-600">
                                Can I read articles posted by advocates?
                            </span>
                            <IoIosArrowDown className="size-5  group-data-[open]:rotate-180" />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 text-base text-gray-600">
                            Yes! Our platform has a dedicated Articles section where advocates share valuable insights, legal advice, and updates. You can browse, read, and even bookmark articles for future reference.
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="p-6" defaultOpen={true}>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                            <span className="text-lg font-medium text-gray-600 group-data-[hover]:text-gray-600">
                                Is my personal information secure when I submit a case request?
                            </span>
                            <IoIosArrowDown className="size-5  group-data-[open]:rotate-180" />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 text-base text-gray-600">
                            Absolutely. We prioritize your privacy and data security. All your personal information and case details are encrypted and securely stored. Only the selected advocate will have access to your submitted case details.
                        </DisclosurePanel>
                    </Disclosure>
                    <Disclosure as="div" className="p-6" defaultOpen={true}>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                            <span className="text-lg font-medium text-gray-600 group-data-[hover]:text-gray-600">
                                How do I contact customer support if I face any issues?
                            </span>
                            <IoIosArrowDown className="size-5  group-data-[open]:rotate-180" />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 text-base text-gray-600">
                            If you encounter any problems or have queries, you can reach out to our Customer Support team via the Contact Us page. We are available 24/7 to assist you with any concerns.
                        </DisclosurePanel>
                    </Disclosure>
                </div>
            </div>
        </div>
    );
};

export default FAQ;