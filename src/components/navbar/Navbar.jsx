import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    AiOutlineClose,
    AiOutlineHome,
    AiOutlineInfoCircle,
    AiOutlineMenu,
    AiOutlineRead,
    AiOutlineShopping,
} from "react-icons/ai";

import { useAuth } from "@/context/AuthContext";

import AccountMenu from "./AccountMenu";
import LanguageMenu from "./LanguageMenu";

const navigation = [
    { name: "Home", href: "/", icon: AiOutlineHome },
    { name: "Products", href: "/products", icon: AiOutlineShopping },
    { name: "About Us", href: "/about", icon: AiOutlineInfoCircle },
    { name: "Blog", href: "/blog", icon: AiOutlineRead },
];
function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const { currentUser, logout } = useAuth();

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <div className='w-full'>
            <div className='relative  px-4  w-full bg-[#eeeedc] rounded-3xl'>
                <div className='w-full opacity-80'>
                    <div className='flex items-center justify-between py-6  md:justify-start md:space-x-10 '>
                        <div className='flex justify-start lg:w-0 lg:flex-1'>
                            <Link href='/'>
                                <div className='flex items-center'>
                                    <Image
                                        className='w-auto h-14 sm:h-10'
                                        src='./logo/hands.svg'
                                        alt='Logo'
                                        width={300}
                                        height={200}
                                    />
                                    <span className='ml-2 text-2xl font-medium text-lime-700 text-ellipsis'>
                                        <span className='text-3xl'>S</span>
                                        hareity
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className='-my-2 -mr-2 md:hidden'>
                            <button
                                onClick={toggleMenu}
                                className='inline-flex items-center justify-center p-2 text-gray-400 bg-[#eeeedc] rounded-md   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-700'
                            >
                                <span className='sr-only'>Open menu</span>
                                <AiOutlineMenu className='text-3xl text-black' />
                            </button>
                        </div>
                        <nav className='hidden space-x-10 md:flex'>
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className='text-base font-medium text-black hover:text-lime-600'
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        {currentUser ? (
                            <AccountMenu logout={logout} />
                        ) : (
                            <div className='items-center justify-end hidden md:flex md:flex-1 lg:w-0'>
                                <button className='text-base font-medium text-blck whitespace-nowrap hover:text-lime-700'>
                                    Sign in
                                </button>
                                <button className='inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-lime-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:opacity-75'>
                                    Sign up
                                </button>
                            </div>
                        )}
                        <LanguageMenu />
                    </div>
                </div>
                <NavbarMobile openMenu={openMenu} toggleMenu={toggleMenu} />
            </div>
        </div>
    );
}

const NavbarMobile = ({ openMenu, toggleMenu }) => {
    const { currentUser, logout } = useAuth();

    return (
        <div
            className={`${
                openMenu ? "block" : "hidden"
            } absolute w-full top-0 left-1/2 -translate-x-1/2 transition `}
        >
            <div className='bg-white flex flex-col justify-between rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  box-border pb-28 h-screen'>
                <div className='px-5 pt-5 pb-6  '>
                    <div className='flex items-center justify-between '>
                        <div className='flex items-center'>
                            <Image
                                className='w-auto h-8 sm:h-10'
                                src='./logo/hands.svg'
                                alt='logo'
                                width={300}
                                height={200}
                            />
                            <span className='ml-2 text-2xl font-medium text-lime-700'>
                                <span className='text-3xl'>S</span>hareity
                            </span>
                        </div>
                        <div className='-mr-2'>
                            <button
                                onClick={toggleMenu}
                                className='inline-flex items-center justify-center p-2  bg-white rounded-md  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-700'
                            >
                                <span className='sr-only'>Close menu</span>
                                <AiOutlineClose className='text-2xl' />
                            </button>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <nav className='grid gap-y-8'>
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className='flex items-center p-3 -m-3 rounded-md hover:bg-gray-50'
                                >
                                    <item.icon className='text-2xl text-lime-700 ' />
                                    <span className='ml-3 text-lg font-medium text-black'>
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className='px-5 py-6 space-y-6'>
                    {currentUser ? (
                        <>
                            <Link
                                href='/account'
                                className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-lime-700 border border-transparent rounded-md shadow-sm '
                            >
                                Your profile
                            </Link>
                            <button
                                onClick={logout}
                                className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-red border border-transparent rounded-md shadow-sm '
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href='/register'
                                className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-lime-700 border border-transparent rounded-md shadow-sm '
                            >
                                Sign up
                            </Link>
                            <p className='mt-6 text-base font-medium text-center text-gray-500'>
                                You have an account?
                                <Link href='/login' className='text-lime-700 '>
                                    Sign in
                                </Link>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
