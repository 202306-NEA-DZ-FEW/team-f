import Image from "next/image";

const SecondHeroSection = ({ children }) => {
    return (
        <section className='relative justify-center h-full mb-10  '>
            {/* Main Content */}
            <div className='lg:grid border border-gray h-[25rem] bg-green justify-center'>
                {/* Hero Image */}
                <Image
                    className='opacity-50 h-[20rem] w-auto mt-10'
                    src='/images/Shop.png'
                    width={600}
                    height={400}
                    alt='hero image'
                />

                {/* Card Section */}
                <div className='absolute border border-gray shadow-xl top-1/2 bg-white rounded-2xl w-full '>
                    <div className='flex flex-row items-center justify-center'>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondHeroSection;
