import React from "react";

const featuresTab = [
    {
        title: "Sharing",
        description: "Share your items with others",
        img: "/images/home-page/hands.png",
    },
    {
        title: "Swapping",
        description: "Swap your items with others",
        img: "/images/home-page/focus-group.png",
    },
    {
        title: "Selling",
        description: "Sell your items with others",
        img: "/images/home-page/help.png",
    },
];

function ValueSection() {
    return (
        <section className='bg-white py-16 md:mt-10'>
            <div className='container max-w-screen-xl mx-auto px-4'>
                <p className='font-light text-gray-500 text-lg md:text-xl text-center uppercase mb-6'>
                    Our Aim
                </p>

                <h1 className='font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-10'>
                    We believe we can do more <br />
                    togather
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
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
                <div className='w-20  flex justify-center bg-blue-200 bg-opacity-30 text-green/50 rounded-xl'>
                    <img src={img} alt={title} />
                </div>
            </div>

            <h4 className='font-semibold text-lg md:text-2xl text-gray-900 mb-6'>
                {title}
            </h4>

            <p className='font-light text-black/80 text-md md:text-xl mb-6'>
                {description}
            </p>
        </div>
    );
};

export default ValueSection;
