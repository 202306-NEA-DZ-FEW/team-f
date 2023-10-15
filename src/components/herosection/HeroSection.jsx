import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className='lg:grid grid-cols-2'>
                <Image
                    className='lg:m-8 lg:w-11/12 w-80 mx-4'
                    src='/images/hero-img.svg'
                    width={500}
                    height={500}
                    alt='hero image'
                />
                <div className='lg:my-28'>
                    <p className='m-20 text-xl'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ullam, quia ad alias non saepe aliquid, totam,
                        aliqu perspiciatis optio doloribus debitis vero
                        voluptates esse. Voluptatum nihil nam fuga minima! quis
                        nostr exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <div className='flex justify-center'>
                        <button className='bg-green text-white border rounded-2xl w-40 py-2.5 font-semibold'>
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
