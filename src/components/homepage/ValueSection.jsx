const featuresTab = [
    {
        title: "Sharing",
        description: "Spread joy by sharing your things",
        img: "/images/home-page/weshare.svg",
    },
    {
        title: "Swapping",
        description: "Swap your items with others",
        img: "/images/home-page/swap.svg",
    },
    {
        title: "Selling",
        description: "Find value in selling your items",
        img: "/images/home-page/creditcard.svg",
    },
];

function ValueSection() {
    return (
        <section className='bg-white py-16 lg:py-0'>
            <div className='container max-w-screen-xl mx-auto px-4'>
                <p className='font-light text-lime-900 text-lg md:text-xl text-center uppercase mb-6'>
                    Our Aim
                </p>

                <h1 className='font-semibold text-lime-600 text-xl md:text-4xl text-center leading-normal mb-20'>
                    We believe we can do more <br />
                    together
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 '>
                    {featuresTab.map((feature, index) => {
                        return <Feature key={index} {...feature} />;
                    })}
                </div>
            </div>
        </section>
    );
}

const Feature = ({ title, description, img }) => {
    return (
        <div className='text-center'>
            <div className='flex justify-center mb-6'>
                <div className='w-36  flex justify-center bg-[#eeeedc] bg-opacity-50 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'>
                    <img src={img} alt={title} />
                </div>
            </div>

            <h4 className='font-semibold text-lg md:text-2xl text-lime-600 mb-6'>
                {title}
            </h4>

            <p className='font-light text-black/80 text-md md:text-xl mb-6'>
                {description}
            </p>
        </div>
    );
};

export default ValueSection;
