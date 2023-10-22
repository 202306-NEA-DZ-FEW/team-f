import Image from "next/image";
import React from "react";

const ArticleCard = ({ title, location, date, content, imageUrl }) => {
    return (
        <div className='max-w-xs rounded overflow-hidden shadow-lg article-card'>
            <Image
                width={500}
                height={500}
                src='next.svg'
                alt='avatar'
                className='w-full'
            />
            <div className='px-6 py-4'>
                <h2 className='font-bold text-xl mb-2'>title</h2>
                <p className='text-sm'>location</p>
                <p className='text-sm text-gray-600'>date</p>
                <p className='text-base text-gray-700 mt-2'>content</p>
            </div>
        </div>
    );
};

export default ArticleCard;
