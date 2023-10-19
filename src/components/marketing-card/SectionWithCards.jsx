import React from "react";
import Card from "./Card";

const SectionWithCards = () => {
    return (
        <section className='bg-gray-100 p-8 border w-5/6 mx-auto text-center my-6 '>
            <h2 className='text-2xl font-bold mb-8 '>Section Title</h2>

            <div className='flex flex-wrap  items-center mx-4 border-red'>
                <div className='w-full md:w-1/3 px-4 mb-4 flex flex-col items-center justify-center border border-blue-600'>
                    <Card>
                        <img
                            className='pb-4'
                            src='./marketing-icons/sec1.png'
                            alt='Icon'
                        />
                        <h3 className='text-xl font-bold mb-2'>Card 1 Title</h3>
                        <p>Card 1 Content</p>
                    </Card>
                </div>

                <div className='w-full md:w-1/3 px-4 mb-4 bg-white flex flex-col items-center justify-center border border-blue-600'>
                    <Card>
                        <img
                            className='pb-4'
                            src='./marketing-icons/sec1.png'
                            alt='Icon'
                        />
                        <h3 className='text-xl font-bold mb-2'>Card 1 Title</h3>
                        <p>Card 1 Content</p>
                    </Card>
                </div>
                <div className='w-full md:w-1/3 px-4 mb-4 bg-white flex flex-col items-center justify-center border border-blue-600'>
                    <Card>
                        <img
                            className='pb-4'
                            src='./marketing-icons/sec1.png'
                            alt='Icon'
                        />
                        <h3 className='text-xl font-bold mb-2'>Card 1 Title</h3>
                        <p>Card 1 Content</p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default SectionWithCards;
