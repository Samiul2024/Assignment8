import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutubeSquare } from "react-icons/fa";





const Footer = () => {
    return (
        <div>

            <footer className=' bg-black text-white'>
                <div className='flex flex-col gap-8 py-8  justify-between items-center  mx-8 lg:mx-24'>
                    <div>
                        <Link to='/'>
                            <div className='flex items-center justify-center gap-4'>

                                <img src="/logo.png" alt="logo" />
                                <h1 className='text-3xl font-bold'>Law.BD</h1>
                            </div>
                        </Link>
                    </div>

                    {/* Nav Links starts */}
                    <div>
                        <ul className='flex justify-between items-center gap-4 md:gap-16'>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-indigo-600' : ''} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-indigo-600' : ''} to='/favourites'>
                                    My-Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-indigo-600' : ''} to='/about'>Blogs</NavLink>
                            </li>
                            <li className='relative'>
                                <NavLink className={({ isActive }) => isActive ? 'bg-indigo-600' : ''} to='/cart'>
                                    Contact Us
                                    <p>{ }</p>

                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Nav Links ends */}

                </div>
                <hr className='border border-1 border-dashed opacity-20 mx-20' />
                {/* Social Icons */}

                <div className='flex items-center justify-center-safe py-8'>
                    <ul className='flex gap-6'>
                        <li className='text-blue-600'>
                            <Link to='https://www.facebook.com/mdsamiullahossen20/'>
                                <FaFacebook size={30} />

                            </Link>
                        </li>
                        <li className='text-blue-600'>
                            <Link to='https://x.com/Samiulla_Hossen'>
                                <BsTwitterX size={30} />
                            </Link>
                        </li>
                        <li className='text-blue-600'>
                            <Link to='https://www.linkedin.com/in/md-samiulla-hossen-308218204/'>
                                <CiLinkedin size={30} />

                            </Link>
                        </li>
                        <li className=' text-blue-600'>
                            <Link to='https://www.youtube.com/@mshscontent4196'>
                                <FaYoutubeSquare className='rounded-full' size={30} />

                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;