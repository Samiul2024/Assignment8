import React, { useEffect, useState } from 'react';
// import PhoneCard from '../Components/PhoneCard';
import { getFavourites, removeFavourites } from '../utilis';
import EmptyState from '../Components/ui/EmptyState';
import BookedCard from '../Components/ui/BookedCard';

const Favourites = () => {
    const [displayPhones, setDisplayPhones] = useState([])
    useEffect(() => {
        const savedPhones = getFavourites()
        setDisplayPhones(savedPhones)
    }, [])

    const handleDelete = id => {
        removeFavourites(id)
        setDisplayPhones(getFavourites())
    }
    if (displayPhones.length < 1) return <EmptyState />
    return (
        <div className='py-12 flex flex-col gap-16 '>
            <div className='flex gap-4 flex-col text-center justify-center items-center'>
                <h1 className='font-bold text-4xl'>My Today Appointments</h1>
                <p className='text-xl'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>
            <div className='grid grid-cols-1  gap-8 mb-8'>
                {
                    displayPhones.map(phone => (
                        <BookedCard
                            key={phone.id}
                            phone={phone}
                            deletable={true}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Favourites;