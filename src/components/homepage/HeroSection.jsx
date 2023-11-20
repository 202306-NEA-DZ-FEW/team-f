import Image from "next/image";

import Button from "../button/Button";

/**
 *
 * @returns this is awsome
 */

const HeroSection = () => {
    return (
        <section className='bg-white py-4 md:mb-10'>
            <div className=' max-w-screen-xl mx-auto px-4'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='text-center lg:text-left mt-40 lg:w-1/2 lg:pr-4'>
                        <h1 className='font-semibold text-black text-3xl md:text-6xl leading-normal mb-6'>
                            Share for the world better life
                        </h1>

                        <p className='font-light text-black text-md md:text-lg leading-normal mb-12'>
                            Discover the Ultimate Student Marketplace: Transform
                            Your Campus Experience with Sharing, Donating,
                            Swapping, Selling, and Buying – Your One-Stop Shop
                            for Campus Living
                        </p>
                        <div className=' flex gap-3'>
                            <Button size='lg'>Get started</Button>
                            <Button size='lg' variant='outlinePrimary'>
                                Browse Items
                            </Button>
                        </div>
                    </div>

                    <div className='mt-24 lg:w-1/2'>
                        <img
                            src='/images/home-page/herosectionImg.jpeg'
                            alt='Image'
                            className='rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
