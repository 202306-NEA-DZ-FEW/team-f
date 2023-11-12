import Image from "next/image";

const SecondHeroSection = ({ children }) => {
    return (
        <section>
            {/* Card Section with Background Image */}
            <div
                className='lg:grid border border-gray h-[25rem] bg-green flex items-center justify-center'
                style={{
                    backgroundImage: "url('/images/Shop.png')",
                    backgroundSize: "60% 300px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className='p-2 mt-48 flex justify-center w-full'>
                    <div className='flex flex-row w-5/6 justify-center bg-white border border-gray shadow-xl rounded-2xl items-center mx-4'>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondHeroSection;
