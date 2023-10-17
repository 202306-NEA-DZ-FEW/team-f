import React from "react";

const Card = ({ icon, title, children }) => {
    return (
        <div className='p-4 mb-4 w-1/3 flex justify-center items-center'>
            <div className='text-center '>
                {icon}
                <h3 className='p-2 font-bold'>{title}</h3>
                {children}
            </div>
        </div>
    );
};

export default Card;
