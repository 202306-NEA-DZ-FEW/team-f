import Image from "next/image";

const SecondHeroSection = ({ children }) => {
    return (
        <section class='bg-white py-16 mt-16'>
            <div class='container max-w-screen-xl mx-auto px-4'>
                <div class='flex flex-col lg:flex-row justify-between space-x-16 items-center '>
                    <div class='flex justify-center  lg:w-1/2'>
                        <img
                            src='/images/home-page/teamwork.jpeg'
                            alt='Image'
                            className='rounded-lg shadow-lg max-h-[600px] w-full object-cover object-center'
                        />
                    </div>

                    <div class='lg:w-1/2'>
                        <h1 class='font-semibold text-gray-900 text-xl md:text-4xl mb-20'>
                            You can help lots of people by <br />
                            donating
                        </h1>

                        <div class='grid grid-cols-1 md:grid-cols-2 md:space-x-20 mb-16'>
                            <div class='mb-5 md:mb-0'>
                                <div class='w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl mb-4'>
                                    <img
                                        src='/images/home-page/icon4.svg'
                                        alt='icon'
                                    />
                                </div>

                                <h3 class='font-semibold text-gray-900 text-xl md:text-3xl mb-4'>
                                    10000+
                                </h3>

                                <p class='font-light text-gray-400 text-md md:text-lg'>
                                    Fundraising campaign in <br />
                                    all time
                                </p>
                            </div>

                            <div>
                                <div class='w-20 py-6 flex justify-center bg-red-500 bg-opacity-5 rounded-xl mb-4'>
                                    <img
                                        src='/images/home-page/icon1.svg'
                                        alt='icon'
                                    />
                                </div>

                                <h3 class='font-semibold text-gray-900 text-xl md:text-3xl mb-4'>
                                    +120k items
                                </h3>

                                <p class='font-light text-gray-400 text-md md:text-lg'>
                                    Raised and counting <br />
                                    donations in all time
                                </p>
                            </div>
                        </div>

                        <div class='grid grid-cols-1 md:grid-cols-2 md:space-x-20'>
                            <div class='mb-5 md:mb-0'>
                                <div class='w-20 py-6 flex justify-center bg-yellow-500 bg-opacity-5 rounded-xl mb-4'>
                                    <img
                                        src='/images/home-page/icon2.svg'
                                        alt='icon'
                                    />
                                </div>

                                <h3 class='font-semibold text-gray-900 text-xl md:text-3xl mb-4'>
                                    1200+
                                </h3>

                                <p class='font-light text-gray-400 text-md md:text-lg'>
                                    Our volunteer around the <br />
                                    world
                                </p>
                            </div>

                            <div>
                                <div class='w-20 py-6 flex justify-center bg-green-500 bg-opacity-5 rounded-xl mb-4'>
                                    <img
                                        src='/images/home-page/icon3.svg'
                                        alt='icon'
                                    />
                                </div>

                                <h3 class='font-semibold text-gray-900 text-xl md:text-3xl mb-4'>
                                    98%
                                </h3>

                                <p class='font-light text-gray-400 text-md md:text-lg'>
                                    Positive review from <br />
                                    public
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondHeroSection;
