import React from "react";

import Button from "../button/Button";

function BrowseSection() {
    return (
        <section className='py-10'>
            <div className='container mx-auto'>
                <div className='-mx-4 flex flex-wrap'>
                    <div className='w-full px-4 lg:w-8/12'>
                        <div className='relative mb-8 h-[370px] md:h-[480px]'>
                            <img
                                src='images/home-page/browse-1.avif'
                                alt='product'
                                className='h-full w-full object-cover object-center rounded-lg'
                            />

                            <div className='absolute top-0 left-0 flex h-full w-full items-center px-8 md:px-12'>
                                <div className='max-w-[420px]'>
                                    <h3 className='mb-4 text-6xl font-semibold text-black'>
                                        Elevate Your Space !
                                    </h3>
                                    <p className='mb-10 text-base font-light text-black'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Vestibulum ornare
                                        vestibulum mollis. Nam vitae augue
                                        purus. Integer ac accumsan nunc.
                                    </p>
                                    <Button href='/products/?category='>
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
                                        className='h-full w-full object-cover object-center rounded-lg'
                                    />

                                    <div className='absolute top-0 left-0 flex h-full w-full items-end justify-end p-6 sm:p-9 bg-black/40'>
                                        <div className='max-w-[180px] text-right flex flex-col justify-end items-end'>
                                            <h3 className='mb-3 block text-lg font-bold text-white  xs:text-xl sm:text-2xl lg:text-xl xl:text-2xl'>
                                                Student Electronic Collection
                                            </h3>
                                            <Button
                                                href='/products/?category='
                                                className='bg-transparent text-white  border border-white '
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
                                                className=' text-white  border border-white bg-black/40 '
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
