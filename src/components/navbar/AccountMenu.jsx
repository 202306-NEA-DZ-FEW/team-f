import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";

const AccountMenu = ({ logout }) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='relative items-center justify-end hidden md:flex '>
            <button
                onClick={() => setOpenMenu(!openMenu)}
                className='text-base font-medium text-black whitespace-nowrap hover:text-lime-700'
            >
                <Image
                    src='/images/account.svg'
                    width={36}
                    height={36}
                    alt='account'
                />
            </button>
            <div
                className={`${
                    openMenu ? "block" : "hidden"
                } absolute top-[115%]  -right-4 transition p-3 w-48 h-fit bg-white shadow-lg rounded-lg`}
            >
                <div className='flex flex-col gap-4'>
                    <Link
                        href='/account'
                        className='   text-black whitespace-nowrap hover:text-lime-700'
                    >
                        <div className='flex flex-row items-center gap-3'>
                            <MdAccountCircle className='text-3xl ' />
                            <span className='text-lg font-medium'>
                                Your account
                            </span>
                        </div>
                    </Link>
                    <button
                        onClick={logout}
                        className='text-lime-700 whitespace-nowrap hover:opacity-75'
                    >
                        <div className='flex flex-row items-center gap-4 '>
                            <BiLogOut className='text-3xl  -ml-1' />
                            <span className='text-lg font-medium '>
                                Log Out
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountMenu;
