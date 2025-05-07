import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Components/ui/Button';
import { MdBookmarkAdd, MdShoppingCartCheckout } from 'react-icons/md';
import { addFavourite, addToCart, getCart } from '../utilis';
import { CartContext } from '../providers/Context';

const PhoneDetails = () => {
    const { setCart } = useContext(CartContext)
    const data = useLoaderData()
    const { id } = useParams()
    // console.log(id);
    const singlePhone = data.find(phone => phone.id === parseInt(id))
    // console.log(singlePhone);
    const {
        name,
        image,
        brand,
        model,
        description,
        storage,
        camera_info,
        availability,
        available,
        experience,
        expertness,
        licenseNo,
        bio,
        consultationFee,

    } = singlePhone || {}
    const handleFavourite = () => {
        addFavourite(singlePhone)
    }

    const handleCart = () => {
        // save to localStorage for persistency
        addToCart(singlePhone)
        // update state for instant ui change
        // setCart(prv=>[...prv,singlePhone])
        setCart(getCart())
    }

    return (
        <>
            {/* lawyer profile  section ends */}

            <div className='flex flex-col p-16 my-8 rounded-2xl text-center items-center justify-center bg-base-300 gap-8'>
                <h1 className='text-4xl font-bold'>
                    Lawyer’s Profile Details
                </h1>
                <p>
                    {bio}
                </p>
            </div>
            {/* lawyer profile  section ends */}

            {/* lawyer details section starts */}
            <div className='w-full  py-12'>
                <div className="border flex md:flex-row p-4 gap-8 rounded-2xl  bg-base-100 shadow-sm">
                    <img
                        src={image} alt="Banner Image" className='w-72 h-auto rounded-2xl object-cover  '
                    />
                    {/* card details */}
                    <div className="card-body">
                        <div className='flex gap-3'>

                            <h1 className='bg-base-300 rounded-4xl px-3 py-1 text-blue-500 '>
                                {experience} Experience
                            </h1>
                        </div>
                        <div>
                            <h2 className="font-bold text-2xl card-title">{name}</h2>

                        </div>
                        <div>
                            <p>{expertness} Expert</p>
                            <p>
                                License No: {licenseNo}
                            </p>
                        </div>
                        <div >

                            <p>Availability </p>
                            {/* map through available to show available days */}

                            {available.map((day, index) => (
                                <li key={index}>{day}</li>
                            ))}
                        </div>
                        <div>
                            Consultation Fee:<h1 className='text-green-700 font-bold'>Taka: {consultationFee}</h1>
                        </div>
                    </div>

                </div>
                {/* Title anad Buttons */}
                <div className='flex justify-between'>
                    <div className='space-x-4'>
                        <Button onClick={handleCart} label={<MdShoppingCartCheckout />} />
                        <Button onClick={handleFavourite} label={<MdBookmarkAdd />} />
                    </div>
                </div>

            </div >
        </>
    );
};

export default PhoneDetails;