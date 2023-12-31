import AboutPage from "@/pages/about";
import Image from "next/image";
import Link from "next/link";
import {
    BiLogoFacebookSquare,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
    BiSolidShareAlt,
} from "react-icons/bi";

const Footer = () => {
    return (
        <footer className='bg-lime-800 text-[#BAC738] p-8 opacity-95'>
            <div className='mx-auto flex flex-col items-center sm:flex-col lg:flex-row'>
                {/* Logo */}
                <div className='mx-2 mb-4'>
                    <Image
                        src='./logo/hands.svg'
                        alt='Logo'
                        width={40}
                        height={40}
                    />
                </div>
                {/* Columns */}
                <div className='flex flex-col sm:flex-row lg:flex-row justify-between px-10 mx-auto w-full'>
                    {/* First Column */}
                    <div className='flex flex-col items-center sm:mx-2 sm:mb-4'>
                        <Link
                            href='/about'
                            className='text-white hover:text-lime-950 mb-1'
                        >
                            About us
                        </Link>
                        <Link
                            href='/blog'
                            className='text-white hover:text-lime-950 mb-1'
                        >
                            Blogs
                        </Link>
                        <Link
                            href='/products'
                            className='text-white hover:text-lime-950 mb-1'
                        >
                            Listed Items
                        </Link>
                    </div>

                    {/* Second Column */}
                    <div className='flex flex-col items-center sm:mx-4 sm:mb-4'>
                        <h2>Contact us</h2>
                        <div className='flex items-center space-x-2 p-2'>
                            <a
                                href='#'
                                className='text-white hover:text-[#BAC738]'
                            >
                                <BiLogoFacebookSquare className='w-6 h-6' />
                            </a>
                            <a
                                href='#'
                                className='text-white hover:text-[#BAC738]'
                            >
                                <BiLogoInstagram className='w-6 h-6' />
                            </a>
                            <a
                                href='#'
                                className='text-white hover:text-[#BAC738]'
                            >
                                <BiLogoLinkedinSquare className='w-6 h-6' />
                            </a>
                            <a
                                href='#'
                                className='text-white hover:text-[#BAC738]'
                            >
                                <BiSolidShareAlt className='w-6 h-6' />
                            </a>
                        </div>
                    </div>

                    {/* Third Column */}
                    <div className='mx-4 items-center flex-col flex mb-4'>
                        <h2>Address</h2>
                        <p className='text-white'>123 Street, City, Country</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
