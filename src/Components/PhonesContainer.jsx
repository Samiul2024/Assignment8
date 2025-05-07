import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';
import Button from './ui/Button';
import { MdShoppingCart, MdBookmarkAdd } from "react-icons/md";


const PhonesContainer = ({ phones }) => {
    const [displayPhones, setDisplayPhones] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        if (showAll) {
            setDisplayPhones(phones)

        } else {
            setDisplayPhones(phones.slice(0, 6))

        }
    }, [phones, showAll])
    // console.log(phones);
    return (
        <div className='py-12'>
            <div className='flex flex-col justify-center text-center mx-36 my-8 gap-4   items-center'>

                <h1 className='font-bold text-4xl'>Our Best Lawyers</h1>
                <p className='text-xl'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                {
                    displayPhones.map(phone => (
                        <PhoneCard
                            key={phone.id}
                            phone={phone}
                        />
                    ))
                }
            </div>
            {/* <button onClick={() => {
                setShowAll(prv => !prv)
                if (showAll) window.scrollTo(0, 350)
            }} className="relative inline-block text-lg group cursor-pointer">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">{showAll ? 'Show Less' : 'Show All'}</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </button> */}
            <div className='text-center'>
                <Button onClick={() => {
                    setShowAll(prv => !prv)
                    if (showAll) window.scrollTo(0, 350)
                }} label={showAll ? 'Show Less' : 'Show All Lawyer'} />
            </div>
        </div>
    );
};

export default PhonesContainer;