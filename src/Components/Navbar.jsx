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
            <div className="navbar  bg-base-100 shadow-sm max-w-screen-2xl mx-auto xl:px-24">
                <div className="navbar-start ">
                    
                    <div className='flex lg:flex-row'>
                    <Link to='/' className="font-bold flex gap-4 text-xl">
                        <img src="/logo.png" alt="Law.Bd Logo" className="w-8 h-8" />
                        Law.Bd
                    </Link>
                    </div>
                </div>

                <div className="navbar-end flex justify-between hidden lg:flex">
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
                                <p>{cart.length}</p>

                            </NavLink>
                        </li>


                    </ul>
                </div>
                <Button label='Contact Now' />
                <div>
                </div>
            </div>
        </>
    );
};

export default Navbar;