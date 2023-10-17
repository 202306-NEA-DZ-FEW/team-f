import React from "react";
import Card from "./Card";

const SectionWithCards = () => {
    return (
        <section className='bg-gray-100 p-8 border '>
            <h2 className='text-2xl font-bold mb-4 justify-center items-center flex border'>
                Section Title
            </h2>
            <div className='flex flex-wrap -mx-4 border '>
                <Card
                    icon={<img src='./marketing-icons/sec1.png' alt='Icon' />}
                    title='Card 1 Title'
                >
                    <p>Card 1 Content</p>
                </Card>
                <Card
                    icon={<img src='./marketing-icons/sec2.png' alt='Icon' />}
                    title='Card 1 Title'
                >
                    <p>Card 1 Content</p>
                </Card>
                <Card
                    icon={<img src='./marketing-icons/sec3.png' alt='Icon' />}
                    title='Card 1 Title'
                >
                    <p>Card 1 Content</p>
                </Card>
            </div>
        </section>
    );
};

export default SectionWithCards;
