import React from 'react';
import { Link } from 'react-router';
import { MdDeleteForever } from "react-icons/md";
// import Button from './ui/Button';
// import { removeFavourites } from '../utilis';


const BookedCard = ({ phone, deletable, handleDelete }) => {
    const { name, availability, experience, expertness, consultationFee, licenseNo, description, image, id } = phone || {}
    return (
        <>
            <div className="border flex flex-col md:p-8 p-4  rounded-2xl  bg-base-100 shadow-2xl">

                <div className="flex flex-row items-center md:justify-between md:gap-72 gap-8 ">
                    <div className='flex flex-col mt-1 gap-1'>
                        <h2 className="font-bold text-[#141414] text-2xl card-title">{name}</h2>
                        <p>{expertness} Expert</p>
                    </div>
                    <div>
                        <p className='font-medium text-xl'>Appointment Fee : {consultationFee} Taka</p>
                    </div>


                </div>

                <hr className='border border-dashed my-4 opacity-20' />
                <div className=' mt-4'>
                    {
                        deletable && (
                            <div onClick={() => handleDelete(id)}
                                className=' rounded-3xl text-center cursor-pointer'>
                                <button size={35}
                                    className='btn text-red-900 lg:px-[545px] px-20 py-4 rounded-3xl  bg-gray-300 font-semibold hover:bg-red-900 hover:text-white text-xl  '
                                >Cancel Appointment</button>
                            </div>
                        )}
                </div>
            </div>
        </>
    );
};

export default BookedCard;
