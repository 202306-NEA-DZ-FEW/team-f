import React from "react";

const Footer = () => {
    return (
        <footer className='bg-green text-white'>
            <div className='container mx-auto flex justify-center items-center flex-wrap p-8'>
                {/* Logo */}
                <div className='mx-4 mb-4 mr-8 border '>
                    <img src='/path/to/logo.png' alt='Logo' className='w-20 ' />
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
                    <div cclassName='flex items-center mx-4 mb-4'>
                        <h2>Contact us</h2>
                        <a href='#' className='text-black hover:text-white'>
                            <i className='fa-facebook'></i>
                        </a>
                        <a href='#' className='text-black hover:text-white'>
                            <i className=' fa-twitter'></i>
                        </a>
                        <a href='#' className='text-black hover:text-white'>
                            <i className='fa-instagram'></i>
                        </a>
                        <a href='#' className='text-black hover:text-white'>
                            <i className=' fa-linkedin'></i>
                        </a>
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
