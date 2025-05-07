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
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="cursor-pointer mr-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
                    <Link to='/' className="font-bold text-xl">Law.Bd</Link>
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