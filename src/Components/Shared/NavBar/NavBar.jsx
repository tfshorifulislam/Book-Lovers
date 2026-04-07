import React from 'react';
import { NavLink } from 'react-router';
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
    const link = <>
        <li>
            <NavLink to={'/'} className={({isActive}) => `${isActive? 'font-semibold border text-[#23BE0A] ' : 'text-[#131313]'} text-lg `}
            >Home</NavLink>
        </li>
        <li>
            <NavLink to={'Books'} className={({isActive}) => `${isActive? 'font-semibold border text-[#23BE0A] ' : 'text-[#131313]'} text-lg `}
            >Listed Books</NavLink>
        </li>
        <li>
            <NavLink to={'error'} className={({isActive}) => `${isActive? 'font-semibold border text-[#23BE0A] ' : 'text-[#131313]'} text-lg `}
            >Pages to Read</NavLink>
        </li>
    </>
    return (
        <div>
            <div className="flex justify-between items-center mt-5 mb-12">
                <div className=" ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FiMenu className='text-sm sm:text-lg md:text-xl' />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-5 shadow">
                            {link}
                        </ul>
                    </div>
                    <NavLink
                        to={'/'}
                        className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[#131313]">
                        Book Vibes
                    </NavLink>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-[#131313]">
                        {link}
                    </ul>
                </div>
                <div className="flex flex-wrap sm:flex-row gap-2 md:gap-4 sm:gap-3 ">
                    <a className="btn btn-xs sm:btn-sm md:btn-md">Sign In</a>
                    <a className="btn btn-xs sm:btn-sm md:btn-md">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;