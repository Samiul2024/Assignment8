import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutubeSquare } from "react-icons/fa";





const Footer = () => {
    return (
        <div>
            <footer className="footer h-[320px] sm:footer-horizontal footer-center bg-black text-white p-4">
                <div className='items-center mx-auto text-center flex flex-col'>

                    <div className='flex  lg:flex-row'>
                        <Link to='/' className="font-bold  flex gap-4 text-3xl">
                            <img src="/logo.png" alt="Law.Bd Logo" className="w-8  h-8" />
                            Law.Bd
                        </Link>
                    </div>
                    {/* navigation links starts */}
                    <div className="navbar flex flex-row justify-between  lg:flex">
                        <ul className="menu menu-horizontal px-1">
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
                    {/* navigation links ends */}

                    {/* Social Icons */}
                    
                    <div>
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
                </div>

            </footer>

        </div>
    );
};

export default Footer;