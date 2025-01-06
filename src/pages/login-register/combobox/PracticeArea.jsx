import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { useState } from 'react';
import clsx from 'clsx'
import { IoMdCheckmark, IoIosArrowDown } from "react-icons/io";


const areas = [
    { id: 1, name: 'High Court Division (Dhaka)' },
    { id: 2, name: 'Appellate Division (Dhaka)' },
    { id: 3, name: 'Dhaka District Judge Court' },
    { id: 4, name: 'Chattogram District Judge Court' },
    { id: 5, name: 'Rajshahi District Judge Court' },
]


const PracticingCourt = ({setSelectedCourt}) => {

    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(areas[-1])

    const filteredAreas =
        query === ''
            ? areas
            : areas.filter((area) => {
                return area.name.toLowerCase().includes(query.toLowerCase())
            })


    return (
        // <div className='border'>
             <div className="w-full mt-4">
                <Combobox value={selected} onChange={(value) => {setSelected(value); setSelectedCourt(value.name)}} onClose={() => setQuery('')}>
                    <div className="relative">
                        <ComboboxInput
                        placeholder='Choose Practicing Court'
                            className={clsx(
                                'w-full border-b border-slate-400 bg-white py-1.5 pr-8 pl-3 text-base text-gray-600 font-normal',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                            displayValue={(area) => area?.name}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                            <IoIosArrowDown className="size-4 fill-black group-data-[hover]:fill-black" />
                        </ComboboxButton>
                    </div>

                    <ComboboxOptions
                        anchor="bottom"
                        transition
                        className={clsx(
                            'mt-2 w-[var(--input-width)] rounded-xl border border-slate-400 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
                            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                        )}
                    >
                        {filteredAreas.map((area) => (
                            <ComboboxOption
                                key={area.id}
                                value={area}
                                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-[#82f180]"
                            >
                                <IoMdCheckmark className="invisible size-4 fill-white group-data-[selected]:visible" />
                                <div className="text-sm/6 text-gray-600">{area.name}</div>
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Combobox>
            </div> 
        // </div>
    );
};

export default PracticingCourt;