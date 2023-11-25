import Image from "next/image";

import Button from "../button/Button";

/**
 *
 * @returns this is awesome
 */

const HeroSection = () => {
    return (
        <section className=' bg-white'>
            <div className=' max-w-screen-xl'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='text-center lg:text-left lg:mt-40 mt-20 lg:w-1/2 lg:pr-4'>
                        <h1 className='font-semibold text-lime-900 text-3xl md:text-6xl leading-normal mb-6'>
                            Sharing <b className='text-lime-600'>is Caring</b>{" "}
                        </h1>

                        <p className='font-light text-black text-md md:text-lg leading-normal mb-12'>
                            In a world where excess meets scarcity, let&apos;s
                            come together to
                            <strong className='text-lime-600 uppercase'>
                                {" "}
                                share
                            </strong>
                            . Our platform empowers you to both share your extra
                            resources - be it clothes, furniture, or daily
                            essentials - and benefit from the warmth of shared
                            items from others. bring positive impacts to the
                            people around you.
                        </p>
                        <div className=' flex gap-3'>
                            <Button className='bg-lime-600' size='lg'>
                                Get started
                            </Button>
                            <Button
                                size='lg'
                                className='border-2 border-lime-600 bg-white text-lime-900'
                            >
                                Browse Items
                            </Button>
                        </div>
                    </div>

                    <div className='mt-24 lg:w-1/2'>
                        <img
                            src='/images/home-page/herosection-gif.gif'
                            alt='Image'
                            className='rounded-lg shadow-lg h-4/6 lg:ml-40'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
