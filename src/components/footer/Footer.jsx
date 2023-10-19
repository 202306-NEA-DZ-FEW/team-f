import React from "react";
import {
    BiLogoFacebookSquare,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
    BiSolidShareAlt,
} from "react-icons/bi";

const Footer = () => {
    return (
        <footer className='bg-green text-white'>
            <div className='container mx-auto flex justify-center items-center flex-wrap p-8'>
                {/* Logo */}
                <div className='mx-4 mb-4 mr-8 '>
                    <img src='./Logo/logo.png' alt='Logo' className='w-20 ' />
                </div>

                {/* Columns */}
                <div className='flex flex-wrap flex-col lg:flex-row justify-center lg:justify-between w-full max-w-4xl'>
                    {/* First Column */}
                    <div className='flex flex-col mx-4 mb-4'>
                        <a
                            href='#'
                            className='text-white hover:text-black mb-1'
                        >
                            About us
                        </a>
                        <a
                            href='#'
                            className='text-white hover:text-black mb-1'
                        >
                            Blogs
                        </a>
                        <a
                            href='#'
                            className='text-white hover:text-black mb-1'
                        >
                            Listed items
                        </a>
                    </div>

                    {/* Second Column */}
                    <div className='flex flex-col items-center mx-4 mb-4'>
                        <h2>Contact us</h2>
                        <div className='flex w-full space-x-2  p-2'>
                            <a href='#' className='text-white hover:text-black'>
                                <BiLogoFacebookSquare className='w-6 h-6' />
                            </a>
                            <a
                                href='#'
                                className='text-white hover:text-black '
                            >
                                <BiLogoInstagram className='w-6 h-6' />
                            </a>
                            <a
                                href='#'
                                className='text-white hover:text-black '
                            >
                                <BiLogoLinkedinSquare className='w-6 h-6' />
                            </a>
                            <a
                                href='#'
                                className='text-white hover:text-black '
                            >
                                <BiSolidShareAlt className='w-6 h-6' />
                            </a>
                        </div>
                    </div>

                    {/* Third Column */}
                    <div className='mx-4 mb-4'>
                        <h2>Adress</h2>
                        <p className='text-gray-300'>
                            123 Street, City, Country
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
