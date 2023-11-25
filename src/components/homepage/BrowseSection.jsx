import React from "react";

import Button from "../button/Button";

function BrowseSection() {
    return (
        <section className='py-28'>
            <div className='container mx-auto'>
                <div className='-mx-4 flex flex-wrap'>
                    <div className='w-full px-4 lg:w-8/12'>
                        <div className='relative mb-8 h-[370px] md:h-[480px]'>
                            <img
                                src='images/home-page/browse-1.avif'
                                alt='product'
                                className='h-full w-full object-cover object-center rounded-lg opacity-90 '
                            />

                            <div className='absolute top-0 left-0 flex h-full w-full items-center px-8 md:px-12'>
                                <div className='max-w-[420px]'>
                                    <h3 className='mb-4 lg:text-6xl text-2xl font-semibold text-lime-700'>
                                        Elevate Your Space !
                                    </h3>
                                    <p className='mb-10 text-lg font-light text-slate-900'>
                                        Transform your surroundings with our
                                        exquisite furniture collection Discover
                                        the perfect pieces to reflect your taste
                                        and elevate every corner of your home
                                        with our curated selection.
                                    </p>
                                    <Button
                                        className='bg-lime-600 lg:h-12 bg-opacity-50 transition-all duration-300 hover:-translate-y-1'
                                        href='/products/?category='
                                    >
                                        browse products
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-4 lg:w-4/12'>
                        <div className='-mx-4 flex flex-wrap'>
                            <div className='w-full px-4 md:w-1/2 lg:w-full rounded-lg'>
                                <div className='relative mb-8 h-[223px]'>
                                    <img
                                        src='images/home-page/browse-2.avif'
                                        alt='product'
                                        className='h-full w-full object-cover object-center rounded-lg opacity-90'
                                    />

                                    <div className='absolute top-0 left-0 flex h-full w-full items-end justify-end p-6 sm:p-9 bg-black/40'>
                                        <div className='max-w-[180px] text-right flex flex-col justify-end items-end'>
                                            <h3 className='mb-3 block text-lg font-bold text-white xs:text-xl sm:text-2xl lg:text-xl xl:text-2xl'>
                                                Student Electronic Collection
                                            </h3>
                                            <Button
                                                href='/products/?category='
                                                className=' text-white bg-lime-600 bg-opacity-60 transition-all duration-300 hover:-translate-y-1'
                                            >
                                                Discover Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full px-4 md:w-1/2 lg:w-full rounded-lg'>
                                <div className='relative mb-8 h-[223px]'>
                                    <img
                                        src='images/home-page/browse-3.avif'
                                        alt='product'
                                        className='h-full w-full object-cover object-center rounded-lg'
                                    />

                                    <div className='absolute top-0 left-0 flex h-full w-full items-end justify-end p-6 sm:p-9 bg-black/10'>
                                        <div className='max-w-[180px] text-right flex flex-col justify-end items-end'>
                                            <h3 className='mb-3 block text-lg font-bold text-white  xs:text-xl sm:text-2xl lg:text-xl xl:text-2xl'>
                                                Summer Travel Collection
                                            </h3>
                                            <Button
                                                href='/products/?category='
                                                className=' text-white  bg-lime-600 bg-opacity-60 transition-all duration-300 hover:-translate-y-1'
                                            >
                                                Discover Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrowseSection;
