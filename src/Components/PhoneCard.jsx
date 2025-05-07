import React from 'react';
import { Link } from 'react-router';
import { MdDeleteForever } from "react-icons/md";
import Button from './ui/Button';
// import { removeFavourites } from '../utilis';


const PhoneCard = ({ phone, deletable, handleDelete }) => {
    const { name, availability, experience, expertness, licenseNo, description, image, id } = phone || {}
    return (
        <div className="border flex flex-row p-4 gap-16 rounded-2xl card bg-base-100 shadow-sm">
            <figure>
                <img className='rounded-2xl'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex gap-3'>
                    <h1 className='bg-base-300 rounded-3xl px-2 py-2 text-amber-500  text-center'>
                        {availability ? 'Available' : 'Not available'}
                    </h1>
                    <h1 className='bg-base-300 rounded-4xl px-3 py-1 text-blue-500 '>
                        {experience} Experience
                    </h1>
                </div>
                <div className='flex flex-col mt-1 gap-1'>
                    <h2 className="font-bold text-2xl card-title">{name}</h2>
                    <p>{expertness} Expert</p>
                    <p>
                        License No: {licenseNo}
                    </p>
                </div>
                <div className="text-center my-4" >

                    <Link to={`/phone-details/${id}`}>
                        <Button label='View Details' />
                    </Link>
                </div>
            </div>

            {
                deletable && (
                    <div onClick={() => handleDelete(id)}
                        className='absolute -top-3 -right-3 bg-gray-900 p-3 ml-5 rounded-full hover:bg-gray-300 group cursor-pointer'>
                        <MdDeleteForever size={35}
                            className='text-gray-100 group-hover:text-gray-900'
                        />
                    </div>
                )}
        </div>
    );
};

export default PhoneCard;
