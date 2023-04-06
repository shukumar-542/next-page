import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
   
    return (
        <div className='flex justify-between bg-gray-100 px-4 py-5 mx-auto sm:max-w-lg md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ' >
            {/* logo section */}
            
            <div>
                <Link to='/' >
                    <div className='inline-flex space-x-1'>
                        <BoltIcon className='w-6 h-6 text-blue-600'></BoltIcon>
                        <span className='font-bold tracking-wide text-gray-600'>NextPage</span>
                    </div>
                </Link>
            </div>

            {/* menu bar section */}
            <div>
                <ul className='lg:flex hidden items-center space-x-8 font-bold'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-800' : ''}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/books' className={({ isActive }) => isActive ? 'text-blue-800' : ''}>
                        <li>Books</li>
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-800' : ''}>
                        <li>About Us</li>
                    </NavLink>

                </ul>
            </div>

            {/* Mobile responsive Section */}
            <div className='lg:hidden'>
                <button title='is menu open'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Bars3BottomRightIcon className='w-5 text-red-600'></Bars3BottomRightIcon>

                </button>

                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full  z-10'>
                        <div className='p-5 bg-white border rounded shadow-sm'>
                            {/* Logo & Button section */}
                            <div className='flex items-center justify-between mb-4'>
                                <div>
                                    <Link to='/' className='inline-flex items-center'>
                                        <BoltIcon className='h-6 w-6 text-blue-500' />
                                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                            nextPage
                                        </span>
                                    </Link>
                                </div>
                                {/* Dropdown menu close button */}
                                <div>
                                    <button
                                        aria-label='Close Menu'
                                        title='Close Menu'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <XMarkIcon className='w-5 text-gray-600' />
                                    </button>
                                </div>
                            </div>
                            {/* Mobile Nav Items Section */}
                            <nav className='p-5'>
                                <ul className='space-y-4'>
                                    <li>
                                        <Link to='/' className='default'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/books'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Books
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/about'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}

            </div>
        </div>


    );
};

export default Header;