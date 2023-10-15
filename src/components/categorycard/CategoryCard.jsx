import React from "react";

const CategoryCard = ({ category }) => {
    return (
        <div className='max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
            <img
                className='h-48 w-full object-cover'
                src={category.image}
                alt={category.name}
            />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{category.name}</div>
            </div>
        </div>
    );
};

export default CategoryCard;
