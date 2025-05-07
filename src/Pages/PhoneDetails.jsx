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
            <div className='w-full py-12'>
                <img
                    src={image} alt="Banner Image" className='w-full mx-auto md:w-auto mb-8'
                />
                {/* Title anad Buttons */}
                <div className='flex justify-between'>
                    <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                    <div className='space-x-4'>
                        <Button onClick={handleCart} label={<MdShoppingCartCheckout />} />
                        <Button onClick={handleFavourite} label={<MdBookmarkAdd />} />
                    </div>
                </div>
                {/* Details */}
                <div>
                    <h1>Details:</h1>
                    <div className='flex flex-col'>
                        <p className=''>
                            Brand: {brand} <br />
                            Model: {model} <br />
                            Storage: {storage} <br />
                            Camera Info: {camera_info} <br />
                            Description: {description} <br />
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default PhoneDetails;