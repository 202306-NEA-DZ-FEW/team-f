import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LanguageMenu = () => {
    const [language, setLanguage] = useState("en");
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='relative items-center justify-end hidden md:flex '>
            <button
                onClick={() => setOpenMenu(!openMenu)}
                className='text-base font-medium text-black whitespace-nowrap hover:text-green'
            >
                <Image
                    src={`/images/${language}-flag.svg`}
                    width={36}
                    height={36}
                    alt={language == "en" ? "English" : "Arabic"}
                />
            </button>
            <div
                className={`${
                    openMenu ? "block" : "hidden"
                } absolute top-[115%]  -right-4 transition p-3 w-48 h-fit bg-white shadow-lg rounded-lg`}
            >
                <div className='flex flex-col gap-4'>
                    <Link
                        href='/'
                        locale='en'
                        className='   text-black whitespace-nowrap hover:text-green'
                    >
                        <div
                            className='flex flex-row items-center gap-5'
                            onClick={() => {
                                setLanguage("en");
                                setOpenMenu(false);
                            }}
                        >
                            <Image
                                src='/images/en-flag.svg'
                                width={36}
                                height={36}
                                alt='English'
                            />
                            <span className='text-lg font-medium'>English</span>
                        </div>
                    </Link>
                    <Link
                        href='/'
                        locale='ar'
                        className=' text-base font-medium text-black whitespace-nowrap hover:text-green'
                    >
                        <div
                            className='flex flex-row items-center gap-5'
                            onClick={() => {
                                setLanguage("ar");
                                setOpenMenu(false);
                            }}
                        >
                            <Image
                                src='/images/ar-flag.svg'
                                width={36}
                                height={36}
                                alt='Arabic'
                            />
                            <span className='text-xl font-medium'>العربية</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default LanguageMenu;
