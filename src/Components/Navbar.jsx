import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router';
import { MdShoppingCart, MdBookmarkAdd } from "react-icons/md";
import { CartContext } from '../providers/Context';
import Button from './ui/Button';


const Navbar = () => {
    const { cart } = useContext(CartContext)
    // console.log(cart);
    return (
        <>
            <div className='flex  justify-between items-center py-4 px-6 mx-8 lg:mx-24'>
                <div>
                    <Link to='/'>
                        <div className='flex items-center justify-center lg:gap-4'>

                            <img src="/logo.png" alt="logo" />
                            <h1 className='text-3xl font-bold'>Law.BD</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <ul className='flex justify-between items-center gap-4 lg:gap-16'>
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
                                <p>{cart}</p>

                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Button label='Contact Us'/>
            </div>
            
        </>
    );
};

export default Navbar;