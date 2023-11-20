import React from "react";

function CompaniesSection() {
    return (
        <div className='flex flex-col justify-center my-40'>
            <div className='text-xl text-center text-black/80 '>
                Trusted by <span className='text-green'>6+</span> customers
                worldwide
            </div>

            <div className='flex flex-wrap justify-center gap-5 mt-10 md:justify-around'>
                <img
                    src='/images/home-page/recoded-logo.png'
                    alt='Recoded logo'
                    className='w-40'
                />
                <img
                    src='/images/home-page/recoded-logo.png'
                    alt='Recoded logo'
                    className='w-40'
                />

                <img
                    src='/images/home-page/recoded-logo.png'
                    alt='Recoded logo'
                    className='w-40'
                />

                <img
                    src='/images/home-page/recoded-logo.png'
                    alt='Recoded logo'
                    className='w-40'
                />

                <img
                    src='/images/home-page/recoded-logo.png'
                    alt='Recoded logo'
                    className='w-40'
                />
            </div>
        </div>
    );
}

export default CompaniesSection;
